import React from 'react';
import mainbackground from '../assets/img/main-background.png';

function MainBackground() {
    return (
        <div>
            <div class="main-img">
                <img src={mainbackground} alt="main-background" />
            </div>
        </div>
    );
}

export default MainBackground;
