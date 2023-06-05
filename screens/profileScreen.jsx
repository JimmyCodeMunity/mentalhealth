import React from "react";
import { View, Text, StyleSheet, Image,TouchableOpacity,Dimensions,TextInput } from "react-native";
import { useState, useEffect } from "react";
import Modal from 'react-native-modal';
import {showMessage,hideMessage} from 'react-native-flash-message';
import LottieView from 'lottie-react-native';

const ProfileScreen = ({ navigation, route }) => {
  const [names, setNames] = useState([]);
  const { Username } = route.params;
  const [isLoading, setIsLoading] = useState(true);
  const [password,setPassword] = useState('');
  const [username,setUsername] = useState(Username);

  const [isBottomSheetVisible,setBottomSheetVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://www.tangaraschools.org/api/fetchuser.php") // Update the URL if needed
      .then((response) => response.json())
      .then((data) => {
        const filteredNames = data.filter((item) => item.Email === Username);
        setNames(filteredNames);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ paddingVertical: 40,alignItems:'center' }}>
          <Image
            source={require("../assets/mentlogo.png")}
            style={styles.profileImage}
          />

          {names.map((name, index) => (
            <View key={index}>
              <Text style={styles.name}>Hi, {name.Username}</Text>
            </View>
          ))}

          
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Phone</Text>
          <Text style={styles.sectionText}>
            {names.map((name, index) => (
              <Text key={index}>254{name.Phone}</Text>
            ))}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Email</Text>
          {names.map((name, index) => (
            <Text key={index}>{name.Email}</Text>
          ))}
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity
        onPress={() => {setBottomSheetVisible(true)}}
              style={styles.button}
              
            >
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isBottomSheetVisible} onBackdropPress ={() => setBottomSheetVisible(false)}
        style={styles.modalContainer}
      >
        <View style={[styles.bottomSheetContainer,{height:windowHeight*0.5}]}>
        
          <View style={styles.modalContent}>
          
          <View style={styles.inputContainer}>
          <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'black'}
          value={username}
          
          onChangeText={(text) => setUsername(text)}
        />
          </View>
          
          
          <TouchableOpacity style={styles.continue}
      onPress={() => {setBottomSheetVisible(false)}}>
      <Text style={{color:'#fff',fontSize:16,}}>Save</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c1a64b",
  },
  header: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: '#1a3142',
    borderBottomRightRadius: 150,
    borderTopLeftRadius: 150,
    height:300,
    marginTop:50,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color:'white',
  },
  username: {
    fontSize: 16,
    color: "#777",
    marginTop: 5,
  },
  content: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1b3a5d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    width:'50%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer:{
    justifyContent:'flex-end',
    margin:0,
    height:'50%',
  },
  bottomSheetContainer:{
    backgroundColor:'#1b3a5d',
    padding:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    shadowColor:'#000000',
    shadowOpacity:0.5,
    shadowOffset:{
      width:0,
      height:-2,
    }
  },
  modalContent:{
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center',
    marginTop:'10%',
  },
  TillNo:{
    fontSize:40,
    fontWeight:'bold',
    color:'#fff',
  },
  tillname:{
    fontSize:30,
    color:'#fff',
    
  },
  image:{
    width:150,
    height:100,
},
continue:{
  backgroundColor:'#c1a64b',
  height:50,
  borderRadius:10,
  width:'50%',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  marginTop:20,
  
},
inputContainer: {
  width: '80%',
},
input: {
  backgroundColor: 'lightgrey',
  paddingHorizontal: 15,
  paddingVertical: 17,
  borderRadius: 10,
  marginTop: 8,
},
});

export default ProfileScreen;
