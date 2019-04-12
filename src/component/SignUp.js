import React, { Component } from 'react';
import {firebaseApp} from '../firebase';

class Signup extends Component {
  state={
    email:'',
    password:'',
    error:{
      message:''
    }
  }
  signup(){
    console.log("this.state",this.state);
    const {email,password} = this.state;
    firebaseApp.auth().createUserWithEmailAndPassword(email,password )
      .catch(error =>{
        console.log('error',error);
        this.setState({error});
      })
  }
  render() {
    return (
      <div className="form-inline">
        <h4>SignUp</h4>
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
          onClick={() => this.signup()}
          >SignUp</button>
        </div>
        <div>{this.state.error.message}</div>
      </div>
    );
  }
}

export default Signup;
