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
    case 'SHOWSTATE':
      return {
        filter:action.content
      }
    default:
      return state
  }
}
export default combineReducers({list:listReducer,nowState:stateRerucer})
