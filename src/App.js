import React, { Component } from "react";
import "./App.css";

import Input from "./Input/Input";
import Validation from "./Validation/Validation";
import CharComponent from "./Char/Char";

class App extends Component {
  state = { text: "" };
  changeHandler = event => {
    this.setState({ text: event.target.value });
  };

  removeCharHandler = idx => {
    let text = this.state.text.split("");
    text.splice(idx, 1);
    text = text.join("");

    this.setState({ text: text });
    console.log(this.state);
  };

  render() {
    let validation = null;
    if (this.state.text.length < 5) {
      validation = <Validation value="Text too short" />;
    } else if (this.state.text.length > 5)
      validation = <Validation value="Text too long" />;
    else validation = <Validation value="Text length is 5." />;

    let charList = null;
    charList = (
      <div>
        {this.state.text.split("").map((character, index) => {
          // console.log(character);
          return (
            <CharComponent
              value={character}
              key={index}
              onClick={() => this.removeCharHandler(index)}
            />
          );
        })}
      </div>
      // console.log(charList);
    );

    return (
      <div className="App">
        <ol>
          <li>
            Create an input field (in App component) with a change listener
            which outputs the length of the entered text below it (e.g. in a
            paragraph).
          </li>
          <li>
            Create a new component (=> ValidationComponent) which receives the
            text length as a prop
          </li>
          <li>
            Inside the ValidationComponent, either output "Text too short" or
            "Text long enough" depending on the text length (e.g. take 5 as a
            minimum length)
          </li>
          <li>
            Create another component (=> CharComponent) and style it as an
            inline box (=> display: inline-block, padding: 16px, text-align:
            center, margin: 16px, border: 1px solid black).
          </li>
          <li>
            Render a list of CharComponents where each CharComponent receives a
            different letter of the entered text (in the initial input field) as
            a prop. You can split a string into an array of its characters with
            the split('') method. By passing just an empty string, it's split
            after every character. You may then re-create a string from that
            array by using join('') - again, joining with an empty string as a
            separator.
          </li>
          <li>
            When you click a CharComponent, it should be removed from the
            entered text.
          </li>
        </ol>
        <Input change={this.changeHandler} value={this.state.text} />
        {validation}
        {charList}
      </div>
    );
  }
}

export default App;
