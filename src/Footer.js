import React from 'react';
import './Footer.css'; // Create a corresponding CSS file for styling
import logo from "./logo192.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo-container">
                            <img
                                src={logo}
                                alt="Logo"
                                className="gdsc-logo"
                            />
                        </div>
                        <h3>About CDC</h3>
                        <p>
                            CDC is a community for
                            developers to learn, share, and grow together.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>
                            <strong>Email:</strong> info@cdcexample.com
                        </p>
                        <p>
                            <strong>Address:</strong> Example address
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&#169; {new Date().getFullYear} CDC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
