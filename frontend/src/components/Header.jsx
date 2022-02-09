import React, {useState,useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import search from '../assets/img/search.svg';
import cart from '../assets/img/cart.svg';
import user from '../assets/img/user.svg';
// import { signOut } from '../../reducks/users/operations';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const key = localStorage.getItem('LOGIN_USER_KEY');
    const [checkUser, setCheckUser] = useState(false);

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
                    <img src={cart} alt="cart" />
                    <img src={user} alt="user" />
                </div>
            </header>
        </div>
    );
}

export default Header;
