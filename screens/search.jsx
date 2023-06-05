import React from 'react';
import { View, TextInput, KeyboardAvoidingView, Text, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <TextInput placeholder='search'
            style={styles.input}
            
            onchangeText={text => setEmail(text)}
            //value={email}
            />
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        
        alignItems:'center',
    },
    input:{
        backgroundColor:'#d9d9d9',
        height:30,
        paddingVertical:20,
        borderRadius:19,
        width:'80%',
        marginTop:80,
    }

})
