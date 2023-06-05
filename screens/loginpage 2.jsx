import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { auth } from '../firebase';
import firebase from '../firebase';
import { authentication } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



const Loginpage = ({ navigation }) => {
  const [Email, setEmail] = useState('jameswafula2002@gmail.com');
  const [Password, setPassword] = useState('123456');
  const [Username, setUsername] = useState('');
  

  const handleLogin = async () => {
    try {
      const response = await fetch('https://www.tangaraschools.org/api/loginauth.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Username,Email,Password }),
      });
      const data = await response.text();
      if (data === 'authenticated') {
        navigation.navigate('userpage',{Username});
        // User is authenticated, do something here (e.g. navigate to home screen)
      } else {
        // Authentication failed, show error message to user
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    }

    };
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.logo}>
        <Image source={require('../assets/mentlogo.jpeg')} style={{}}/>
        </View>
        <ActivityIndicator size='large' color='brown'/>
        <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={Email}
        onChangeText={(text) => setEmail(text)}
      />

<TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
        </View>

        <View style={styles.buttonContainer}>
            
            <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/*start the register button here */}
            <TouchableOpacity
            onPress={() => navigation.navigate('register')}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
            
        </View>
        
    </KeyboardAvoidingView>
  )
}

export default Loginpage

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        backgroundColor:'white',
    },
    logo:{
        marginTop:-40,

    },
    inputContainer:{
        width:'80%',

    },

input:{
    backgroundColor:'lightgrey',
    paddingHorizontal:15,
    paddingVertical:17,
    borderRadius:10,
    marginTop:8,

},
buttonContainer:{
    width:'60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40,

},
button:{
    backgroundColor:'#c1a64b',
    padding:15,
    width:'100%',
    borderRadius:10,
    alignItems:'center',
    marginBottom:15,

},
buttonOutline:{
    backgroundColor:'#faf8f4',
    marginTop:5,
    borderRadius:10,
    width:'100%',
    borderColor:'#c1a64b',
    borderWidth:2,
    padding:15,

},
buttonText:{
    fontWeight:700,
    color:'white',
    fontSize:17,
},
buttonOutlineText:{
    fontWeight:700,
    color:'black',
    fontSize:17,
},
})