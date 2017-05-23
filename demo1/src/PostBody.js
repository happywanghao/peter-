import React from 'react'

class PostBody extends React.Component {
  render() {
    return(
      <div className="post-body">
        <div className="comment-num">
          {this.props.val}
        </div>
      </div>
    )
  }
}

export default PostBody
