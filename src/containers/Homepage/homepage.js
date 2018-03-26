import React from 'react';
import {connect} from 'react-redux';
import './homepage.scss';

class Main extends React.Component{

  constructor(props) {
    super(props);
  }


  render () {







    return (
      <div className="container">


        <h1 className="title">Welcome to Mario game</h1>
        <h4 className="sub_title">Please enter the rows and columns </h4>

        <div className="r_c_div">
          <input type="number" placeholder="rows"/>
          <input type="number" placeholder="columns"/>
        </div>

        <button className="start">Start</button>




      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    userDetail : state.UserDetail

  };
}

export default connect(mapStateToProps)(Main);
