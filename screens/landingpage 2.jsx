
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React,{useState}from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Settings from './settings';
import { Row, Col } from 'react-native-responsive-grid-system';
import Books from './books'
import Music from './music';
import Loginpage from './loginpage';



const Stack = createNativeStackNavigator();

function Landing({navigation}){
    const Tab = createBottomTabNavigator();
    
    
  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.top}>
        <View style={styles.header}>
            <View style={styles.logo}>
                <Text style={styles.logotext}>Mentheal Ventures</Text>
            </View>
            <View style={styles.menu}>
                <TouchableOpacity style={styles.touch}
                onPress={() => navigation.navigate('Profile')}
                >
                <Icon style = {styles.icon} name="user"></Icon>
                </TouchableOpacity>

                <TouchableOpacity style={styles.touch}
                onPress={() => navigation.navigate('Settings')}
                >
                <Icon style = {styles.icon} name="cog"></Icon>
                </TouchableOpacity>
            </View>

            
        </View>
        
        <ScrollView style={styles.scroll} showsHorizontalScrollIndicator={false} horizontal={true}>
        <View style={styles.cards}>
            <View style={styles.card1}>
            <View style={styles.texts}>
                <Text style={styles.join}>
                    Join us today
                </Text>
                <Icon style = {styles.wicon} name="user"></Icon>
                </View>
                <Image source={require('../assets/doctor.png')}  style={styles.image}/>
            </View>

            <View style={styles.card2}>
            <Image source={require('../assets/music.png')}  style={styles.image}/>
            <View style={styles.texts}>
                <Text style={styles.join}>
                    Listen To soothing music that will help you cool.
                </Text>
                
                </View>
                
            </View>

            <View style={styles.card3}>
            <View style={styles.texts}>
                <Text style={styles.join}>
                    Watch Videos
                </Text>
                
                </View>
                <Image source={require('../assets/watch.png')}  style={styles.image}/>
            </View>

            </View>
            
        </ScrollView>
        
        

        </View>
        <ScrollView style={styles.bottom} vertical='true'>
        <TouchableOpacity stype={styles.optionButton}
        onPress={() => navigation.navigate('Survey')}>
        <View style={styles.option}>
        <View style={styles.opIcon}>
        <Icon style = {styles.opticon} name="phone"></Icon>
        </View>
        <View style = {styles.message}>
            <Text style={styles.opmessage}>Start Survey</Text>
        </View>
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity stype={styles.optionButton}
        onPress={() => navigation.navigate('Music')}>
        <View style={styles.option}>
        <View style={styles.opIcon}>
        <Icon style = {styles.opticon} name="music"></Icon>
        </View>
        <View style = {styles.message}>
            <Text style={styles.opmessage}>Listen to Music</Text>
        </View>
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity stype={styles.optionButton} 
        onPress={() => navigation.navigate('Books')}
        
        >
        <View style={styles.option}>
        <View style={styles.opIcon}>
        <Icon style = {styles.opticon} name="book"></Icon>
        </View>
        <View style = {styles.message}>
            <Text style={styles.opmessage}>Read Articles</Text>
        </View>
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity stype={styles.optionButton}
        onPress={() => navigation.navigate('Doctors')}>
        <View style={styles.option}>
        <View style={styles.opIcon}>
        <Icon style = {styles.opticon} name="map"></Icon>
        </View>
        <View style = {styles.message}>
            <Text style={styles.opmessage}>Find Doctor</Text>
        </View>
            
        </View>
        </TouchableOpacity>

        <TouchableOpacity stype={styles.optionButton}
        onPress={() => navigation.navigate('Tips')}>
        <View style={styles.option}>
        <View style={styles.opIcon}>
        <Icon style = {styles.opticon} name="music"></Icon>
        </View>
        <View style = {styles.message}>
            <Text style={styles.opmessage}>Tips & Advice</Text>
        </View>
            
        </View>
        </TouchableOpacity>

        
        

        </ScrollView>
    </SafeAreaView>
    

    
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1b3a5d',
    },
    top:{
        backgroundColor:'#c1a64b',
        height:350,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
    },
    bottom:{
        backgroundColor:'#1b3a5d',
        paddingHorizontal:20,
        marginTop:30,
        flexDirection: 'column',
    },
    header:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:18,
        paddingVertical:40,
    },
    logotext:{
        fontSize:35,
        
        fontWeight:'bold',
    },
    icon:{
        fontSize:24,
        paddingLeft:8,
    },
    
    menu:{
        justifyContent:'space-between',
        flexDirection:"row",
        
    },
    scroll:{
        width:'100%',
        paddingHorizontal:20,
        flexWrap:'wrap',
        flex:1,
    },
    cards:{
        alignContent: 'center',
        alignItems:'center',
        width:'100%',
        flexDirection:'row',
    },
    card1:{
        backgroundColor:'white',
        height:200,
        width:350,
        borderRadius:23,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:30,
        padding:23,
        marginEnd:20,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    card2:{
        backgroundColor:'#ffffff',
        height:200,
        width:350,
        borderRadius:23,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:30,
        padding:23,
        marginEnd:20,
    },
    card3:{
        backgroundColor:'white',
        height:200,
        width:350,
        borderRadius:23,
        alignContent:'center',
        justifyContent:'center',
        paddingHorizontal:30,
        padding:23,
        marginRight:40,
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    image:{
        width:100,
        height:100,
    },
    join:{
        fontWeight:'bold',
        fontSize:21,
    },
    wicon:{
        fontSize:50,
    },
    option:{
        justifyContent:'space-between',
        flexDirection:'row',
        height:70,
        backgroundColor:'#1a3142',
        alignContent:'center',
        alignItems:'center',
        borderRadius:23,
        paddingHorizontal:15,
        marginTop:10,
        marginBottom:20,
    },
    opmessage:{
        color:'white',
        fontSize:28,
        fontSize:18,
        fontWeight:'bold',
    },
    opticon:{
        color:'white',
        fontSize:23,
    }
    

})

export default Landing;