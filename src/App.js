import React, { Component } from "react";
import Nav from "./components/Nav/Nav";
import Note from "./components/Note/Note";
import Notes from "./components/Notes/Notes";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  render() {
    const { notes } = this.state;
    return (
      <main className="App">
        <div className="Content">
          <Nav />
        </div>
        <div className="Note-Content">
          <Route path="/note/note-id" component={Note} />
          <Route exact path="/" render={() => <Notes notes={notes} />} />
        </div>
      </main>
    );
  }
}

export default App;
