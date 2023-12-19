import React from 'react';
import './Footer.css'; // Create a corresponding CSS file for styling
import logo from "./assets/logo192.png";

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
                        <h3>About C2D</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
                            <strong>Email:</strong> info@c2dexample.com
                        </p>
                        <p>
                            <strong>Address:</strong> Example Address
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&#169; {new Date().getFullYear} C2D. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;