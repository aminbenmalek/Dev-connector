import {ADD_POST, DELETE_POST, GET_POSTS,POST_ERROR,UPADATE_LIKES,GET_POST,ADD_COMMENT,REMOVE_COMMENT} from './types'
import Axios from 'axios'
import {setAlert} from './alert'

//Get Posts
export const getPosts=()=>async dispatch=>{
    try {
        const res=await Axios.get('/api/posts')
        dispatch({type:GET_POSTS,payload:res.data})
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Add a Like 
export const addLike=(postId)=>async dispatch=>{
    try {
        const res=await Axios.put(`/api/posts/likes/${postId}`)
        dispatch({type:UPADATE_LIKES,payload:{postId,likes:res.data}})
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Remove a Like 
export const removeLike=(postId)=>async dispatch=>{
    try {
        const res=await Axios.put(`/api/posts/unlike/${postId}`)
        dispatch({type:UPADATE_LIKES,payload:{postId,likes:res.data}})
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Remove a Post 
export const removePost=(postId)=>async dispatch=>{
    try {
        const res=await Axios.delete(`/api/posts/${postId}`)
        dispatch({type:DELETE_POST,payload:postId})
        dispatch(setAlert('Post Removed','success'))
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Add Post
export const addPost=(formData)=>async dispatch=>{
    try {
        const config={
            headers:{
                'content-type':'application/json'
            }       
        }
        const res=await Axios.post('/api/posts',formData,config)
        dispatch({type:ADD_POST,payload:res.data})
        dispatch(setAlert('Post Created','success'))
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Get Post
export const getPost=(postId)=>async dispatch=>{
    try {
        const res=await Axios.get(`/api/posts/${postId}`)
        dispatch({type:GET_POST,payload:res.data})
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Add Comment
export const addComment=(formData,postId)=>async dispatch=>{
    try {
        const config={
            headers:{
                'content-type':'application/json'
            }       
        }
        const res=await Axios.post(`/api/posts/comment/${postId}`,formData,config)
        dispatch({type:ADD_COMMENT,payload:res.data})
        dispatch(setAlert('Comment Added','success'))
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}
//Delete Comment 
export const removeComment=(postId,commentId)=>async dispatch=>{
    try {
        const res=await Axios.delete(`/api/posts/comment/${postId}/${commentId}`)
        dispatch({type:REMOVE_COMMENT,payload:commentId})
        dispatch(setAlert('Comment Removed','success'))
    } catch (err) {
        dispatch({type:POST_ERROR,payload:{msg:err.response.statusText,status:err.response.status}})

    }
}