import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Fragment>
      <div>
        <a href="./" className="PageSwitcher-Item">Sign In</a>
        <a href="./" className="PageSwitcher-Item PageSwitcher-Item-Active">Sign Up</a>
      </div>
      <div className="FormTitle">
        <Link to="/sign-in" className="FormTitle-Link">Sign In</Link>
        <a href="./" className="FormTitle-Link FormTitle-Link-Active">Sign Up</a>
      </div>
    </Fragment>
  )
}

export default Top;