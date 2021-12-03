
import React, { Component} from 'react';
import ReactDOM from 'react-dom';
  
class Countries extends Component{
    render(){
        return <div>
            <ul>
                { <h2> {this.props.title} </h2> }
             { 
             this.props.c_list.map((val)=>
             
                 <li>{val}</li>
             )
             }
            </ul>
        </div>;
    }
}

class MainApp extends Component{
    asia=["india",'pak','China']
    europe=['UK','Swiss','FinnLand']
    render(){
        return <div>
                <h1>See All Countries in the World</h1>
                <Countries title="Asia" c_list={this.asia}/>
                <Countries title="Europe" c_list={this.europe}/>
             </div>
    }
} 
ReactDOM.render( <MainApp/> , document.getElementById("root") );
 