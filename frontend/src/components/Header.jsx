import React, { useState, useEffect } from 'react';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import cart from '../assets/img/cart.svg';
import user from '../assets/img/user.svg';
// import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../reducks/users/operations';
import { push } from 'connected-react-router';
import { useHistory } from 'react-router';

function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);
    const history = useHistory();

    const signOutButton = () => {
        dispatch(signOut());
        setCheckUser(false);
        dispatch(push('/sign-in'));
    };

    useEffect(() => {
        if (key != null) {
            setCheckUser(true);
        }
    }, [key]);
    return (
        <div>
            <header>
                <div class="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div class="right-nav">
                    <img src={search} alt="search" />
                    <button onClick={() => history.push('/cart/')}>
                        <img src={cart} alt="cart" />
                    </button>
                    {checkUser ? (
                        <span class="logout" onClick={signOutButton}>
                            Logout
                        </span>
                    ) : (
                        <a href="/sign-in" class="sign-in">
                            <img src={user} alt="user" />
                        </a>
                    )}
                </div>
            </header>
        </div>
    );
}

export default Header;
