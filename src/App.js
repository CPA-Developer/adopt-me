// /* global React */
// /* global ReactDOM */ to remove the syntax error caused by eslint
// import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
//import Pet from "./Pet.js"
import SearchParams from "./SearchParams.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, { name: "luna", animal: "Dog", breed: "havae" }),
//     React.createElement(Pet, {
//       name: "luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//   ]);
// };

const App = () => {
  return (
    <div>
      {/* route */}
      {/* <SearchParams /> */}
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
      ;
    </div>
  );
};

//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
