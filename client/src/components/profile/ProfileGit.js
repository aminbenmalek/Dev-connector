import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {getRepos} from '../../actions/profile'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
const ProfileGit =({username,getRepos,repos}) => {
    useEffect(()=>{
        getRepos(username)
    },[getRepos])
    return (
        <div className="profile-github">
            <h2 className="text-primary my-1">Github Repos</h2>
            {repos === null ? <Spinner /> : (
                repos.map(repo=>(<div key={repo._id} className='repo bg-white p-1 my-1'>
                    <h4>
                        <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                            {repo.name}:
                        </a>
                    </h4>
            <p>{repo.description}</p>
                </div>))
            )}
        </div>
    )
}

ProfileGit.propTypes = {
    username:PropTypes.string.isRequired,
    getRepos:PropTypes.func.isRequired,
    repos:PropTypes.array.isRequired,
}
const mapStateToProps=state=>({
    repos:state.profile.repos
})
export default connect(mapStateToProps,{getRepos})(ProfileGit)
