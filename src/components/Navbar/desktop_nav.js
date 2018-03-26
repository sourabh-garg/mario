import React from 'react';
import './navbar.scss';
import Email from '../../containers/Icons/email';


import {Link} from 'react-router';

class Navbar extends React.Component{

  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render () {

    return (
      <div className="container nav_abs">
        <div className="container navbar ">

          <div className="flex flex_center max-1200">

            <div className="left_links">
              <Link  to="/" className="logo_width">
                <img src="https://vignette.wikia.nocookie.net/my-pokemon-fanfic-adventures/images/e/e6/Pokemon_Logo.png/revision/latest?cb=20130512120546" alt=""/>
              </Link>

              <div>
                <Link className="navLinks_active" to="/" >Schedule</Link>
                <Link to="account" >Overview</Link>
                <Link to="track_order" >Articles</Link>
              </div>


            </div>



            <div className="navLinks right_links">
              <Link className="email_ic"> <Email />
              <span /></Link>
              <Link to="about_us" className="account" >
                <div>
                  <img src="https://metrouk2.files.wordpress.com/2017/08/pri_48957260.jpg" alt=""/>
                </div>
                About us</Link>
            </div>

          </div>


        </div>

      </div>


    );
  }

}



export default Navbar;


