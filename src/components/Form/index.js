import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} style={{ float: "center", paddingtop: 30, paddingLeft: 15, paddingRight: 15 }} />
    </div>
  );
}
// float: "left", 
export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}