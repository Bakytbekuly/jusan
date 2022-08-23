import React from 'react';
import './Sidebar.css';
import { SideMenu } from './SideMenu/SideMenu';
import { UserProfile } from './UserProfile/UserProfile';

export const Sidebar = () => {
    return (
        <aside>
            <UserProfile
                image="https://media.2x2tv.ru/content/images/2022/05/ssssss.jpg"
                name={'Olzhas'}
                email={'olzhas@jysan.kz'}
            />
            <SideMenu />
        </aside>
    );
};
