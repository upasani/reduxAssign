//this all are the action type
export const GET_PRODUCT='GET_PRODUCT';
export const GET_PRODUCT_LOADING='GET_PRODUCT_LOADING';
export const GET_PRODUCT_ERROR='GET_PRODUCT_ERROR';

export const getProduct=(payload)=>({
    type:GET_PRODUCT,
    payload
})
export const getProductLoading=()=>({
    type:GET_PRODUCT_LOADING
})
export const getProductError=()=>({
    type:GET_PRODUCT_ERROR
})

//or we can do something like this as well
//export const getproduct=()=>{
//     return {type:something,payload}
//     like this as well
// }