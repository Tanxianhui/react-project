import React from 'react'
import _ from 'lodash'
import axios from 'axios'
import jsonp from 'jsonp'
import Help from '../utils/help'

const MusicItem=class extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <li>{this.props.songName}</li>
    }
}

const MusicList=class extends React.Component{
    constructor(props){
        super(props)
    }
    renderMusicList(items){
        return _.map(items,(item,i)=>{
            return <MusicItem {...item} key={i}/>
        })
    }
    
    componentDidMount(){
        this.props._getMusics();
    }
    render(){
        console.log(this.props)
        return (
            <ul>
                {this.renderMusicList(this.props.home.songlist)}
            </ul>
        )
    }
}

export default MusicList