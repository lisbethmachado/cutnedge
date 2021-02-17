import React from "react";

export function List({ children }) {
  return (
    <div className="card clear-card">
      <div className="card-body">
        <div className="list-overflow-container">
          <ul className="list-group">{children}</ul>
        </div>
      </div>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}