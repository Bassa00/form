import React, { Fragment } from 'react'
import {Route} from 'react-router-dom'

const Form = () => {
  return (
    <Fragment>
      <Route exact path="./">
        <div className="FormCenter">
          <form className="FormField" >
            
            <div className="FormField">
              <label className="FormField-Label" htmlFor="name">FULL NAME</label>
              <input type="text" id="name" className="FormField-Input" placeholder="Enter your full name.." name="name"/>
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="password">PASSWORD</label>
              <input type="password" id="password" className="FormField-Input" placeholder="Enter your password.." name="password" />
            </div>

            <div className="FormField">
              <label className="FormField-Label" htmlFor="email">Email</label>
              <input type="email" id="email" className="FormField-Input" placeholder="Enter your Email.." name="email" />
            </div>

            <div className="FormField">
              <label className="FormField-CheckboxLabel">
                <input className="FormField-Checkbox" type="checkbox" name="hasAgreed" />
                I agree all statements in{" "} <a href="./" className="FormField-TermsLink">terms of service.</a>
              </label>
            </div>

            <div className="FormField">
              <button className="FormField-Button mr-20">Sign Up</button>
                <a href="./" className="FormField-Link">I am already a memeber</a>
              </div>
              
          </form>
        </div>
      </Route> 
      <Route exact path="/sign-in"><h1>Sign In</h1></Route>
    </Fragment>
        
  )
}

export default Form; 

