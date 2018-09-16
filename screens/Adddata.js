import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import firebase from '@firebase/app';




export default class AdddataScreen extends React.Component {
	
	state = {
        name: '',
        email: '',
		user: '',
		profile:'',
		age:'',
		date:''
    };
	 componentDidMount = () => {
		 if(this.props.navigation.state.params != null)
		 {
			// alert(this.props.navigation.state.params.user.name);
	      this.setState({name: this.props.navigation.state.params.user.name})
		  this.setState({user: this.props.navigation.state.params.user.name})
		  this.setState({email: this.props.navigation.state.params.user.email})
		  this.setState({date: this.props.navigation.state.params.user.date})
		  this.setState({profile: this.props.navigation.state.params.user.profile})
		   this.setState({age: this.props.navigation.state.params.user.age})
		 }
    }
	goBack = () =>{
		this.props.navigation.navigate('User')
	}
 
	submit = () => {
		if(this.props.navigation.state.params != null)
		{
	firebase.database().ref('users/').child(this.props.navigation.state.params.user.id).set({
    id:this.props.navigation.state.params.user.id,
    name: this.state.name,
    email: this.state.email,
	profile: this.state.profile,
	age: this.state.age,
	 date: this.state.date
    
  }); 	
		}
		else{
	
		let uid = Math.floor(Math.random()*100) + 1;
	  firebase.database().ref('users/').child(uid).set({
    id:uid,
    name: this.state.name,
    email: this.state.email,
	profile: this.state.profile,
	age: this.state.age,
	 date: this.state.date
    
  }); 
		}
  this.props.navigation.navigate('User')
	}
  render() {
    return (
	<View style={styles.mainContainer}>
               <View style={styles.toolbar}>
                    <TouchableHighlight style={styles.toolbarButton} onPress={() => this.goBack()}>
                     <Image source={require("./../images/back.png")} />
                    </TouchableHighlight>
                    <Text style={styles.toolbarTitle}>{this.state.user? this.state.user:'Employee'}</Text>
                    <TouchableHighlight style={styles.toolbarButton}>
                    <View></View>
                    </TouchableHighlight>
                </View>
                <View style={styles.content}>
 
                   <View style={{paddingTop: 20}}>
        <TextInput
          style={{height: 40, textAlign: 'center', width: '80%', marginLeft:30}}
          placeholder="Name"
		   value={this.state.name}
		    onChangeText={(value) => this.setState({name: value})}
		   />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40, textAlign: 'center', width: '80%', marginLeft:30}}
          placeholder="Email"
		   value={this.state.email}
		   onChangeText={(value) => this.setState({email: value})}
		  
          
        />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40, textAlign: 'center', width: '80%', marginLeft:30}}
          placeholder="Date of Joining"
		   value={this.state.date}
		   onChangeText={(value) => this.setState({date: value})}
		  
          
        />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40, textAlign: 'center', width: '80%', marginLeft:30}}
          placeholder="Profile"
		   value={this.state.profile}
		   onChangeText={(value) => this.setState({profile: value})}
		  
          
        />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40, textAlign: 'center', width: '80%', marginLeft:30}}
          placeholder="Age"
		   value={this.state.age}
		   onChangeText={(value) => this.setState({age: value})}
		  
          
        />
		</View>
		<TouchableOpacity  style={{paddingTop: 20,  width: '80%', marginLeft:30}}>
            <Button title="Submit" onPress = {this.submit}>
               
            </Button>
         </TouchableOpacity>
      </View>

          
  
                </View>
           
      
	  
      /*   <Text>Add data</Text>
		 <View style={{paddingTop: 20}}>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
		   value={this.state.name}
		    onChangeText={(value) => this.setState({name: value})}
		   />
		</View>
		<View style={{paddingTop: 20}}>
		<TextInput
          style={{height: 40}}
          placeholder="Email"
		   value={this.state.email}
		   onChangeText={(value) => this.setState({email: value})}
		  
          
        />
		</View>
		<TouchableOpacity  style={{paddingTop: 20}}>
            <Button title="Submit " onPress = {this.submit}>
               
            </Button>
         </TouchableOpacity>
      </View> */
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  h2text: {
    marginTop: 10,
    fontFamily: 'Helvetica',
    fontSize: 36,
    fontWeight: 'bold',
  },
  flatview: {
    justifyContent: 'center',
    paddingTop: 30,
    borderRadius: 2,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18
  },
  email: {
    color: 'red'
  },
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50          //Step 2
       
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    },
  
   messageBox:{
        backgroundColor:'#ef553a',
        width:300,
        paddingTop:10,
        paddingBottom:20,
        paddingLeft:20,
        paddingRight:20, 
        borderRadius:10
    },
    messageBoxTitleText:{
        fontWeight:'bold',
        color:'#fff',
        textAlign:'center',
        fontSize:20,
        marginBottom:10
    },
    messageBoxBodyText:{
        color:'#fff',
        fontSize:16
    }
  
});