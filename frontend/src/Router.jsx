import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import Cart from './containers/Cart';
import Checkout from './containers/Checkout';
import Home from './containers/Home';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ThankYou from './containers/ThankYou';
import { fetchUserFromLocalStorage } from './reducks/users/operations';
import { getUser } from './reducks/users/selectors';

const Router = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const user = getUser(selector);
    const token = user ? user.token : null;
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/sign-in'} component={token ? Home : SignIn} />
                <Route exact path={'/sign-up'} component={SignUp} />
                <Route exact path={'/cart'} component={Cart} />
                <Route exact path={'/checkout'} component={Checkout} />
                <Route exact path={'/thank-you'} component={ThankYou} />
            </Switch>
        </>
    );
};
export default Router;
