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

          <div className='FormTitle'>
            <a href='./' className='FormTitle-Link'>Sign In</a> or <a href='./' className='FormTitle-Link FormTitle-Link-Active'>Sign Up</a>
          </div>

          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.handleSubmit}>
              <div className='FormField'>
                <label className='FormFiels-Label' htmlFor='name'>FULL NAME </label>
                <input type='text' id='name' className='FormField-Input' placeholder='Enter your full name..' name='name' />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
