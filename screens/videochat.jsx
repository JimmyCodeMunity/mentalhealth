import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Toast from 'react-native-toast-message';


const Video = ({navigation,route}) => {
  const { itemId, itemName,itemPhone, itemEmail, itemLocation,itemPrice,Username,itemLink,itemCode,itemStatus} = route.params;
  
  
  const handleLinkPress = () => {
    if (itemCode) {
      const jitsiBaseUrl = 'http://meet.jit.si/';
      const jitsiRoomName = itemCode.trim().replace(/\s/g, '-');
      const link = `${jitsiBaseUrl}${jitsiRoomName}`;
      Linking.openURL(link);
    }
    else{
      alert("You did not complete the payment");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Click to button to join</Text>
      <Text style={styles.title}>Meeting ID:{itemCode}</Text>
      <TouchableOpacity style={styles.linkButton} onPress={handleLinkPress}>
        <Text style={styles.linkText}>Join Meeting</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linkButton: {
    backgroundColor: '#1b3a5d',
    padding: 10,
    borderRadius: 8,
  },
  linkText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Video;
