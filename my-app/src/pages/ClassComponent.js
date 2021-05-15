import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    //存储状态
    this.state = {
      datetime: new Date(),
    };
  }

  //组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      //更新state,不能用this.state赋值更新
      this.setState({
        datetime: new Date(),
      });
    }, 1000);
  }

  //组件卸载之前执行
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { datetime } = this.state;
    return (
      <div>
        <p>{datetime.toLocaleTimeString()}</p>
      </div>
    );
  }
}
