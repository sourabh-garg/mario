import React from 'react';
import {connect} from 'react-redux';



class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {


    return (
      <div className="container">

        <div className="min_height">
          {this.props.children}

        </div>


      </div>
    );
  }

}


function mapStateToProps(state) {

  return {};


}

export default connect(mapStateToProps)(Main);
