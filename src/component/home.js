import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    console.log('home pagee', this.props)
    const { posts } = this.props
    let postList = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <img src='./pokeball.png' alt='dcsdc' />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (
        <div className="center">
          <h3>Home</h3>
          <p>No posts yet............ </p>
        </div>
      )
    return (
      <div className="container home">
        <h6>{postList}</h6>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Home)
