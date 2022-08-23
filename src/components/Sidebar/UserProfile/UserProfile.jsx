import React from 'react';
import './UserProfile.css';
export const UserProfile = ({ name, image, email }) => {
    return (
        <div className="side-profile">
            <img className="profile-img" src={image} alt="" />
            <div>
                <h3>{name}</h3>
                <span>{email}</span>
            </div>
        </div>
    );
};
