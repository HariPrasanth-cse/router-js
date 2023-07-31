import React from 'react';
import ReactDOM from 'react-dom';
class Shop extends React.Component{
    constructor(){
        super();
        this.state={username:"", age:null,errmsg:"",erms:""};
        
    }
    uservalue=(event)=>
    {
        let n=event.target.name;
        let v=event.target.value;
        let err="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                err=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({errmsg:err});
        this.setState({[n]:v});
    }
    usererrm=(event)=>
    {
            let n=event.target.name;
            let v=event.target.value;
        let erm="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                erm=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({ermsg:erm});
        this.setState({[n]:v});
    }
    useremsg=(event)=>
    {
            let n=event.target.name;
            let v=event.target.value;
        let ems="";
        if(n==="age"){
            if(v!=""&&!Number(v))
            {
                ems=<strong style={{color:'red'}}>invalid,enter number</strong>
            }
        }
        this.setState({ermg:ems});
        this.setState({[n]:v});
    }
    render(){
        return(
            
            <form onSubmit={this.useralert} >
                <div style={{color:"white",backgroundColor:"black", textAlign:"center" ,height:700}}>
                <h1> BEEP KART</h1>
                <div>
                Enter Your Name:<input type='text' name='username' onChange={this.uservalue}/> 
                </div> <br/>
                <div>
                Mobile Number:<input type='text' name='age'onChange={this.uservalue}/><br/>{this.state.errmsg}<br/>
                </div>
                <div>
                Address:<input type='text' name='username'/>
                </div><br/>
                <div>
                No.of Products:<input type='text' name='age'onChange={this.usererrm}/><br/>{this.state.ermsg}<br/>
                </div>
                <div>
                Total Amount:<input type='text' name='age'onChange={this.useremsg}/><br/>{this.state.ermg}<br/>
                </div>
                <div>
                <input type='submit' name='submit'/>
                </div>
                </div>
            </form>
        )
    }
}export default Shop;
