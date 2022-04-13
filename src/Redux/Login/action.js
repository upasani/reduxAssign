//This all are actions types
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_FAILURE="LOGIN_FAILURE";
export const LOGIN_LOADING="LOGIN_LOADING";

//Action creator that return type and payload
export const loginLoading=()=>({
    type:LOGIN_LOADING
})
export const loginSuccess=(payload)=>({
    type:LOGIN_SUCCESS,
    payload
})
export const loginFailure=()=>({
    type:LOGIN_FAILURE
})
