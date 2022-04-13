import { GET_PRODUCT_ERROR,GET_PRODUCT_LOADING,GET_PRODUCT  } from "./action";

const initialstate={
    getproduct:[],
    error:false,
    loading:false
}
//as we know this is initial state;
//lets go into the reduce
const productReducer=(store=initialstate,{type,payload})=>{
    switch(type){
        case GET_PRODUCT_LOADING:
            return{
                ...store,
                loading:true
            }
        case GET_PRODUCT_ERROR:
            return{
                ...store,
                error:true
            }
        case GET_PRODUCT:
            return{
                ...store,
                getproduct:[...payload]
            }
        default:
            return store
    }

}
export {productReducer};