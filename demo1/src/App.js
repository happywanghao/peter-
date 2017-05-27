import React, { Component } from 'react';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store.js'
import Post from './Post.js'
import Home from './Home.js'
import Notefinde from './Notefinde.js'
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={
      value:''
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
            <div>
              <Link to='/'><h3 style={{background:'yellow',height:'5vh',margin:'0'}}>HOME</h3></Link>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/post/:id' component={Post}/>
                <Route component={Notefinde}/>
              </Switch>
            </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
