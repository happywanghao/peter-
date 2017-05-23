import React, { Component } from 'react';
import './App.css';
import CommentBox from './CommentBox'
import PostBody from './PostBody'

class App extends Component {
  constructor(){
    super()
    this.state={
      value:''
    }
  }
  addValue(a){
    this.setState({value:a})
  }
  render() {
    return (
      <div>
        <div className="top  clearfix">
          <PostBody val={this.state.value} />
        </div>
        <div className="bottom clearfix">
          <CommentBox fun1={this.addValue.bind(this)} />
          {/* {this.state.value===this.value?'':this.setState({value:this.value})} */}
        </div>
      </div>
    );
  }
}

export default App;
