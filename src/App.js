// /* global React */
// /* global ReactDOM */ to remove the syntax error caused by eslint
import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet.js"


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, { name: "luna", animal: "Dog", breed: "havae" }),
    React.createElement(Pet, {
      name: "luna",
      animal: "Dog",
      breed: "Havanese",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
