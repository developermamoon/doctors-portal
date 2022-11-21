import React from 'react';
import picture from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ExceptionalCard = () => {
    return (
        <div className='container mx-auto py-10'>
            <div className="card lg:card-side bg-base-100 mx-md-20">
                <figure><img className='md:w-2/3 rounded-xl' src={picture} alt="Album" /></figure>
                <div className="card-body md:w-4/5">
                    <h2 className="card-title font-bold text-4xl md:text-5xl ">Exceptional Dental Care, on Your Terms</h2>
                    <p className='text-justify'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCard;