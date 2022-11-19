import React from 'react';
import bannerImg from '../../../assets/images/chair.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className="hero  banner-bg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="rounded-lg shadow-2xl w-1/2" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;