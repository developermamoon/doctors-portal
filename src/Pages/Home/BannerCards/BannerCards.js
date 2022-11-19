import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import location from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const BannerCards = () => {
    return (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3">

                <div className='col'>
                    <div className='bg-primary text-white p-10 rounded-xl flex items-center'>

                        <div className="left-side">
                            <img src={clock} alt="" />
                        </div>

                        <div className="right-side ml-3">
                            <h1 className='font-semibold text-lg'>Opening Hours</h1>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>

                
                <div className='col'>
                    <div className='bg-neutral text-white p-10 rounded-xl flex items-center'>

                        <div className="left-side">
                            <img src={location} alt="" />
                        </div>

                        <div className="right-side ml-3">
                            <h1 className='font-semibold text-lg'>Visit our location</h1>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                </div>

                
                <div className='col'>
                    <div className='bg-primary text-white p-10 rounded-xl flex items-center'>

                        <div className="left-side">
                            <img src={phone} alt="" />
                        </div>

                        <div className="right-side ml-3">
                            <h1 className='font-semibold text-lg'>Contact us now</h1>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>

                


            </div>
        </div>
    );
};

export default BannerCards;