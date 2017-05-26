import React from 'react';
import {Provider} from 'react-redux'
import store from './redux/store.js'
import Main from './Main.js'
import 'antd/dist/antd.min.css'
import './main.css'
class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
      <Main/>
      </Provider>
    )
  }
}
export default App
