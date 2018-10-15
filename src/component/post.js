import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAction'

class Post extends Component {
  handle = () => {
    this.props.deletePost(this.props.post.id)
    this.props.history.push('/')

  }
  render() {
    console.log('postpostpost', this.props)
    const post = this.props.post ? (
      <div className='post'>
        <h4 class='center'>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className='center'>
          <button className="btn grey" onClick={this.handle}>Delete</button>
        </div>
      </div>
    ) : (
        <div className='center'>The post is loading.............</div>
      )
    return (
      <div>
        <h4 className="container">{post}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id
  console.log('newwwwwwwwwwwwww', state)
  return {
    post: state.posts.find(post => post.id === id)
  }


}

const mapPropsToDispatch = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id)) }
  }
}

export default connect(mapStateToProps, mapPropsToDispatch)(Post)