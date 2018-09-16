import React from 'react'
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, Image, ActivityIndicator } from 'react-native'




export default class Splash extends React.Component {

componentDidMount = () => {
	 setTimeout(() => {this.props.navigation.navigate('User', {animating:'data'})}, 3000)
   
      
    }
 

  render() {
    return (
	<ImageBackground source={require("./../images/applogo.png")} style={styles.backgroundImage} >
	<ActivityIndicator
               animating = {true}
               color = '#bc2b78'
               size = "large"
			   style={{ flex: 1,
        justifyContent : 'center',
        alignItems: 'center'}}
               />
	</ImageBackground>
   
    )
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  }
});

