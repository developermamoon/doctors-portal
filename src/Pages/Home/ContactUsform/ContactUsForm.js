import React from 'react';  
import pic from '../../../assets/images/appointment.png'

const ContactUsForm = () => {
    return (
        <div className='mb-10' style={{
            background: `url(${pic})`
        }}>

            <div className='text-center pt-10'>
                <p className='text-lg font-bold text-primary'>Contact Us</p>
                <p className='text-3xl text-white'>Stay connected with us</p>
            </div>
            
            <div className="hero">
                <div className="">
                    <div className="card flex-shrink-0  shadow-2xl">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control">
                                <textarea name="" id="" cols="50" rows="4" style={{resize : 'none'}} placeholder='Your message' className="p-3 border border-3 rounded-xl"></textarea>
                            </div>

                            <div className="form-control mt-6 mx-auto">
                                <button className="btn btn-primary ">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;