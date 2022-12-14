import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLike,removeLike,removePost} from '../../actions/post'

const PostItem = ({showActions,removePost,auth,addLike,removeLike,post:{_id,user,text,name,likes,avatar,comments,date}}) => {
    return (
        <div>
            <div class="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p class="my-1">
              {text}
            </p>
            <p className='post-date'>
           Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
           {showActions && <Fragment>
        
            <button onClick={e=>addLike(_id)} type="button" class="btn btn-light">
              <i class="fas fa-thumbs-up"></i>
              <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
            </button>
            <button onClick={e=>removeLike(_id)} type="button" class="btn btn-light">
              <i class="fas fa-thumbs-down"></i>
            </button>
            <Link to={`/post/${_id}`} class="btn btn-primary">
            Discussion{comments.length > 0 && (<span class='comment-count'>{comments.length}</span>)} 
            </Link>
            {!auth.loading && user === auth.user._id && (
            <button
            onClick={e=>removePost(_id)}
              type='button'
              className='btn btn-danger'
              
            >
              <i className='fas fa-times' />
            </button>
           )}
            </Fragment>}
            
            
          </div>
          </div>
          </div>
    )
}
PostItem.defaultProps={
  showActions:true
}
PostItem.propTypes = {
    post:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
    addLike:PropTypes.func.isRequired,
    removeLike:PropTypes.func.isRequired,
    removePost:PropTypes.func.isRequired,
}
const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,{removePost,addLike,removeLike})(PostItem)
