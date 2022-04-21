import React,{Component} from "react";
import moment from "moment";

class App extends Component{
 state={
  value:1,
  lastModified:null,
 }

 handleIncr=()=>{

   if(this.state.lastModified===null || moment(this.state.lastModified).diff(moment.now(),'seconds')<=-30){

    this.setState(
      {
       value:this.state.value+1,
       lastModified : moment.now(),
    }
    );

   }
 
 }

 handleDecr=()=>{
  this.setState(
    {
     value:this.state.value-1,
  }
  );
 }
 render(){
   return(
   <>
   <button onClick={this.handleIncr}>+1</button>  
   <span>{this.state.value}</span>
   <button onClick={this.handleDecr}>-1</button>
   </>)
 }
}

export default App;
