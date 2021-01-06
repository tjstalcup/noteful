import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Note from "./components/Note/Note";
import "./App.css";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  render() {
    return (
      <main className="App">
        <div className="Content">
          <Nav />
          {/* <Note /> */}
        </div>
      </main>
    );
  }
}

export default App;
