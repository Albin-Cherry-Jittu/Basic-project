import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: 20,
    fontWeight: "bold",
  };

  // constructor(){
  //   super();
  //   this.handelIncrement = this.handelIncrement.bind(this);

  // }
  handelIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handelIncrement({ id: 1 });
  };
  render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span style={this.style} className={classes}>
          {this.formatcount()}
        </span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  formatcount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
