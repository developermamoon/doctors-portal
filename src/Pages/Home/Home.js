import React from 'react';
import Banner from './Banner/Banner';
import ContactUsForm from './ContactUsform/ContactUsForm';
import ExceptionalCard from './ExceptionalCard/ExceptionalCard';
import InfoCards from './InfoCards/InfoCards';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <ExceptionalCard></ExceptionalCard>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUsForm></ContactUsForm>
        </div>
    );
};

export default Home;