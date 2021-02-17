import React from "react";
import logo from '../../assets/cutnedge.jpg';

function Banner() {
  return (
    <div className="logo">
      {/* <div className="logo-body">
  <h1 className="title">Cut N Edge</h1> 
  </div> */}
      <img src={logo} className="ml-3" alt="logo" />
    </div>
  );
}
// style={{paddingTop: 15, marginBottom: 30, paddingLeft: 15, paddingRight: 15}}

export default Banner;