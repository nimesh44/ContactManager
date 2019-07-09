import React from "react";

export default function About(props) {
  return (
    <div>
      {/* Reading id value */}
      <h1 className="display-4"> About Contact {props.match.params.id}</h1>
      <p className="lead">Simple app to manage contacts</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
