import {REGISTER_SUCCESS,REGISTER_FAILED,LOAD_USER,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAILED, LOGOUT,CLEAR_PROFILE, ACCOUNT_DELETED} from '../actions/types'
const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    loading:true,
    user:null,
}
export default function(state=initialState,action){
    const {type,payload}=action
    switch(type){
        case REGISTER_SUCCESS:
            localStorage.setItem('token',payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false
            };
        case REGISTER_FAILED:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:null,
                loading:false 
            };
        case LOAD_USER:
            return{
                ...state,
                user:payload,
                isAuthenticated:true,
                loading:false
            }
        case LOGIN_FAILED:
        case ACCOUNT_DELETED:
        case LOGOUT:    
        case AUTH_ERROR:
            localStorage.removeItem('token')
            return{
                ...state,
                token:null,
                isAuthenticated:null,
                loading:false 
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token',payload.token)
            return{
                ...state,
                token:payload.token,
                isAuthenticated:true,
                loading:false
            }
        

        default:
            return state;
    }
}
