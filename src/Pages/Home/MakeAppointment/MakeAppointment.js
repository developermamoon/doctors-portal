import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-32' style={{
            background: `url(${appointment})`
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-36 hidden md:block lg:w-1/2 rounded-lg " />
                    <div>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl text-white font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;