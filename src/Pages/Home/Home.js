import React from 'react';
import Banner from './Banner/Banner';
import BannerCards from './BannerCards/BannerCards';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <BannerCards></BannerCards>
        </div>
    );
};

export default Home;