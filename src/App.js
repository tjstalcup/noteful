import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
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
        </div>
      </main>
    );
  }
}

export default App;
