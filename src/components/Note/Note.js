import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

export default function Note(props) {
  const note = props.notes
    ? props.notes.find((n) => n.id === props.match.params.noteid)
    : props;

  console.log({ note });
  return (
    <div className="Note">
      <h2 className="Note_title">
        <Link to={`/note/${note.id}`}>{note.name}</Link>
      </h2>
      {note.content && <p>{note.content}</p>}
      <div className="Note_Date">
        <div className="Note_Date_Modified">
          Date Modified <span className="Date">{note.modified}</span>
        </div>
      </div>
      <button className="Note_delete" type="button">
        Delete Note
      </button>
    </div>
  );
}
