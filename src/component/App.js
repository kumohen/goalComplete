import React, { Component } from 'react';
import {firebaseApp} from '../firebase';
import {connect} from 'react-redux';
import AddGoal from './addGoals';
import GoalList from './goalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  signOut(){
    firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div style={{margin:'5px'}}>
       <h2> Goal Coach</h2>
       <AddGoal />
       <hr/>
       <h4>Goals</h4>
       <GoalList />
       <hr/>
       <h3>Complete Goals</h3>
        <CompleteGoalList />
        <hr/>
        <button className="btn btn-danger" 
        onClick={()=> this.signOut()}
        >signOut</button>
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    user:state.user
  }
}

export default connect(mapStateToProps,null)(App);
