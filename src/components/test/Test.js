// Lifecycle methods are only available on class bashed components
import React, { Component } from "react";
class Test extends Component {
  state = {
    title: "",
    body: ""
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => this.setState({ title: data.title, body: data.body }));
    console.log("componentDidMount.....");
  }
  componentWillMount() {
    console.log("componentWillMount.....");
  }
  componentWillReceiveProps(nextProps, nextState) {
    console.log("componentWillReceiveProps...");
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>
          <span className="text-danger">Test Component </span>Lifecycle Method{" "}
        </h1>
        <br />
        <h3 className="lead">{title}</h3>
        <p className="text-tertiorary">{body}</p>
      </div>
    );
  }
}

export default Test;
