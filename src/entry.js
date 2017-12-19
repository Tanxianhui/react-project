
import React from 'react';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import _ from 'lodash'
// import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import MusicList from './components/musicList'
import { HashRouter as Router, Route } from "react-router-dom";
import { Provider,connect } from "react-redux";
import reducers from './redux/reducers/index'
import { createStore, applyMiddleware } from "redux";
import Home from './containers/home';
import thunk from 'redux-thunk';

const store=createStore(reducers,applyMiddleware(thunk));
window.store=store;
const App=class extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Route component={Home}></Route>
                </Router>
            </Provider>
        )
    }
}


ReactDom.render(
    <App/>,
    document.getElementById("root")
)