import React, { Component } from 'react';
import { Text, View, TextInput, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation'; 
import HomeScreen from './screens/HomeScreen';
import SignUp from './screens/SignUp'
import LoginScreen from './screens/LoginScreen'
import AdddataScreen  from './screens/Adddata';
import Splash  from './screens/Splash'
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Splash,
    },
	Signup: {
      screen: SignUp,
	   navigationOptions: {
      title: "Sign up"
    }
    },
	User: {
      screen: HomeScreen
	 
    },
	Add: {
      screen: AdddataScreen
	   
    }
  },
  {
    headerMode: 'none'
    
}
);

export   default class HelloWorldApp extends Component {
	
	 state = {
        username: '',
        password: ''
    };
	signup = () => {
		this.props.navigation.navigate('SignUp')
	}
	render() {
    return <RootStack />; 
  }
  /* render() {
    return (
	
	

	
      <View style={{padding: 10}}>
	  <Image source={require("./images/flower.jpg")}
       style={{marginTop: 40, marginLeft:30 }} />
	  
	  <View style={{paddingTop: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Email"
		   value={this.state.username}
		    onChangeText={(value) => this.setState({username: value})}
		  
          
        />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40}}
          placeholder="Password"
		   value={this.state.password}
		   onChangeText={(value) => this.setState({password: value})}
		  
          
        />
		</View>
		<View style={{paddingTop: 40}}>
		<Button
     onPress={() => {
		 console.log("yes")
          alert(JSON.stringify(this.state));
  }}
        title="Login "
           />
		   </View> 
		   <View style={{paddingTop: 20}}>
		   <Text style={{textAlign: 'center'}} onPress={this.signup}> New User? Signup </Text>
		   </View>
		   
      </View>
    );
  } */
}
