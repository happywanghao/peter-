import React from 'react';
import {connect} from 'react-redux'
import store from './redux/store.js'
import Icon from 'antd/lib/icon'
class Main extends React.Component{
  constructor(){
    super()
    this.handleClick1=this.handleClick1.bind(this)
    this.handleClick2=this.handleClick2.bind(this)
    this.handleClick5=this.handleClick5.bind(this)
  }
  handleClick1(e){
    e.preventDefault()
    store.dispatch({type:'ADDLIST',content:this.input.value})
    this.input.value=''
  }
  handleClick2(e){
    store.dispatch({type:'SHOWSTATE',content:e.target.id})
  }
  handleClick5(e){
    store.dispatch({type:'TOCOMPLETE',content:e.target.id})
  }
  render(){
    let showList=
    this.props.nowState.filter==='COM'?
    this.props.list.filter(item=>item.complete):
    this.props.nowState.filter==='UNCOM'?
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
              <form onSubmit={this.handleClick1}>
                <input className='input1' type='text' ref={item=>this.input=item} placeholder='请输入..' />
                <button type='submit' className='span2'><Icon type="plus-circle" /></button>
              </form>
            </div>
            <div>
              <button id="ALL" onClick={this.handleClick2}>ALL</button>
              <button id="UNCOM" onClick={this.handleClick2}>未完成</button>
              <button id="COM" onClick={this.handleClick2}>已完成</button>
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
