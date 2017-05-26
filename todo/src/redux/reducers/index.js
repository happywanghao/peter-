import {combineReducers} from 'redux'
const list = [
]
const nowState={
  showComplete:false,
  showUnComplete:false,
}
function listReducer(state=list,action){
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
        showComplete:false,
        showUnComplete:false,
      }
    case 'COMPLETE':
      return {
      showComplete:true,
      showUnComplete:false,
    }
    case 'UNCOMPLETE':
    return {
      showComplete:false,
      showUnComplete:true,
    }
    default:
      return state
  }
}
export default combineReducers({list:listReducer,nowState:stateRerucer})
