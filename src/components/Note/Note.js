import React from "react";
import { Link } from "react-router-dom";
import "./Note.css";

export default function Note(props) {
  return (
    <div className="Note">
      <h2 className="Note_title">
        <Link to={`/note/note-id`}>{props.name}</Link>
      </h2>
      <button className="Note_delete" type="button">
        Delete Note
      </button>
      <div className="Note_Date">
        <div className="Note_Date_Modified">
          Date Modified <span className="Date">{props.modified}</span>
        </div>
      </div>
    </div>
  );
}
