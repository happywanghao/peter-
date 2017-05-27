import {combineReducers} from 'redux'

const nowState={
  filter:'ALL'
}
function listReducer(state=[],action){
  switch(action.type){
    case 'ADDLIST':
      return [...state,{title:action.content,complete:false,id:Date.now()}]
    case 'TOCOMPLETE':
      let newState=state.map(
        item=>(
          {...item,complete: item.id.toString()===action.content ? !item.complete : item.complete}
        )
      )
      return newState
    default:
      return state
  }
}
function stateRerucer(state=nowState,action){
  switch(action.type){
    case 'SHOWALL':
      return {
        filter:'ALL'
      }
    case 'COMPLETE':
      return {
      filter:'COM'
    }
    case 'UNCOMPLETE':
    return {
      filter:'UNCOM'
    }
    default:
      return state
  }
}
export default combineReducers({list:listReducer,nowState:stateRerucer})
