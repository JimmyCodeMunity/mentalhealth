import React, { Component ,useState} from 'react'
import { Text, View ,TextInput,Button,StyleSheet,Image,ActivityIndicator,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {Username:'',Email:'',Phone:'',Password:''};
    }

    InsertRecord = () =>{
        var Username = this.state.Username;
        var Email = this.state.Email;
        var Phone = this.state.Phone;
        var Password = this.state.Password;

        if(Username.length==0 || Email.length==0|| Phone.length==0|| Password.length==0){
            alert("Required Field is missing");
        }
        else{
            var InsertAPIURL="https://www.tangaraschools.org/api/menthealreg.php";

            var headers = {
                'Accept':'application/json',
                'Content-Type':'application/json'
            };
            var Data = {
                Username:Username,
                Email:Email,
                Phone:Phone,
                Password:Password,
            };

            fetch(InsertAPIURL,
                {
                    method:'POST',
                    headers:headers,
                    body:JSON.stringify(Data),
                })
                .then((response)=>response.json())
                .then((response)=>
                {
                    alert(response[0].Message);
                    
                })
                .catch((error)=>{
                    alert("Error"+error);
                })
        }
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.logo}>
        <Image source={require('../assets/mentlogo.jpeg')} style={{}}/>
        </View>
        <ActivityIndicator size='large' color='brown'/>
      <View style={styles.inputContainer}>
        <TextInput
            placeholder={"username"}
            
            style={styles.input}
            onChangeText={Username=>this.setState({Username})}
        />

        <TextInput
            placeholder={"email"}
            style={styles.input}
            onChangeText={Email=>this.setState({Email})}
            
        />
        <TextInput
            placeholder={"phone"}
            keyboardType='numeric'
            style={styles.input}
            onChangeText={Phone=>this.setState({Phone})}
            
        />

        <TextInput
            placeholder={"password"}
            style={styles.input}
            onChangeText={Password=>this.setState({Password})}
            secureTextEntry
            
        />
        </View>
        
        <TouchableOpacity
            onPress={this.InsertRecord}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('login')}
            style={[styles.redirect]}>
                <Text style={styles.buttonOutlineText}>Back to login</Text>
            </TouchableOpacity>


      </KeyboardAvoidingView>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'white',
    },
    txtStyle:{
        borderWidth:1,
        borderBottomColor:'red',
        marginBottom:20,
        width:'100%',
        padding:12,
    },
    btn:{
        backgroundColor:'lightblue',
        width:'70%',
    },
    input:{
        backgroundColor:'lightgrey',
        paddingHorizontal:15,
        paddingVertical:17,
        borderRadius:10,
        marginTop:8,
    
    },
    button:{
        backgroundColor:'#c1a64b',
        padding:15,
        width:'60%',
        borderRadius:10,
        alignItems:'center',
        marginTop:15,
    
    },
    inputContainer:{
        width:'80%',

    },
    logo:{
        marginTop:-60,
    },
    redirect:{
        color:'blue',
        marginTop:20,
    }
})