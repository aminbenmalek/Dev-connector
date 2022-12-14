import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {Route,Redirect} from 'react-router-dom'

const PrivateRouting =({component:Component,auth:{loading,isAuthenticated},...rest}) => (
    <Route {...rest} render={props => !isAuthenticated && !loading ? (<Redirect to='/login' />) : (<Component {...props} />)} />
)
PrivateRouting.propTypes = {
    auth:PropTypes.object.isRequired,
}
const mapStateToProps=state =>({
    auth:state.auth
})
export default connect(mapStateToProps)(PrivateRouting)
