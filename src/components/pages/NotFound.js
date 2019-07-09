import React from "react";

export default function() {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> page not found
      </h1>
      <p className="lead">
        {" "}
        Sorry, requested page does not exists .Plesase try different URL
      </p>
      <p className="text-secondary">
        Click here to go back to home <a href="./">Home</a>
      </p>
    </div>
  );
}
