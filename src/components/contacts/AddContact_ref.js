import React, { Component } from "react";
// Uncontrolled states

class AddContact extends Component {
  //     // Removing state
  //   state = {
  //     Name: "",
  //     Email: "",
  //     Phone: ""
  //   };

  constructor(props) {
    super(props);
    this.NameInput = React.createRef();
    this.EmailInput = React.createRef();
    this.PhoneInput = React.createRef();
  }
  // Form onSubmit handler
  onSubmit = e => {
    e.preventDefault(); //Preventing default submission
    // console.log(this.state);

    // Accessing submit value using Object
    const contact = {
      Name: this.NameInput.current.value,
      Email: this.EmailInput.current.value,
      Phone: this.PhoneInput.current.value
    };
    console.log(contact);
  };

  //   // for checking individual state
  //   onNameChange = e => this.setState({ Name: e.target.value });
  //   onEmailChange = e => this.setState({ Email: e.target.value });
  //   onPhoneChange = e => this.setState({ Phone: e.target.value });

  //   // Checking all in single function
  //   onChange = e => this.setState({ [e.target.name]: e.target.value });

  static defaultProps = {
    Name: "Fred Smith",
    Email: "fred@gmail.com",
    Phone: "444-444-4444"
  };

  render() {
    // const { Name, Email, Phone } = this.state;
    // For default Props
    const { Name, Email, Phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="Name">Name </label>
              <input
                type="text"
                name="Name"
                className="form-control form-control-lg"
                placeholder="Enter  your Name like 'Netra Prasad Neupane'"
                // value={Name}
                defaultValue={Name}
                // // onChange={this.onNameChange}
                // onChange={this.onChange}
                ref={this.NameInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Email">Email </label>
              <input
                type="email"
                name="Email"
                className="form-control form-control-lg"
                placeholder="Enter  your Email........."
                // value={Email}
                defaultValue={Email}
                // // onChange={this.onEmailChange}
                // onChange={this.onChange}
                ref={this.EmailInput}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Phone">Phone</label>
              <input
                type="phone"
                name="Phone"
                className="form-control form-control-lg"
                placeholder="Enter  your Phone........."
                // value={Phone}
                defaultValue={Phone}
                // // onChange={this.onPhoneChange}
                // onChange={this.onChange}
                ref={this.PhoneInput}
              />
            </div>

            <input
              type="submit"
              value="Add Contact"
              className="btn btn-info btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AddContact;
