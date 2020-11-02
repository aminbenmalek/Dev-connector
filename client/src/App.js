import React,{Fragment,useEffect} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import Alert from './components/layout/Alert'
import setAuthToken from './utils/setAuthToken'
import Dashboard from './components/dashboard/Dashboard'
import PrivateRoute from './components/routing/PrivateRouting'
import CreateProfile from './components/profile-form/CreateProfile'
import AddExp from './components/profile-form/AddExp'
import Experience from './components/dashboard/Experience'
import Education from './components/dashboard/Education'
import AddEd from './components/profile-form/AddEd'
import Profiles from './components/profiles/Profiles'
import Profile from './components/profile/Profile'
import Posts from './components/posts/Posts'
import Post from './components/post/Post'
import NotFound from './components/layout/NotFound'


//Redux
import {Provider }from 'react-redux'
import store from './store'
import {loadUser} from './actions/auth'
import EditProfile from './components/profile-form/EditProfile';
if(localStorage.token){
  setAuthToken(localStorage.token)
}
const App=()=> {
  useEffect(()=>{
     
    store.dispatch(loadUser())
  },[])
  return(
  
    <Provider store={store}>
    <Router>
    <Fragment >
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route  exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/create-profile" component={CreateProfile} />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute exact path="/add-experience" component={AddExp} />
          <PrivateRoute exact path="/add-education" component={AddEd} />
          <PrivateRoute exact path="/experience" component={Experience} />
          <PrivateRoute exact path="/education" component={Education} />
          <PrivateRoute exact path="/posts" component={Posts} />
          <PrivateRoute exact path="/post/:id" component={Post} />

          <Route exact path='/profiles' component={Profiles} />
          <Route exact path='/profile/:id' component={Profile} />





        </Switch>


      </section>
      
    </Fragment>
    </Router>
    </Provider>
  )
}

export default App;
