import React, { Component } from 'react';
import {firebaseApp} from '../firebase';

class SignIn extends Component {
  state={
    email:'',
    password:'',
    error:{
      message:''
    }
  }
  signIn(){
    console.log("this.state",this.state);
    const {email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password )
      .catch(error =>{
        console.log('error',error);
        this.setState({error});
      })
  }
  render() {
    return (
      <div className="form-inline">
        <h4>SignIn</h4>
        <div className="form-group">
          <input className="form-control"
          type="text"
          placeholder="email"
          onChange={event => this.setState({email:event.target.value})}
          />
           <input className="form-control"
          type="password"
          placeholder="password"
          onChange={event => this.setState({password:event.target.value})}
          />
          <button className="btn btn-primary" type="button" 
          onClick={() => this.signIn()}
          >SignIn</button>
        </div>
        <div>{this.state.error.message}</div>
        
       
      </div>
    );
  }
}

export default SignIn;
