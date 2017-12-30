import React from 'react'
import MusicList from '../components/musicList'
import { Provider,connect } from "react-redux";
import * as homeActions  from '../redux/actions/index';
import {bindActionCreators} from 'redux'
import Immutable from 'immutable';
console.log(homeActions)
const mapStateToProps=(state)=>{
    return {
        home:state.home
    }
}
const mapDispatchToProps=(dispatch)=>{
    return  bindActionCreators(homeActions, dispatch)
  }

class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <MusicList {...this.props}/>
         </div>
        )  
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)