import firebase from 'firebase';
import key from './config';
// var config = {
//     apiKey: "AIzaSyDNtbdbOjF0hsYD0fXlyTmkN4knAp8dGtk",
//     authDomain: "goalcoach-9c102.firebaseapp.com",
//     databaseURL: "https://goalcoach-9c102.firebaseio.com",
//     projectId: "goalcoach-9c102",
//     storageBucket: "goalcoach-9c102.appspot.com",
//     messagingSenderId: "562163210728"
//   };
var config = {
  apiKey: key.apikey,
  authDomain: key.authDomain,
  databaseURL:key.databaseURL,
  projectId: key.projectId,
  storageBucket: key.storageBucket,
  messagingSenderId: key.messagingSenderId
};
export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('/goals');
export const completeGoalRef = firebase.database().ref('/completeGoals');
  //export const firebaseApp = firebase.initializeApp(config);
  //export const goalRef = firebase.database().ref('/goals');
  