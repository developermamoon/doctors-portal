import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitenning',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            image: whitening,
        },
    ]

    return (
        <div className='my-16 mx-auto'>
            
            <div className='text-center my-10'>
                <h4 className='text-primary uppercase text-xl font-bold'>Our Services</h4>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8'>
                
                {servicesData.map(service => <Service key={service.id} service={service}></Service>)}

            </div>

        </div>
    );
};

export default Services;