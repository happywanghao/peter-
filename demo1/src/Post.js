import React from 'react';
import {connect} from 'react-redux'
import CommentBox from './CommentBox'
import PostBody from './PostBody'
class Post extends React.Component{

  render(){
    let str=this.props.match.params.id
    let data=this.props.listData.filter(item=>item.id.toString()===str)
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
    listData:state.listData
  }
)
export default connect(mapStateToProps)(Post)
