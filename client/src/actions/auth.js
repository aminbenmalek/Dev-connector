import {REGISTER_SUCCESS,REGISTER_FAILED,LOAD_USER,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAILED, LOGOUT,CLEAR_PROFILE} from '../actions/types'
import {setAlert} from './alert'
import Axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
//Load User
export const loadUser=()=>async dispatch=>{
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res=await Axios.get('/api/auth')
        dispatch({type:LOAD_USER,payload:res.data})
    } catch (err) {
        dispatch({type:AUTH_ERROR})
    }
}
//Register User
export const register=({name,email,password})=>async dispatch=>{
    const config={
        headers:{
            'content-type':'application/json'
        }
    }
    const body=JSON.stringify({name,email,password})
    try {
        const res=await Axios.post('/api/users',body,config)
        dispatch({type:REGISTER_SUCCESS,payload:res.data})
        dispatch(loadUser())
    } catch (err) {
        const errors =err.response.data.errors;
        if(errors){
            errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
        }
        dispatch({type:REGISTER_FAILED})
    }
    
}
//Login User
export const login=(email,password)=>async dispatch=>{
    const config={
        headers:{
            'content-type':'application/json'
        }
    }
    const body=JSON.stringify({email,password})
    try {
        const res=await Axios.post('/api/auth',body,config)
        dispatch({type:LOGIN_SUCCESS,payload:res.data})
        dispatch(loadUser())
    } catch (err) {
        const errors =err.response.data.errors;
        if(errors){
            errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
        }
        dispatch({type:LOGIN_FAILED})
    }
    
}
//Logout User/Clear Profile
export const logout=()=>dispatch=>{
    dispatch({type:CLEAR_PROFILE})
    dispatch({type:LOGOUT})}
    
