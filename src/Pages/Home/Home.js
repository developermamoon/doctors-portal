import React from 'react';
import Banner from './Banner/Banner';
import ExceptionalCard from './ExceptionalCard/ExceptionalCard';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCard></ExceptionalCard>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;