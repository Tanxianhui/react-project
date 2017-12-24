import React from 'react'
import _ from 'lodash'
import axios from 'axios'
import jsonp from 'jsonp'
import Help from '../utils/help'
import style from './musicList.scss'

const MusicItem=class extends React.Component{
    constructor(props){
        super(props);
        this.formatProps();
    }

    formatProps(){
        if(Object.keys(this.props).length==0){
            return
        }
        const obj=Object.assign({},this.props);
        const sec=parseInt(obj.playtime/60);
        const sec_str=sec<10?'0'+sec:sec;
        obj.timeSpan=sec_str +':'+obj.playtime%60;
        obj.url='http://dl.stream.qqmusic.qq.com/C400003a0mEj1ljBv5.m4a?vkey=1265ADEBCDF6DC134E053D88CCE86E3B1E86E30CC885D1E4BEE8E05A0D1BD9D63A568D736537B706E749D0F956DB375EDF46BAA34ED2E941&guid=6765947072&uin=0&fromtag=66'
        this.formatProps=obj;
    }

    playMusic(event){
        const musicDom=event.target.nextSibling;
        musicDom.play();
    }

    render(){
        return <li>
                    <div className='musicName'>
                        {this.formatProps.songName}
                        <i className='musicOpreateIcons' onClick={this.playMusic.bind(this)}></i>
                        <audio src={this.formatProps.url}/>
                    </div>
                    <div className='musicAuthor'>{this.formatProps.singerName}</div>
                    <div className='musicTimeSpan'>{this.formatProps.timeSpan}</div>
               </li>
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
        return (
            <ul>
                {this.renderMusicList(this.props.home.songlist)}
            </ul>
        )
    }
}

export default MusicList