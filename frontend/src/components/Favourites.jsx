import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorites, fetchFavorites } from '../reducks/favourite/operations';
import { getFavorites } from '../reducks/favourite/selectors';
import left_arrow from '../assets/img/left-arrow.svg';
import arrow_right from '../assets/img/arrow-right.svg';

function Favourites() {
    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const favourites = getFavorites(selector);
    useEffect(() => {
        dispatch(fetchFavorites());
    }, []);
    return (
        <div>
            <section className="item-container">
                <section className="just-for-you">
                    <div className="heading">
                        <p>Fav's</p>
                    </div>
                    <div className="item-container">
                        <img src={left_arrow} alt="left-arrow" />
                        <ul className="item-flex">
                            {favourites &&
                                favourites.map(favourite => {
                                    return (
                                        <li className="item" key={favourite.id}>
                                            <img
                                                src={'https://res.cloudinary.com/techis/' + favourites.product.image}
                                                alt=""
                                            />
                                        </li>
                                    );
                                })}
                            <img src={arrow_right} alt="arrow-right" />
                        </ul>
                    </div>
                </section>
            </section>
        </div>
    );
}

export default Favourites;
