import React from 'react';
import logo from '../../assets/jysan.png';
import './Header.css';
export const Header = () => {
    return (
        <header>
            <div className="wrapper">
                <img src={logo} alt="" />
            </div>
        </header>
    );
};
