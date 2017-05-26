import React from 'react';
import {connect} from 'react-redux'
import store from './redux/store.js'
import Icon from 'antd/lib/icon'
class Main extends React.Component{
  constructor(){
    super()
    this.handleClick1=this.handleClick1.bind(this)
    this.handleClick2=this.handleClick2.bind(this)
    this.handleClick3=this.handleClick3.bind(this)
    this.handleClick4=this.handleClick4.bind(this)
    this.handleClick5=this.handleClick5.bind(this)
    this.state={
      input:''
    }
  }
  hhh(s){
    let arr=s.split('-')
    let newArr=arr.map(item=>item.charAt(0).toUpperCase()+item.slice(1,item.length))
    return newArr.join('')
  }
  handleClick1(){
    store.dispatch({type:'ADDLIST',content:this.state.input})
    this.setState({input:''})

  }
  handleClick2(){
    store.dispatch({type:'SHOWALL'})
  }
  handleClick4(){
    store.dispatch({type:'COMPLETE'})
  }
  handleClick3(){
    store.dispatch({type:'UNCOMPLETE'})
  }
  handleClick5(e){
    store.dispatch({type:'TOCOMPLETE',content:e.target.id})
  }
  render(){
    let showList=this.props.nowState.showComplete?
    this.props.list.filter(item=>item.complete):
    this.props.nowState.showUnComplete?
    this.props.list.filter(item=>!item.complete):
    this.props.list
    return (
        <div className="box clearfix">
          <div className='content'>
            <h1>TODO</h1>
            <ul className='ul1'>
              {showList.map(item=>(
                <li
                  id={item.id}
                  key={item.id}
                  onClick={(e)=>this.handleClick5(e)}
                  style={item.complete?{textDecoration:'line-through'}:{}}
                  >{item.title}
                  {item.complete?<span className='span1'><Icon type="check" /></span>:''}
                </li>
              ))}
            </ul>
            <div>
              <input className='input1' type='text' value={this.state.input} onChange={(e)=>this.setState({input:e.target.value})}/>
              <span className='span2' onClick={this.handleClick1}><Icon type="plus-circle" /></span>
            </div>
            <div>
              <button onClick={this.handleClick2}>ALL</button>
              <button onClick={this.handleClick3}>未完成</button>
              <button onClick={this.handleClick4}>已完成</button>
            </div>
          </div>
        </div>
    )
  }
}
const mapStateToProps=(state)=>(
  {
    list:state.list,
    nowState:state.nowState
  }
)
export default connect(mapStateToProps)(Main)
