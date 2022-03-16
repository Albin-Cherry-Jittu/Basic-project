import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    value: this.props.value,
   
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
    this.setState({ value: this.state.value + 1 });
  };

  doHandleIncrement = () => {
    this.handelIncrement({ id: 1 });
  };
  render() {
    console.log(this.props)
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
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
        <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
       
      </div>
    );
  }

  formatcount() {
    const { value} = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
