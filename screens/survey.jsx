import { View, Text, StyleSheet,SafeAreaView,Button,TouchableOpacity,Pressable,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Survey({route}) {
  const navigation = useNavigation();
  const {Username} = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/doctor.png')}  style={styles.image}/>

      <View style={{padding:10}}>
        <Text style={{textAlign:"center",color:"#1b3a5d",fontSize:25,fontWeight:"600"}}>Start Survey</Text>

        <View style={{padding:10,backgroundColor:"#c1a64b",borderRadius:6,marginTop:15}}>
          <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
            <Text style={{color:"white"}}>.</Text>
            <Text style={{marginLeft:4,color:"#1b3a5d",fontWeight:"500"}}>Please answer all the questions</Text>
            </View>

            <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>

            <Text style={{color:"white"}}>.</Text>
            <Text style={{marginLeft:4,color:"#1b3a5d",fontWeight:"500"}}>Answer Questions in Order</Text>
            </View>

            <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
            <Text style={{color:"white"}}>.</Text>
            <Text style={{marginLeft:4,color:"#1b3a5d",fontWeight:"500"}}>Be honest with us</Text>

            </View>
            <View style={{flexDirection:"row",alignItems:"center",marginVertical:5}}>
            <Text style={{color:"white"}}>.</Text>
            <Text style={{marginLeft:4,color:"#1b3a5d",fontWeight:"500"}}>Answer each question</Text>

            </View>
            
          </View>
        </View>


        <View style={{flexDirection:'row'}}>
        <Pressable
        onPress={goBack}
         style={{backgroundColor:"#1b3a5d",padding:16,borderRadius:25,marginLeft:"auto",marginRight:"auto",marginTop:30,width:150,shadowColor:2,}}>
          <Text style={{color:"white",fontWeight:"600",textAlign:"center",fontSize:23}}>Skip</Text>
        </Pressable>
        

        <Pressable
        onPress={() => navigation.navigate("questions",{Username})}
         style={{backgroundColor:"#1b3a5d",padding:16,borderRadius:25,marginLeft:"auto",marginRight:"auto",marginTop:30,width:150,shadowColor:2,}}>
          <Text style={{color:"white",fontWeight:"600",textAlign:"center",fontSize:23}}>Start Survey</Text>
        </Pressable>
        </View>

        
      
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:15,
    backgroundColor:'white',
  },
  image:{
    width:'100%',
    height:370,
    resizeMode:'contain'
  }

})