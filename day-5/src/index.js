import React, { Component} from 'react';
import ReactDOM from 'react-dom';
  
class ChildApp extends Component{
    state={
        num : 0
    }
    render(){
        return <div>
           <h1>Get Counter</h1>
           <h1> { this.state.num } </h1>
           <button onClick={ ()=> 
                {this.setState({ num: this.state.num +1 }) }} >Click</button>
        </div>;
    }
}

class MainApp extends Component{
     
    render(){
        return <div>
                <h1>Welcome to My Life</h1>
                {/* <ChildApp num = {10} /> */}
                <ChildApp/>
             </div>
    }
} 
ReactDOM.render( <MainApp/> , document.getElementById("root") );
 

