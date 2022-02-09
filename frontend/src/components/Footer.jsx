import React from 'react';
import logo from '../assets/img/logo.svg';

function Footer() {
    return (
        <>
            <div class="refresh">
                <img src={logo} alt="logo" />
                <p>
                    Premium Quality soft drinks, hot drinks, soda & energy drinks at the best and most affordable price.
                </p>
                <p>we have a new offer every day for 365 days</p>
                <span>Contact</span>
                <p>E-maildrink@refresh.com | Hotline: +1 131 138 138</p>
            </div>
            <footer>
                <p>DESIGN BY REFRESH - © 2022. ALL RIGHTS RESERVED.</p>
            </footer>
        </>
    );
}

export default Footer;
