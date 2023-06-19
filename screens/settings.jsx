import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Image,
  Linking,
  Share,
  FlatList,
} from "react-native";
import React from "react";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionic from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import FeatherIcon from "react-native-feather";
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';


const Stack = createNativeStackNavigator();


const Settings = ({ route }) => {
  const { names } = route.params;
  const navigation = useNavigation();
  

  const handleLinkPress = () => {
    Linking.openURL("https://www.mentheal.co.ke");
  };


  const Notify = () => {
    
    Toast.show({
      type: 'success',
      text1: 'Meeting Already ended',
      visibilityTime: 2000,
      autoHide: true,
    });
  };


  const handleLogout = () => {
    navigation.navigate('LoginPage'); // Replace 'Login' with the screen name you want to navigate to
};

  const handleShare = () => {
    const message = "Share this Awesome App!!";
    const url = "https://www.mentheal.co.ke";

    Share.share({
      message: message,
      url: url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const data = [
    { id: "1", title: "Share", onPress: handleShare },
    { id: "2", title: "View Website", onPress: handleLinkPress },
    { id: "3", title: "Contact Us" },
    { id: "4", title: "Change Password" },
    { id: "5", title: "Logout", onPress: handleLogout },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
    
      
      <TouchableOpacity style={styles.itemContent} onPress={item.onPress}>
      <View>
        <Text style={styles.itemText}>{item.title}</Text>
        {item.id === '1'}
      
      </View>
      
      <View>
        <Icon name="arrow-right" size={20}></Icon>
      </View>
      </TouchableOpacity>
      
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <View style={styles.profcard}>
          <View style={styles.image}>
            <Image
              style={styles.profilepic}
              source={require("../assets/mentlogo.png")}
            />
          </View>

          <View style={styles.name}>
            {names.map((name, index) => (
              <Text key={index} style={{ fontSize: 30, fontWeight: "bold" }}>
                {name.Username}
              </Text>
            ))}
          </View>
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            paddingHorizontal: 20,
          }}
        >
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.listContent}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topHead: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mainHeading: {
    fontSize: 24,
  },
  container: {
    padding: 10,
    backgroundColor: "#FFF",
    height: "100%",
  },
  mainSection: {
    marginTop: 20,
    alignItems: "center",
  },
  emailSupport: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    borderBottomColor: "rgba(51,51,51,0.05)",
    marginTop: 20,
  },
  listContent: {
    paddingBottom: 16,
    marginTop: 30,
  },
  itemContent:{
    justifyContent:'space-between',
    flexDirection:'row',
    width:'100%',
  },
  itemContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
  },
  profcard: {
    backgroundColor: "lightgrey",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    width: "90%",
    borderRadius: 10,
    height: 90,
    alignItems: "center",
  },
  profilepic: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});
export default Settings;
