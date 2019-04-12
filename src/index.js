import React from 'react';
import ReactDOM from 'react-dom';
import {Router ,Route,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import {firebaseApp} from './firebase';
import App from './component/App';
import SignIn from './component/SingIn';
import SignUp from './component/SignUp';
import reducers from './reducers';
import {logUser} from './actions';

const store = createStore(reducers);

firebaseApp.auth().onAuthStateChanged(user =>{
    if(user){
        ;
        const {email} = user;
        store.dispatch(logUser(email));
        browserHistory.push("/app");
    }else{
        console.log("logout the account");
       
    }
})

ReactDOM.render(
    <Provider store={store}>
    <Router path="/" history={browserHistory}>
        <Route path="/app" component={App}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signup" component={SignUp}/>
    </Router>
    </Provider>
    , document.getElementById('root'));


