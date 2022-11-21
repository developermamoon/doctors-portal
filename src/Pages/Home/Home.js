import React from 'react';
import Banner from './Banner/Banner';
import ExceptionalCard from './ExceptionalCard/ExceptionalCard';
import InfoCards from './InfoCards/InfoCards';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCard></ExceptionalCard>
        </div>
    );
};

export default Home;