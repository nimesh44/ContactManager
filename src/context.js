import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };

    case "UPDATE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.id
            ? (contact = action.payload)
            : contact
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    // contacts as the arrays of multiple objects
    contacts: [
      // using the users data from JSONplaceholder API
      // {
      //   id: 1,
      //   name: "John Doe",
      //   email: "john88@gmail.com",
      //   phone: "9843783748"
      // },
      // {
      //   id: 2,
      //   name: "Richar Wilson",
      //   email: "richard@gmail.com",
      //   phone: "9847455483"
      // },
      // {
      //   id: 3,
      //   name: "Jacob Adamson",
      //   email: "jacob@gmail.com",
      //   phone: "9837837483"
      // }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then(res => this.setState({ contacts: res.data }));
  // }

  // Applying async and await instead of others
  async componentDidMount() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ contacts: res.data });
  }

  // // Lifecycle Methods
  // componentWillUpdate() {
  //   console.log("componentWillUpdate.....");
  // }
  // componentDidUpdate() {
  //   console.log("componentDidUpdate....");
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
