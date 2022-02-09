import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { clearErrorsAction } from '../reducks/users/actions';
import { signUp } from '../reducks/users/operations';
import cross from '../assets/img/cross.svg';
import Home from '../containers/Home';

function SignUp() {
    const history = useHistory();
    const { search } = useLocation();
    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const initialValues = {
        name: '',
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

    const onSubmitSignUp = () => {
        setIsLoading(true);
        dispatch(
            signUp(values, () => {
                history.push({ pathname: '/', search });
                dispatch(clearErrorsAction());
            })
        );
        setIsLoading(false);
    };
    return (
        <>
            <Home />
            <section class="sign-up">
                <div class="filter"></div>
                <div class="sign-up-container">
                    <div class="sign-up-form">
                        <div class="form-text">
                            <span>
                                Create an account and <br />
                                discover the benefits
                            </span>{' '}
                            <br />
                        </div>
                        <div class="form">
                            <input
                                type="text"
                                name="name"
                                placeholder="User Name"
                                value={values.name}
                                onChange={handleInputChange}
                                required
                            />{' '}
                            <br />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleInputChange}
                                required
                            />{' '}
                            <br />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleInputChange}
                                required
                            />
                            <div class="check">
                                <input type="checkbox" />
                                <p>
                                    I agree to the Google Terms of Service and <br />
                                    <span> Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                        <div class="close-btn">
                            <img src={cross} alt="cross" />
                        </div>
                        <div class="sign-up-btn">
                            <button onClick={onSubmitSignUp}>{isLoading ? 'SIGNING UP...' : 'SIGN UP'}</button>
                        </div>
                        Have an account ? <Link to={{ pathname: '/sign-in', search }}>Sign In</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
