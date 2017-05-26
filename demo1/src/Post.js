import React from 'react';
import {connect} from 'react-redux'
import CommentBox from './CommentBox'
import PostBody from './PostBody'
class Post extends React.Component{

  render(){
    let str=this.props.match.params.aa
    let data=this.props.rootData.filter(item=>item.id.toString()===str)
    return (
      <div style={{height:'95vh',overflow:'auto'}}>
        <div className="top  clearfix">
          <PostBody {...data[0]}/>
        </div>
        <div className="bottom clearfix">
          <CommentBox {...data[0]}/>
        </div>
      </div>
    )
  }
}
const mapStateToProps=(state)=>(
  {
    rootData:state.rootData
  }
)
export default connect(mapStateToProps)(Post)
