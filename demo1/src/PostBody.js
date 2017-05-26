import React from 'react'
import store from './redux/store.js'
class PostBody extends React.Component {
  render() {
    return(
        <div key={this.props.id} className="post-body">
          <h1>{this.props.title}</h1>
          <div onClick={
            (e)=>{
                  store.dispatch({type:'INCREMENT_LIKE',id:this.props.id})
                  e.preventDefault()
                  e.stopPropagation();
                }
          } className="likes-num num">
            {this.props.likes}赞
          </div>
          <div className="comment-num num">
            {this.props.comments.length}
          </div>
        </div>
    )
  }
}

export default PostBody
