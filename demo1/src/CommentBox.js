import React from 'react'

class CommentBox extends React.Component {
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={
        comments:[
          'hello','hello1','hello2'
        ],
        input:''
    }

  }
  componentDidMount(){
    this.props.fun1(this.state.comments.length)
  }
  handleSubmit(e){
    e.preventDefault()
    this.state.input?
    this.setState({comments:[...this.state.comments,this.state.input],input:''},()=>this.props.fun1(this.state.comments.length))
    :''

  }
  render() {
    return(
      <div className="comment-box">

          {
            this.state.comments.map(item=>(
              <div className="comment" key={Math.random()}>{item}</div>
            ))
          }

        <form className='comment-form' onSubmit={this.handleSubmit}>
          <input className='input' value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})} type='text'/>
          <button className='submit-btn' type='submit'>提交</button>
        </form>
      </div>
    )
  }
}

export default CommentBox
