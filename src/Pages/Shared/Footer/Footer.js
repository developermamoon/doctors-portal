import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <div className='' style={{
            background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'
        }}>
            <footer className="footer pb-24 px-20 justify-between">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Oral Health</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>

            <p className='text-center text-lg pb-6'>Copyright 2022 All Rights Reserved</p>
        </div>
    );
};

export default Footer;