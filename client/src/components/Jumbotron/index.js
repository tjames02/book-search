import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, width: 700, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
