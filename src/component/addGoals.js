import React,{Component} from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../firebase';

class AddGoal extends Component{
    state = {
        title:''
    }
    addGoal(){
        const {title} = this.state;
        const {email} = this.props.user;
        goalRef.push({email,title});
    }
    render(){
        return(
            <div className="form-inline">
                <div className="form-group">
                <input 
                type="text" placeholder="add ur goals"
                className="form-control"
                onChange = {event => this.setState({title:event.target.value})}
                />
                <button className="btn btn-primary"
                onClick={()=> this.addGoal()}
                >Submit</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {user} = state ;
    
    return{
        user
    }
}

export default connect(mapStateToProps,null)(AddGoal);