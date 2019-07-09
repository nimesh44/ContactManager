import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
// import uuid from "uuid";// Not nedded for the JSON Placeholder
import axios from "axios";

class AddContact extends Component {
  state = {
    name: "",
    rmail: "",
    phone: "",
    errors: {}
  };

  // Form onSubmit handler
  onSubmit = async (dispatch, e) => {
    e.preventDefault(); //Preventing default submission
    // console.log(this.state);
    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required" } });
      return;
    }

    if (email === "") {
      this.setState({ errors: { email: "Email is required" } });
      return;
    }

    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required" } });
      return;
    }

    const newContact = {
      // id: uuid(),// Removing for JSONplaceholder
      name,
      email,
      phone
    };

    // // Posting to fake REST API
    // axios
    //   .post("https://jsonplaceholder.typicode.com/users", newContact)
    //   .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data }));

    // Using async and await
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newContact
    );
    dispatch({ type: "ADD_CONTACT", payload: res.data });

    // Removed for JSONplaceholder
    // dispatch({ type: "ADD_CONTACT", payload: newContact });

    // Clear state after submit form data
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  //   // for checking individual state
  //   onNameChange = e => this.setState({ name: e.target.value });
  //   onEmailChange = e => this.setState({ email: e.target.value });
  //   onPhoneChange = e => this.setState({ phone: e.target.value });

  // Checking all in single function
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  {/* <div className="form-group">
                    <label htmlFor="Name">Name </label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control form-control-lg"
                      placeholder="Enter  your Name like 'Netra Prasad Neupane'"
                      value={Name}
                      // onChange={this.onNameChange}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Name"
                    name="name"
                    placeholder="Enter Name"
                    value={name}
                    onChange={this.onChange}
                    error={errors.name}
                  />

                  {/* 
                  <div className="form-group">
                    <label htmlFor="Email">Email </label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control form-control-lg"
                      placeholder="Enter  your Email........."
                      value={Email}
                      // onChange={this.onEmailChange}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  {/* 
                  <div className="form-group">
                    <label htmlFor="Phone">Phone</label>
                    <input
                      type="phone"
                      name="Phone"
                      className="form-control form-control-lg"
                      placeholder="Enter  your Phone........."
                      value={Phone}
                      // onChange={this.onPhoneChange}
                      onChange={this.onChange}
                    />
                  </div> */}
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    placeholder="Enter Phone"
                    value={phone}
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-info btn-block"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
