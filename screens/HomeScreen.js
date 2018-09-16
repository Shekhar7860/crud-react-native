import React from 'react'
import { Text, View, Image, TouchableOpacity, Button, FlatList, StyleSheet, TouchableHighlight, ActivityIndicator } from 'react-native'
import firebase from '@firebase/app'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FloatingLabel from './FloatingLabel';
import Swipeout from 'react-native-swipeout';

// Buttons


export default class HomeScreen extends React.Component {
	constructor(props) {
    super(props);
	 
   this.state = {  users: [], animating: true };
   
  }
  insertData = (val) => {
	  this.props.navigation.navigate('Add')
  }
  
  editItem = (val) => {
	  this.props.navigation.navigate('Add', {user:val})
  }
 
  handleRemove = (val) => {
	 firebase.database().ref('users/').child(val.id).remove(); 
  }
 
   componentDidMount = () => {
	   
		   if((this.props.navigation.state.params) != undefined)
		   {
			  
			this.setState({ animating:true  })   
		   }
		   else{
			   this.setState({ animating:false  })
		   }
	  
	    setTimeout(() => { this.setState({ animating:false  })}, 3000)
	 firebase.database().ref('users/').on('value', personSnapshot => {
		 console.log('firebase res', personSnapshot.val());
		 if(personSnapshot.val())
		 {
	 this.setState({ users:  Object.values(personSnapshot.val())});
		 }
  });
      
    }
	componentWillReceiveProps(nextProps) {
         firebase.database().ref('users/').on('value', personSnapshot => {
		 console.log('firebase res', personSnapshot.val());
		 if(personSnapshot.val())
		 {
	 this.setState({ users:  Object.values(personSnapshot.val())});
		 }
		 });
 }
 
  
  
  render() {
	   var swipeoutBtns = [
  {
    text: 'Button'
  }
]
	   return (
	  
            <View style={styles.mainContainer}>
			
               <View style={styles.toolbar}>
                    <Text style={styles.toolbarButton}></Text>
                    <Text style={styles.toolbarTitle}>Employees</Text>
                    <TouchableHighlight style={styles.toolbarButton} onPress={() => this.insertData()}>
                     <Image source={require("./../images/plus1.png")} />
                    </TouchableHighlight>
                </View>
				<ActivityIndicator
               animating = {this.state.animating}
               color = '#bc2b78'
               size = "large"
			   style={{ flex: 1,
        justifyContent : 'center',
        alignItems: 'center'}}
               />
                <View style={styles.content}>
                 
                    
  
 

                    <FlatList
          data={this.state.users}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
          <View style={styles.flatview}>
		    <View style={{flex:1, flexDirection:'row', marginLeft:110 }}>
			<View style={{flex:1 }}>
			
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
			</View>
			<View style={{flex:1}}>
			<TouchableHighlight onPress={() => this.handleRemove(item)}>
                     <Image source={require("./../images/trash.png")} />
                    </TouchableHighlight>
            
			<View style={{paddingTop:10 }}>
			<TouchableHighlight  onPress={() => this.editItem(item)}>
                     <Image source={require("./../images/edit.png")} />
                    </TouchableHighlight>
			
            </View>
			</View>
			</View>
          </View>
          }
          keyExtractor={item => item.email}
        />
		

          
  
                </View>
				
            </View> 
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
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 2,
	
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 18,
	
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