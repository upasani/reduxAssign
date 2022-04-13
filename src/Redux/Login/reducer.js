//As we know reducer is always gone be function it take current state(initialstate) type and payload
//return the newly updated state
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS } from './action';

const initialstate = {
    isAuth: false,
    loading: false,
    token: "",
    error: false
}

const loginReducer = (store = initialstate, { type, payload }) => {
    switch (type) {
        case LOGIN_LOADING:
            return {
                ...store,
                loading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...store,
                token: payload,
                isAuth: true
            }
        case LOGIN_FAILURE:
            return {
                ...store,
                token: "",
                isAuth: false,
                error:true

            }
        default:
            return store 
    }

}
export {loginReducer};