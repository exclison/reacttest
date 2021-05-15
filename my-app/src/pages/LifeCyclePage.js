import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LifeCyclePage extends Component {
  static defaultProps = {
    msg: "mnnn",
  };

  static propTypes = {
    msg: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { count } = nextState;
    console.log("shouldComponentUpdate", nextProps, nextState, this.state);
    return count !== 3;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.setCount}>改变count</button>
        {/* {count % 2 && <Child count={count} />} */}
        <Child count={count} />
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
  //初次渲染的时候不会执行,只有在已挂载的组件接收新的props的时候,才会执行
  componentWillReceiveProps(nextProps){
      console.log('child componentWillReceiveProps',nextProps)
  }
  render() {
    console.log("Child render");
    const { count } = this.props;
    return (
      <div>
        <p>child</p>
        <p>{count}</p>
      </div>
    );
  }
}
