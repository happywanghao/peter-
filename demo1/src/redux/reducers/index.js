import {combineReducers} from 'redux'
  const listData=[
    {title:'redux',comments:['hello','hello2'],likes:0,id:1},
    {title:'redux2',comments:['hello','hello4','hello5'],likes:4,id:2},
    // {title:'redux3',comments:['hello'],likes:4,id:3},
    // {title:'redux4',comments:['hello','hello4','hello5'],likes:4,id:4},
    // {title:'redux5',comments:['hello'],likes:4,id:5},
  ]
  function listDataReducer(state=listData,action){
    switch(action.type){
        case 'ADD_COMMENT':
          return state.map(item=>(
            {...item,comments:item.id===action.id ? [...item.comments,action.commment]:item.comments}
          ))
        case 'INCREMENT_LIKE':
          return state.map(item=>(
            {...item,likes:item.id===action.id ? item.likes+1 : item.likes}
          ))
        default:
          return state
      }
  }
export default combineReducers({ listData:listDataReducer })
