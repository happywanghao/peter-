import React from 'react';
import {connect} from 'react-redux'
import PostBody from './PostBody.js'
import {Link} from 'react-router-dom'
class Home extends React.Component{
  render(){
    return (
      <div className='clearfix' style={{background:'rgb(0, 188, 212)',width:'100%',height:'95vh',overflow:'auto'}}>
        {this.props.listData.map(item=>
          <div key={item.id}>
            <Link to={`/post/${item.id}`}>
              <PostBody {...item}/>
            </Link>
          </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps=(state)=>(
  {
    listData:state.listData
  }
)
export default connect(mapStateToProps)(Home)
