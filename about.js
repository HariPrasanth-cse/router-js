// import React, {Component} from "react";
// class Fruit extends Component{
//   constructor(){
//     super();
//     this.state={fruit:"apple"};
//     }
//     render(){
//       return(
//         <div>
//           <h1>I am {this.state.fruit} </h1>
//         </div>
//       );
//     }
//   }
//   export default Fruit;

import React from 'react';
import ReactDOM from 'react-dom';
class About extends React.Component{
    render(){

        return(
          <div style={{ color:"yellow",backgroundColor:"black", height:800 ,textAlign:'center'}}>
            <h1 >Thanks For Shopping😉</h1>
            <h2 >Make More Shopping</h2>
            <h3 >Connect With US</h3>
            </div>
        )
    }
}
export default About;