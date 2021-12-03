import React, { Component} from 'react';

class ChildComp extends Component{
    static defaultProps = {
        power : 10,
        version : 5,
        title : "Place holder Text for"        
     }

    render(){
        return <div>
            <h2>I'm Child</h2>
            <h2>Version {this.props.version}</h2>
            <h2>Power {this.props.power}</h2>
            <h2>Title {this.props.title}</h2>
        </div>
    }
} 
export default ChildComp