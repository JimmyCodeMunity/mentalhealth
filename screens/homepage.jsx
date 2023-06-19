import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
//import AnimatedLoader from 'react-native-animated-loader';
import {useState, useEffect} from 'react';
//import Loginpage from './loginpage';
//import { redirect } from 'react-router-dom';

const Homepage = () => {
    const [visible, setVisible] = useState(false);
   
  useEffect(() => {
    setInterval(() => {
      setVisible(!visible);
    }, 2000);
  }, []);
  return (
    
      <View style={styles.container}>
      <View style={styles.homepage}>
        <View style={styles.logo}>
        <Image source={require('../assets/mentlogo.png')} />
        </View>
        <AnimatedLoader style={styles.animation}
      visible={visible}
      overlayColor="rgba(250,250,250,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Welcome to Mentheal Ventures...</Text>
    </AnimatedLoader>
        
      </View>
      </View>
  
  )
}

export default Homepage

const styles = StyleSheet.create({
    container:{
      flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        backgroundColor:'white',
    },
    logo:{
        alignItems:'center',
        justifyContent:'center',
       

    },
    
    lottie: {
        width: 100,
        height: 100,
        
      },
})