import React, { Component } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "./Note.css";

class Note extends Component {
  static defaultProps = {
    name: "",
    modified: Date.UTC,
  };

  render() {
    return (
      <div className="Note">
        <h2 className="Note_title">
          <Link to={`/note/note-id`}>{this.props.name}</Link>
        </h2>
        <button className="Note_delete" type="button">
          Delete Note
        </button>
        <div className="Note_Date">
          <div className="Note_Date_Modified">
            Date Modified
            <span className="Date">
              {format(this.props.modified, "Do MMM YYYY")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
