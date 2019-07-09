import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// const Header = props => {
//   // using props Header
//   return (
//     <div>
//       <h2> {props.position}</h2>
//       <h1>The app Component</h1>
//     </div>
//   );
// };

// Applying Bootstrap
const Header = props => {
  // Applying destructuring concepts
  const { position } = props;
  // using props Header
  return (
    <nav
      className="navbar navbar-expand-sm navbar-dark 
bg-danger mb-3 py-0"
    >
      <div className="container">
        <a href="/" className="navbar-brand">
          {position}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <a href="/" className="nav-link">
                Home
              </a> */}
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// export default Header;

// const Header = props => {
//   // Applying destructuring concepts
//   const { position } = props;
//   // using props Header
//   return (
//     <div>
//       {/* First CSS Styling Methods */}
//       {/* <h1 style={{ color: "blue", fontSize: "50px" }}> {position}</h1> */}

//       {/* Second method of CSS by calling Variable */}
//       {/* <h1 style={headingStyle}> {position}</h1> */}

//       <h1> {position}</h1>
//     </div>
//   );
// };
// Setting default props 'My app'
Header.defaultProps = {
  position: "My app"
};

// Props types
Header.propTypes = {
  // String is the required header type of the position
  position: PropTypes.string.isRequired
};

// // Writing CSS
// const headingStyle = {
//   color: "blue",
//   fontSize: "50px"
// };

export default Header;
