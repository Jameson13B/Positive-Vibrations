import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink>
            <NavLink activeClassName='active-nav' to='/about'>About</NavLink>
            <div>
                <h2>&#9774; Elvis & Laura's Positive Vibrations &#9969;</h2>
                <h5>Negril, Jamaica</h5>
            </div>
            <NavLink activeClassName='active-nav' to='/rooms'>Rooms</NavLink>
            <NavLink activeClassName='active-nav' to='/contact'>Contact Us</NavLink>
        </div>
    )
};
 
export default Navigation;