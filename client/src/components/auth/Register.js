import React,{ Fragment,useState} from 'react'
import { connect } from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {setAlert} from '../../actions/alert'
import {register} from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({setAlert,register,isAuthenticated}) => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2}=formData
    const onChange=e=>setFormData({...formData,[e.target.name]:e.target.value})
    const onSubmit=async(e)=>{
        e.preventDefault()
        if(password !==password2){
            setAlert('Passwords do not match','danger')
        }else{
            register({name,email,password})
            //setAlert('Registration Successful','success')
            
        }
    }
    if(isAuthenticated){
        return <Redirect to='/dashboard' />
    }
    return (
        <Fragment>
            <h1 className="large text-primary">
            Sign-up
        </h1>
        <p className="lead"><i className="fas fa-user"></i>
        Create your Account</p>
        <form onSubmit={e =>onSubmit(e)} className="form">
            <div className="form-group">
                <input type="text" placeholder="Name" name='name' value={name} onChange={e =>onChange(e)} />
            </div>
            <div className="form-group">
                <input type="email" placeholder="E-mail" name='email' value={email}  onChange={e =>onChange(e)}  />
                <small className="form-text">
                    This site uses gravatar ,so if you want a profile image,use a gravatar email 
                </small>
            </div>
            <div className="form-group">
                <input type="password" name="password" placeholder="Password" value={password}  onChange={e =>onChange(e)}   />
            </div>
            <div className="form-group">
                <input type="password" placeholder="Confirm password" minlength="6" name='password2' value={password2}  onChange={e =>onChange(e)} />
            </div>
            <input type="submit" value="Register" className="btn btn-primary" />
        </form>
        <p className="my-1">Already have an Account?<Link to="/login">Sign-in</Link></p>
        </Fragment>
    )
}
Register.propTypes={
    setAlert:PropTypes.func.isRequired,
    register:PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
}
const mapStateToProps=(state)=>({
    isAuthenticated:state.auth.isAuthenticated
})

export default connect(mapStateToProps,{setAlert,register})(Register)
