import React,{Fragment,useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../actions/auth'
import PropTypes from 'prop-types'


const Login = ({login,isAuthenticated}) => {
    
        const [formData,setFormData]=useState({
           
            email:'',
            password:'',
            
        })
        const {email,password}=formData
        const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
        const onSubmit=async(e)=>{
            e.preventDefault()
            login(email,password)
           
            
        }
        //Redirect if logged in
        if(isAuthenticated){
            return <Redirect to='/dashboard' />
        }
        return (
            <Fragment>
                <h1 className="large text-primary">
                Sign-in
            </h1>
            <p className="lead"><i className="fas fa-user"></i>
            Sign into your Account</p>
            <form onSubmit={e =>onSubmit(e)} className="form">
                
                <div className="form-group">
                    <input type="email" placeholder="E-mail" name='email' value={email}  onChange={e =>onChange(e)} required />
                    
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password" value={password}  onChange={e =>onChange(e)} minlength="6" required />
                </div>
                
                <input type="submit" value="Login" className="btn btn-primary" />
            </form>
            <p className="my-1">Don't have an Account?<Link to="/register">Sign-up</Link></p>
            </Fragment>
        )
    
}
Login.propTypes={
    login:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
}
const mapStateToProps=(state)=>({
    isAuthenticated:state.auth.isAuthenticated
})
export default connect(mapStateToProps,{login})(Login)
