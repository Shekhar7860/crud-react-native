import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import App from './App';
import firebase from 'firebase'

const fireBaseConfig = {
    apiKey: "AIzaSyAeGKJgA8tLGsQsnQPlsLLzMnnp037RgBw",
    authDomain: "phoneauth-b3f8c.firebaseapp.com",
    databaseURL: "https://phoneauth-b3f8c.firebaseio.com",
    projectId: "phoneauth-b3f8c",
    storageBucket: "phoneauth-b3f8c.appspot.com",
    messagingSenderId: "581818030256"
  };
        
  console.disableYellowBox = true; 
const firebaseApp = firebase.initializeApp(fireBaseConfig);  
AppRegistry.registerComponent('mytestapp', () => App);
