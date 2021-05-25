import React, { Component } from "react";
import { connect } from "react-redux";

export default connect(
  //mapStateToProps把state映射到props
  (state) => ({ num: state }),

  //mapDispatchToProps把dispatch映射到props
  {
      add:()=>({type:'ADD'})
  }
)(
  class ReactReduxPage extends Component {
    render() {
      const { num,dispatch,add } = this.props;

      console.log("props", this.props);
      return (
        <div>
          <p>{num}</p>
          <button onClick={()=>dispatch({type:'ADD'})}>addlll</button>
          <button onClick={add}>addddddd</button>
        </div>
      );
    }
  }
);
