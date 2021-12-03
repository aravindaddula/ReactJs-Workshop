import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import ChildComp from './components/child.components';


class MainApp extends Component{
   
    increasePower = ()=>{
        this.setState({
            power : this.state.power +1 ,
            version :this.state.version+1
        })
    }
    decreasePower = ()=>{
        this.setState({
            power : this.state.power - 1 ,
            version :this.state.version -1

        })
    }
   render(){
  return <div>
      <h1>who is the hero</h1>
      {/* <h2>{ this.state.power } </h2>
      <h2>{ this.state.version } </h2> */}
      {/* <h2>{ (this.state.power < 10) ? "Hero is Weak" : "Hero is Strong" } </h2>
      <button onClick={this.increasePower}>Increase Power </button>
      <button onClick={this.decreasePower}>decrease Power </button> */}
      
      
      <hr/>

      {/* <ChildComp getVersion={this.state.version} getPower={this.state.power} getTitle={this.state.title} /> */}
  </div> 

}  
} 
ReactDOM.render( <MainApp/> , document.getElementById("root") );