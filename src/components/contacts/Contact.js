import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import axios from "axios";
import { Link } from "react-router-dom";
// import "./Contact.css";
// My first Components
// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h4>Netra Neupane</h4>
//         <ul>
//           <li>email : nimesh.neupane43@gmail.com</li>
//           <li> phone : 9878397897</li>
//         </ul>
//       </div>
//     );
//   }
// }

// // Applying the concepts of props
// class Contact extends Component {
//   render() {
//     return (
//       <div>
//         <h4>{this.props.name}</h4>
//         <ul>
//           <li>email :{this.props.Email}</li>
//           <li> phone : {this.props.Contanct}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Applying the concepts of props along with DESTRUCTURING
// class Contact extends Component {
//   render() {
//     const { name, email, phone } = this.props;
//     return (
//       <div>
//         <h4>{name}</h4>
//         <ul>
//           <li>email :{Email}</li>
//           <li> phone : {Phone}</li>
//         </ul>
//       </div>
//     );
//   }
// }

// Applying BOOTSTRAP
class Contact extends Component {
  //   // Binding outside the icon tag
  //   constructor() {
  //     super();
  //     this.state = {};
  //     this.onShowClick = this.onShowClick.bind(this);
  //   }
  //  onShowClick() {
  //     //console.log("Hellow World");
  //     // If binding from the icon
  //     console.log(this.state);
  //   }

  state = {
    showContactInfo: false
  };

  // Deleted while using the JSON placeholder
  // onDeleteClick = (id, dispatch) => {
  //   // // console.log("Clicked");
  //   //  this.props.deleteClickHandler();
  //   dispatch({ type: "DELETE_CONTACT", payload: id });
  // };

  // onDeleteClick = (id, dispatch) => {
  //   axios
  //     .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => dispatch({ type: "DELETE_CONTACT", payload: id }));
  // };

  // // Using async and await
  // onDeleteClick = async (id, dispatch) => {
  //   await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  //   dispatch({ type: "DELETE_CONTACT", payload: id });
  // };
  // Using async and await for
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: "DELETE_CONTACT", payload: id });
    } catch (e) {
      dispatch({ type: "DELETE_CONTACT", payload: id });
    }
  };

  onShowClick = e => {
    // console.log(this.state);
    // console.log(Name);

    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  render() {
    // const { contact } = this.props;
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              {/* Binding for the state inside the icon tag */}
              {/* <h4>
          {Name}
          <i
            onClick={this.onShowClick.bind(this)}
            className=" fas fa-sort-down"
          />
        </h4> */}

              <h4>
                {name}
                <i
                  onClick={this.onShowClick.bind(this, name)}
                  className=" fas fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-user-times"
                  style={{ cursor: "pointer", float: "right", color: "blue" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />

                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      color: "red",
                      float: "right",
                      marginRight: "2rem"
                    }}
                  />
                </Link>
              </h4>
              {/* Tooggling the info */}
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">email :{email}</li>
                  <li className="list-group-item"> phone : {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
      // <div className="card card-body mb-3">
      //   {/* Binding for the state inside the icon tag */}
      //   {/* <h4>
      //     {Name}
      //     <i
      //       onClick={this.onShowClick.bind(this)}
      //       className=" fas fa-sort-down"
      //     />
      //   </h4> */}

      //   <h4>
      //     {contact.Name}
      //     <i
      //       onClick={this.onShowClick.bind(this, contact.Name)}
      //       className=" fas fa-sort-down"
      //       style={{ cursor: "pointer" }}
      //     />
      //     <i
      //       className="fas fa-user-times"
      //       style={{ cursor: "pointer", float: "right", color: "blue" }}
      //       onClick={this.onDeleteClick}
      //     />
      //   </h4>
      //   {/* Tooggling the info */}
      //   {showContactInfo ? (
      //     <ul className="list-group">
      //       <li className="list-group-item">Email :{contact.Email}</li>
      //       <li className="list-group-item"> Phone : {contact.Phone}</li>
      //     </ul>
      //   ) : null}
      // </div>
    );
  }
}

// Adding propTypes
Contact.propTypes = {
  contact: PropTypes.object.isRequired
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
