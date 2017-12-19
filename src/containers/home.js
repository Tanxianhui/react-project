import React from 'react'
import MusicList from '../components/musicList'
import { Provider,connect } from "react-redux";
import {_getMusics} from '../redux/actions/index';
import Immutable from 'immutable';

const mapStateToProps=(state)=>{
    return {
        home:state.home
    }
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

export default connect(mapStateToProps,{_getMusics})(Home)