import axios from 'axios';
// const LOGIN_USER_KEY = "LOGIN_USER_KEY";
export const LOGIN_USER_KEY = 'LOGIN_USER_KEY';

var baseURL;
baseURL = 'http://127.0.0.1:8000/';
// require('dotenv').config()

// export const LOGIN_USER_KEY = "HIVE_TECHWEAR_LOGIN_USER_KEY";
// const { REACT_APP_ENVIRONMENT, REACT_APP_API_BASE_URL_PROD, REACT_APP_API_BASE_URL_DEV } = process.env;
// let baseURL;

// if (REACT_APP_ENVIRONMENT === "PRODUCTION") {
// 	baseURL = REACT_APP_API_BASE_URL_PROD;
// } else {
// 	baseURL = REACT_APP_API_BASE_URL_DEV;
// }

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(
    config => {
        if (config.requireToken) {
            const user = localStorage.getItem(LOGIN_USER_KEY) ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY)) : null;
            config.headers.common['Authorization'] = user.token;
        }

        return config;
    },
    err => console.error(err)
);

api.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.log('error.response', error);
        if (error.response.status === 401) {
            localStorage.removeItem(LOGIN_USER_KEY);
        }

        return Promise.reject(error);
    }
);

export default class API {
    signUp = async signUpBody => {
        const formData = new FormData();

        for (const key in signUpBody) {
            formData.append(key, signUpBody[key]);
        }

        return api.post('/users/signup/', formData);
    };

    signIn = async signInBody => {
        const formData = new FormData();
        for (const key in signInBody) {
            formData.append(key, signInBody[key]);
        }
        return api.post('/users/signin/', formData);
    };

    //Products
    getProducts = (query = {}) => {
        return api.get('/products/', { params: query, requireToken: true });
    };

    // Cart
    getCarts = (query = {}) => {
        return api.get('/carts/', { params: query, requireToken: true });
    };

    addCart = addCartBody => {
        const formData = new FormData();
        for (const key in addCartBody) {
            formData.append(key, addCartBody[key]);
        }
        return api.post('/carts/add/', formData, { requireToken: true });
    };

    updateCart = (updateCartBody, cartId) => {
        const formData = new FormData();
        for (const key in updateCartBody) {
            formData.append(key, updateCartBody[key]);
        }
        return api.put(`/carts/update/${cartId}/`, formData, {
            requireToken: true
        });
    };

    // Checkout
    checkoutOrder = checkoutOrderBody => {
        return api.post('/orders/add/', checkoutOrderBody, { requireToken: true });
    };

    //Favourite

    getFavorites = async () => {
        const favorites = await api
            .get('/favorites/', { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return favorites;
    };

    addFavorites = async addFavoriteBody => {
        //{homeId: homeId} = {homeId}
        const savedPost = await api
            .post('/favorites/add/', addFavoriteBody, { requireToken: true })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                throw new Error(error);
            });
        return savedPost;
    };

    deleteFavorites = id => {
        return api.delete(`favorites/delete/${id}`, { requireToken: true });
    };
}
