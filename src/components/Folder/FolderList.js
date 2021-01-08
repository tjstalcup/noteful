import React from "react";
import { Link } from "react-router-dom";
import LIST from "../../dummy-store";

export default function FolderList() {
  const folderList = LIST.folders.map((folder, i) => (
    <li key={i}>
      <Link to={`/folder/folder.id`} activeClassName="active">
        {folder.name}
      </Link>
    </li>
  ));
  return (
    <aside>
      <h2>Folders</h2>
      <Link to="/add/folder">Add Folder</Link>
      <nav>
        <ul className="Folder-List">{folderList}</ul>
      </nav>
    </aside>
  );
}
