// Navbar.js
import React from 'react';
import './Navbar.css'; 
import logo from './logo.png'; // import your logo image
import searchIcon from './search.png'; // import your search icon
import notificationIcon from './notification.png'; // import your notification icon
import contactIcon from './contact.png'; // import your contact icon

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="left">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Dummy1</a></li>
                    <li><a href="#">Dummy2</a></li>
                </ul>
            </div>
            <div className="middle">
                <img src={logo} alt="Logo" />
            </div>
            <div className="right">
                <button><img src={searchIcon} alt="Search" /></button>
                <button><img src={notificationIcon} alt="Notifications" /></button>
                <button><img src={contactIcon} alt="Contact" /></button>
            </div>
        </nav>
    );
};

export default Navbar;
