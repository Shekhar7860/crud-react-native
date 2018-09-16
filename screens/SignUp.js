import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from '@firebase/app'



export default class SignUp extends React.Component {
  state = { email: '', password: '', errorMessage: null }

 
   handleSignUp = () =>
	{
		
		firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user) => {
		alert(JSON.stringify(user))
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
    return (
      <View style={styles.container}>
       
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          placeholder="Email"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
          style={styles.textInput}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
		<View style={{paddingTop: 20}}>
        <Button title="Sign Up" onPress={this.handleSignUp} style={{width: 250}}/>
		</View>
		<View style={{paddingTop: 20}}>
        <Button style={styles.buttonmargin} 
          title="Already have an account? Login"
          onPress={() => this.props.navigation.navigate('Home')}
        />
		</View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    
    marginTop: 8
  },
  buttonmargin: {
    
    
    marginTop: 15
  }
})
