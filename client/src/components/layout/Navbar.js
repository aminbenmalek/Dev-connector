import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions/auth'


import PropTypes from 'prop-types'

const Navbar = ({auth: { loading, isAuthenticated },logout}) => {
    const loggedout=(
        <ul>
                
                <li><Link to="/profiles">Developers</Link></li>

        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>


    </ul>
        
    )
    const loggedin =(
       
    <ul>
        
        <li><Link to="/profiles">Developers</Link></li>
            <li><Link to='/dashboard'><i className="fas fa-user"></i>{''}<span className="hide-sm">Dashboard</span></Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><a  href="login" onClick={logout} ><i className="fas fa-sign-out-alt"></i>{''}
            <span className="hide-sm">Logout</span></a></li>
            

    </ul>

   
    )
    return (
        <div>
        <nav className="navbar bg-dark">
    <h1><Link to="/">
        <i className="fas fa-code"></i>DevConnector
    </Link></h1>
    {!loading && (<Fragment>
        { isAuthenticated ? loggedin : loggedout}
        </Fragment>)}
    
</nav>
    </div>
    )
}
Navbar.propTypes={
    logout:PropTypes.func.isRequired,
    auth:PropTypes.object.isRequired,
}
const mapStateToProps=(state)=>({
    auth:state.auth
})
export default connect(mapStateToProps,{logout})(Navbar)
