import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import cross from '../assets/img/cross.svg';
import { clearErrorsAction } from '../reducks/users/actions';
import { signIn } from '../reducks/users/operations';
import { getUser } from '../reducks/users/selectors';
import Home from '../containers/Home';

function Signin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { search } = useLocation();
    const selector = useSelector(state => state);
    const initialValues = {
        email: '',
        password: ''
    };

    const [values, setValues] = useState(initialValues);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmitSignIn = () => {
        setIsLoading(true);
        dispatch(
            signIn(values, () => {
                history.push({ pathname: '/', search });
                dispatch(clearErrorsAction());
            })
        );
        setIsLoading(false);
    };
    return (
        <>
            <Home />
            <section class="sign-in">
                <div class="filter"></div>
                <div class="sign-in-container">
                    <div class="sign-in-form">
                        <div class="form-text">
                            <span>Log In</span> <br></br>
                        </div>
                        <div class="form">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={values.email}
                                onChange={handleInputChange}
                                required
                            />
                            <br></br>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleInputChange}
                                required
                            />
                            <div class="check-signin">
                                <input type="checkbox" />
                                <p>Keep me signed in</p>
                                <Link to="#">Forgot Password?</Link>
                            </div>
                        </div>
                        <div class="close-btn">
                            <img src={cross} alt="cross" />
                        </div>
                        <div class="sign-in-btn">
                            <button onClick={onSubmitSignIn}>{isLoading ? 'SIGNING IN...' : 'SIGN IN'}</button>
                        </div>
                        <div class="sign-in-link">
                            New Customer ? <Link to={{ pathname: 'sign-up', search }}>Register</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Signin;
