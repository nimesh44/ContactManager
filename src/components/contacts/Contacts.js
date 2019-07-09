import React, { Component } from "react";
import Contact from "./Contact";

import { Consumer } from "../../context";

class Contacts extends Component {
  // constructor() {
  //   super();
  // We have state for components for contancts
  // this.state = {
  //   // contacts as the arrays of multiple objects
  //   contacts: [
  //     {
  //       id: 1,
  //       Name: "John Doe",
  //       Email: "john88@gmail.com",
  //       Phone: "9843783748"
  //     },
  //     {
  //       id: 2,
  //       Name: "Richar Wilson",
  //       Email: "richard@gmail.com",
  //       Phone: "9847455483"
  //     },
  //     {
  //       id: 3,
  //       Name: "Jacob Adamson",
  //       Email: "jacob@gmail.com",
  //       Phone: "9837837483"
  //     }
  //   ]
  // };
  // }

  // deleteContact = id => {
  //   console.log(id);
  //   const { contacts } = this.state;

  //   const newContacts = contacts.filter(contact => contact.id !== id);

  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact </span> List
              </h1>
              {contacts.map(contact => (
                // <h2>{contact.name}</h2>
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );

    // // Destructuring
    // const { contacts } = this.state;

    // return (
    //   // Instead of div applying react fragmentaiton
    //   // <div>
    //   <React.Fragment>
    //     {contacts.map(contact => (
    //       // <h2>{contact.name}</h2>
    //       <Contact
    //         key={contact.id}
    //         Name={contact.Name}
    //         Email={contact.Email}
    //         Phone={contact.Phone}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //   </React.Fragment>
    //   //  </div>
    // );
  }
}

export default Contacts;
