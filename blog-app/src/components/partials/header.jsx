import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>

      <p id='title'>Into the Sweat</p>
        <nav>


       <div class="dropdown">
  <span id="menu"><img class="menu" src="https://i.imgur.com/6jggiCc.png"/></span>
  <div class="dropdown-content">
    <ul>
         <li><Link to="/beauty">Beauty</Link></li>
         <li><Link to="/sweat">Sweat</Link></li>
         <li><Link to="/nutrition">Health</Link></li>
          <li><Link to="/about">About</Link></li>

       </ul>
  </div>
</div>
 </nav>
      </header>
    );
  };
}

export default Header;