import React from 'react'
import store from './redux/store.js'
class CommentBox extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={
      input:''
    }
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.input){
    let content = this.state.input
    store.dispatch({type:'ADD_COMMENT',commment:content,id:this.props.id})}
    this.setState({input:''})
  }
  render() {
    return(
      <div className="comment-box">
          {
            this.props.comments.map(item=>(
              <div className="comment" key={Math.random()}>{item}</div>
            ))
          }
        <form className='comment-form' onSubmit={this.handleSubmit}>
          <input className='input' value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} type='text'/>
          <button className='submit-btn' type='submit'>提交</button>
        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox
