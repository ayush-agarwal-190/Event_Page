import React, { useState, useEffect, useRef } from "react";
import { FaSearch, FaTimes, FaBell, FaAddressBook } from "react-icons/fa";
import "./Navbar.css";
import logo from "./logo2.jpg"; // import your logo image

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const notificationRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setShowContact(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="middle">
        <img src={logo} alt="Logo" />
      </div>
      <div className="left">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Dummy1</a>
          </li>
          <li>
            <a href="#">Dummy2</a>
          </li>
        </ul>
      </div>

      <div className="right">
        <button
          className="icon-button"
          onClick={() => setSearchOpen(!searchOpen)}
        >
          {searchOpen ? <FaTimes /> : <FaSearch />}
        </button>
        {searchOpen && (
          <input type="text" className="search-input" placeholder="Search..." />
        )}
        <button
          className="icon-button"
          onClick={() => setShowNotification(!showNotification)}
        >
          <FaBell />
        </button>
        {showNotification && (
          <div ref={notificationRef} className="notification-box">
            No New Notification here
          </div>
        )}
        <button
          className="icon-button"
          onClick={() => setShowContact(!showContact)}
        >
          <FaAddressBook />
        </button>
        {showContact && (
          <div ref={contactRef} className="contact-box">
            <a className="dropDown-content" href="#">
              My profile
            </a>
            <a className="dropDown-content" href="#">
              My courses
            </a>
            <a className="dropDown-content" href="#">
              Transaction
            </a>
            <a className="dropDown-content" href="#">
              Log Out
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
