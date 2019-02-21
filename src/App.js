import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-Aside'>
          
        </div>
        
        <div className='App-Form'>
          <div>
            <a href='./' className='PageSwitcher-Item'>Sign In</a>
            <a href='./' className='PageSwitcher-Item PageSwitcher-Item-Active'>Sign Up</a>
          </div>
          <br/>
          <div className='FormTitle'>
            <a href='./' className='FormTitle-Link'>Sign In</a> or <a href='./' className='FormTitle-Link FormTitle-Link-Active'>Sign Up</a>
          </div>

          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='FormField'>
                <label className='FormField-Label' htmlFor='name'>FULL NAME    </label>
                <input type='text' id='name' className='FormField-Input' placeholder='Enter your full name..' name='name' />
              </div>
              
              <div className='FormField'>
                <label className='FormField-Label' htmlFor='password'>PASSWORD    </label>
                <input type='password' id='password' className='FormField-Input' placeholder='Enter your password..' name='password' />
              </div> 

              <div className='FormField'>
                <label className='FormField-Label' htmlFor='email'>Email   </label>
                <input type='email' id='email' className='FormField-Input' placeholder='Enter your Email..' name='email' />
              </div>

              <div className='FormField'>
                <label className='FormField-CheckboxLabel'>
                  <input className='FormField-Checkbox' type='checkbox' name='hasAgreed' /> I agree all statements in <a href='./' className='FormField-TermsLink'>terms of service.</a>
                </label><br/><br/>
              </div>
              <div className='FormField'>
                <button className='FormField-Button mr-20'>Sign Up</button>
                <a href='./' className='FormField-Link'>I'm already a memeber</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
