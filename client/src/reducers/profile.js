import { CLEAR_PROFILE, GET_PROFILE, PROFILE_ERROR,UPDATE_PROFILE,GET_ALL_PROFILES, GET_REPOS } from "../actions/types";

const initialState={
    profile:null,
    profiles:[],
    repos:[],
    loading:true,
    error:{}
}
export default function(state=initialState,action){
    const {type,payload}=action
    switch(type){
        case GET_ALL_PROFILES:
            return{
                ...state,
                profiles:payload,
                loading:false
            }
        case UPDATE_PROFILE:
        case GET_PROFILE:
            return{
                ...state,
                profile:payload,
                loading:false
            };
        case PROFILE_ERROR:
            return{
                ...state,
                
                loading:false,
                error:payload
            };
        case CLEAR_PROFILE:
            return{
                ...state,
                profile:null,
                profiles:[],
                repos:[],
                loading:false
            } 
        case GET_REPOS:
            return{
                ...state,
                repos:payload,
                loading:false
            }
       
        
        default:
            return state;

    }
}