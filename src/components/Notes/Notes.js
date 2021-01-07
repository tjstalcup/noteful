import React, { Component } from "react";
import Note from "../Note/Note";
import NOTES from "../../dummy-store";
import "./Notes.css";

class Notes extends Component {
  render() {
    return (
      <section className="Note_List">
        <ul>
          {NOTES.notes.map((note, i) => (
            <li key={i}>
              <Note id={note.id} name={note.name} modified={note.modified} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Notes;
