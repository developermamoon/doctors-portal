import React from 'react';

const Review = ({ review }) => {
    const {_id, name, review: userReview, image, location} = review;
    return (
        <div>
            <div className="card  shadow-xl">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="flex items-center mt-6">
                        <div className="avatar">
                            <div className="w-16 mr-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={image} alt='' />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-xl font-bold">{name}</h5>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;