import React from 'react';
import picture from '../../../assets/images/treatment.png'

const ExceptionalCard = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="card lg:card-side bg-base-100 mx-20">
                <figure><img className='w-2/3 rounded-xl' src={picture} alt="Album" /></figure>
                <div className="card-body w-4/5">
                    <h2 className="card-title text-5xl">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCard;