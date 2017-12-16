
import React from 'react';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import _ from 'lodash'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

const Hello= class extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>Hello World</h1>
        )
    }
}

const List=class extends React.Component{
    constructor(props){
        super(props)
    }

    hanldeClick(item,e){
        console.log(item)
        console.log(arguments)
    }

    render(){
        const getrenders=(items)=>{
            return _.map(items,(item)=>{
                return <li onClick={(e)=>{this.hanldeClick(item,e)}}>{item}</li>
            })
        };
        return (
            <ul>
            {getrenders(this.props.items)}
            </ul>
        )
        
    }
}

const ImmutableCom=class extends React.Component{
    constructor(props){
        super(props);
        let immutable_data=Immutable.fromJS({"name":"tanxianhui1"});
        this.state={
            data:immutable_data
        };
    }
    
    render(){
        return(
            <div>
                <h2>{this.props.data.get(0)}</h2>
                <h3>{this.state.data.get("name")}</h3>
            </div>
        )
    }

}

const App=class extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        let props_immutable={data:Immutable.List(["University"])}
        console.log(props_immutable)
        return(
            <div>
                <Hello/>
                <ImmutableCom {...props_immutable} />
                <Canvas/>
                <List items={[1,2,3]}/>
            </div>
        )
    }
}

const Canvas=class extends React.Component{
    constructor(props){
        super(props)
    }

    change(){
        let self=this;
        var ctx=self.pic.getContext('2d');
        ctx.translate(100,100)
        ctx.arc(0,0,50,0,Math.PI*2,true);
        ctx.stroke();
        //ctx.save();
        ctx.moveTo(0,0)
        ctx.lineTo(0,50);
        ctx.stroke()
        //ctx.restore();
        ctx.rotate(Math.PI/16);
        //ctx.restore();
        ctx.moveTo(0,0)
        ctx.lineTo(0,50);
        ctx.stroke()

        //window.requestAnimationFrame(self.change.bind(self));
    }

    componentDidMount(){
        let self=this;
        self.change();
        //window.requestAnimationFrame(self.change.bind(self));
    }

    render(){
        return (
            <canvas id='canvas' width="600px" height='400px' ref={(can)=>{this.pic=can}}></canvas>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById("root")
)