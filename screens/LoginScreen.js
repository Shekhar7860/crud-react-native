
import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image, ActivityIndicator, ScrollView, StatusBar } from 'react-native'
import styles from '../styles/styles.js'
import firebase from '@firebase/app';
import FloatingLabelInput from './FloatingLabel';


export default class LoginScreen extends React.Component {
	state = {
    isFocused: false,
  };

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });
  
  signup = () =>{
		this.props.navigation.navigate('Signup')
	}
	state = {
		animating: false,
        username: '',
        password: ''
    };
	facebooklogin = () =>
	{
		console.log("a");
		alert("Logging with facebook")
	}
	createuser = () =>
	{
		
		firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
    .then((user) => {
		alert(JSON.stringify(user))
		this.props.navigation.navigate('User')
      // If you need to do anything with the user, do it here
      // The user will be logged in automatically by the
      // `onAuthStateChanged` listener we set up in App.js earlier
    })
    .catch((error) => {
      alert(JSON.stringify(error))
      // For details of error codes, see the docs
      // The message contains the default Firebase string
      // representation of the error
    });
	}
	
  render() {
	  
	    const animating = this.state.animating
    return (
	
	

	
       <View style={{ flex: 1, padding: 10, backgroundColor: '#f5fcff' }}>
        
	  <Image source={require("./../images/flower.jpg")}
       style={{marginTop: 40, marginLeft:30 }} />
	  
	  
        <TextInput
          
           placeholder="Email"
		   value={this.state.username}
		    onChangeText={(value) => this.setState({username: value})}
		  
          
        />
		
		<TextInput
          
           placeholder="Password"
		   value={this.state.password}
		   onChangeText={(value) => this.setState({password: value})}
		  
          
        />
		
		
		<View style={{paddingTop: 40}}>
		<Button
      onPress = {this.createuser}
        title="Login "
           />
		   </View> 
		   <View style={{paddingTop: 40}}>
		<Button style={{backgroundColor:'#1E6738'}}
     onPress = {this.facebooklogin}
        title="Login with facebook "
           />
		   </View>
		   <View style={{paddingTop: 20}}>
		   <Text style={{textAlign: 'center'}} > New User? <Text onPress={this.signup}>Signup </Text></Text>
		   </View>
		 
      </View>
    );
  } 
static navigationOptions = {
    title: 'Login',
	
	justifyContent: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
	  textAlign: 'center',
    },
  };
}