import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>

      <p id='title'>The Good Sweat</p>
        <nav>


       <div className="dropdown">
  <span id="menu"><img className="menublock" alt="menu" src="https://i.imgur.com/6jggiCc.png"/></span>
  <div className="dropdown-content">
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
