import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Dimensions,Image,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import {showMessage,hideMessage} from 'react-native-flash-message';
import LottieView from 'lottie-react-native';

const BookingPage = ({navigation,route}) => {
  const { itemId, itemName,itemPhone, itemEmail, itemLocation,Username,itemPrice } = route.params;
  const [username, setUsername] = useState(itemName);
  const [email, setEmail] = useState(itemEmail);
  const [price,setPrice] = useState(itemPrice);
  const [phone, setPhone] = useState('');
  const [docPhone,setDocphone] =useState(itemPhone);
  const [mpesacode, setMpesacode] = useState('');
  const [location,setLocation] = useState(itemLocation);
  const [userEmail, setUserEmail] = useState(Username);
  const [message, setMessage] = useState('');
  

  const goBack = () => {
    navigation.goBack();
  };

  const [isBottomSheetVisible,setBottomSheetVisible] = useState(false);

  const windowHeight = Dimensions.get('window').height;



  const handleBooking = () => {
    const bookingData = {
      Username: username,
      Email: email,
      Phone: phone,
      Useremail: userEmail,
      Price:price,
      Location:location,
      Docphone:docPhone,
      Mpesacode:mpesacode,
    };

    if(phone.length==0){
      alert("Phone or Code missing");
  }
  else{
    // Send the booking data to your API endpoint
    fetch('https://www.tangaraschools.org/api/mentbooking.php', {
      method: 'POST',
      body: JSON.stringify(bookingData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setMessage(data[0].Message);
      })
      .catch(error => {
        console.error(error);
        setMessage('Error completing your booking');
      });
  }
    
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
    {message !== '' && <Text style={styles.message}>{message}</Text>}
      <Text style={styles.heading}>Book Now</Text>
      
      <View style={styles.row}>
      <TextInput
        style={styles.inputname}
        placeholder="Username"
        value={username}
        editable={false}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.inputemail}
        placeholder="Email"
        value={email}
        editable={false}
        onChangeText={text => setEmail(text)}
      />
      </View>
      <View style={styles.row}>
      <TextInput
        style={styles.inputname}
        placeholder="Charges"
        value={price}
        editable={false}
        onChangeText={text => setPrice(text)}
      />
      <TextInput
        style={styles.inputname}
        placeholder="Charges"
        value={docPhone}
        editable={false}
        onChangeText={text => setDocphone(text)}
      />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        editable={false}
        onChangeText={text => setLocation(text)}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        value={phone}
        onChangeText={text => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="User Email"
        value={Username}
        onChangeText={text => setUserEmail(text)}
      />

      <View style={styles.row}>
      <TextInput
        style={styles.inputname}
        placeholder="Enter your Mpesa Code"
        value={mpesacode}
        onChangeText={text => setMpesacode(text)}
      />
      <TouchableOpacity style={styles.paydet}
      onPress={() => {setBottomSheetVisible(true)}}>
      <Text style={{color:'#fff',fontSize:16,}}>Show Payment Details</Text>
      </TouchableOpacity>

      </View>
      
      <TouchableOpacity style={styles.continue}
      onPress={handleBooking}>
      <Text style={{color:'#fff',fontSize:16,}}>Book Now!!</Text>
      </TouchableOpacity>
      <Button title="Back" style={styles.button} onPress={goBack} />
      
      

      
      

      

      <Modal isVisible={isBottomSheetVisible} onBackdropPress ={() => setBottomSheetVisible(false)}
        style={styles.modalContainer}
      >
        <View style={[styles.bottomSheetContainer,{height:windowHeight*0.5}]}>
          <View style={styles.modalContent}>
          <Image source={require('../assets/mpesa.png')}  style={styles.image}/>
          <Text style={styles.TillNo}>8504978</Text>
          <Text style={styles.tillname}>Mentheal Ventures</Text>
          <Text style={styles.tillname}>Kshs.{price}</Text>
          <TouchableOpacity style={styles.continue}
      onPress={() => {setBottomSheetVisible(false)}}>
      <Text style={{color:'#fff',fontSize:16,}}>Continue</Text>
      </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#1a3142'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:'#c1a64b'
  },
  input: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    backgroundColor:'#ccc',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  inputname:{
    width: '50%',
    height: 40,
    backgroundColor:'#ccc',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 8,

  },
  inputemail:{
    width: '50%',
    height: 40,
    backgroundColor:'#ccc',
    borderRadius: 10,
    marginBottom: 16,
    paddingHorizontal: 10,

  },
  message: {
    marginTop: 16,
    fontSize: 16,
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
row:{
  flexDirection:'row',
  paddingHorizontal:15,
  alignItems:'center',
},
paydet:{
  backgroundColor:'#c1a64b',
  height:40,
  borderRadius:10,
  width:'50%',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  marginBottom:15,
  
},
button:{
  backgroundColor:'#c1a64b',
  height:50,
  borderRadius:10,
  width:'50%',
  justifyContent:'center',
  alignItems:'center',
  textAlign:'center',
  marginBottom:23,
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
message:{
  color:'#c1a64b',
  marginBottom:'12',
}
});

export default BookingPage;
