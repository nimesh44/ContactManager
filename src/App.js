import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";// Removed for working for deployment
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import Contact from "./components/Contact";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
// Only for the lifecycle  method demostration
import Test from "./components/test/Test";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "./context";

function App() {
  // // Applying dynamic JSX
  // const name = "Netra";
  // const showHello = false;
  // const showMath = true;

  // const num1 = 20;
  // const num2 = 44;
  // let math;
  // if (showMath) {
  //   math = (
  //     <h5>
  //       {num1} + {num2} = {num1 + num2}
  //     </h5>
  //   );
  // } else {
  //   math = null;
  // }

  //   // USING CSS AND JSX
  //   return (
  //     // Rendering using react
  //     // return React.createElement(
  //     //   "div",
  //     //   { className: "App" },
  //     //   React.createElement("h1", null, "The app component")
  //     // );

  //     // Rendering using JSX
  //     <div className="App">
  //       <Header position="Contanct Manager " />

  //       {/* <label htmlFor="name">Name </label>
  //       <input type="text" />
  //       {showHello ? <h4>Hellow {name.toUpperCase()}</h4> : null}
  //       <br /> */}
  //       {/* {math} */}
  //       <br />
  //       <Contact
  //         Name="Netra Prasad Neupane"
  //         Email="nimesh.neupane43@gmail.com"
  //         Phone="90384983"
  //       />
  //       <Contact Name="Sunil Bal" Email="sunil44@gmail.com" Phone="90567384983" />
  //     </div>
  //   );
  // }

  //   // Using BOOTSTRAP AND JSX
  //   return (
  //     <div className="App">
  //       <Header position="Contanct Manager " />
  //       <br />
  //       <div className="container">
  //         <Contact
  //           Name="Netra Prasad Neupane"
  //           Email="nimesh.neupane43@gmail.com"
  //           Phone="90384983"
  //         />
  //         <Contact
  //           Name="Sunil Bal"
  //           Email="sunil44@gmail.com"
  //           Phone="90567384983"
  //         />
  //       </div>
  //     </div>
  //   );
  // }

  // Using state created in the Contancts.js
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header position="Contanct Manager " />
          <br />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about/:id" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              {/* <Route exact path="/contact/edit" component={EditContact} /> */}
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
            {/* <AddContact />
          <Contacts /> */}
          </div>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
