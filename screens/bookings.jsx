import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView,Button,TouchableOpacity,RefreshControl, ActivityIndicator} from 'react-native';
import {StackNavigator} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';


const Stack = createNativeStackNavigator();

const Bookings = ({navigation,route}) => {
  const {Username} =route.params;
  const {categoryName} = route.params;
  const [query,setQuery] = useState('Mentheal');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const Notify = () => {
    alert('Please wait for approval');
  };

  useEffect(() => {
    // Simulating loading content
    setTimeout(() => {
      setContent('Hello World');
      setIsLoading(false);
    }, 3000);
  }, []);
  //const {navigate} = this.props.navigation();
  //const {params} = this.props.navigation.state;
  //192.168.0.108
  //www.tangaraschools.org/api/collect.php
  

  const fetchData = () => {
    setIsRefreshing(true);
    fetch('https://www.tangaraschools.org/api/bookings.php')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setIsRefreshing(false);
      })
      .catch((error) => {
        console.error(error);
        setIsRefreshing(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredData = data.filter(item => item.UserEmail === Username);

  return (
    
    <ScrollView
      style={styles.body}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={fetchData} />}
    >
      <View style={styles.heading}>
        <Text style={styles.catname}>My Bookings</Text>
      </View>
      {isLoading ? (
        <View style={styles.loaderContainer}>
        <LottieView style={{width:300}}
          source={require('../assets/search.json')}
          autoPlay
          loop
          
        />
          <Text style={styles.waitingText}>Looking for  bookings</Text>
        </View>
      ) : filteredData.length > 0 ? (
        filteredData.map((item) => (
          <TouchableOpacity style={styles.container} key={item.id}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Name:{item.Username}</Text>
              <Text style={styles.author}>Email:{item.Email}</Text>
              <Text style={styles.author}>{item.Phone}</Text>
              <Text style={styles.author}>{item.Mpesacode}</Text>
              <Text style={styles.author}>Status:{item.Paystatus}</Text>
              <View style={item.Status === '1' ? styles.activeBadge : styles.inactiveBadge}>
                <Text style={styles.badgeText}>{item.Status === '1' ? 'Waiting' : 'Completed'}</Text>
              </View>
              <Text style={styles.author}>Charge:Khs. {item.Price}</Text>
              
              <Text style={styles.year}>{item.location}</Text>
            </View>
            {item.Status === '1' && item.Paystatus === 'Approved' ? (
              <TouchableOpacity
              style={styles.button}
              onPress={() =>
                navigation.navigate('Video', {
                  itemPhone: item.phone,
                  itemName: item.Username,
                  itemLocation: item.location,
                  itemEmail: item.email,
                  itemPrice: item.price,
                  Username,
                  itemLink:item.Link,
                  itemCode:item.Mpesacode,
                  itemStatus:item.Status,
                  itemPayStatus:item.Paystatus,
                })
              }
            >
              <Text style={styles.buttonText}>Join Meeting</Text>
            </TouchableOpacity>

            ):(
              <TouchableOpacity
              style={styles.button}
              onPress={Notify}
            >
              <Text style={styles.buttonText}>Waiting</Text>
            </TouchableOpacity>
              

            )}
          </TouchableOpacity>
        ))
      ) : (
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <LottieView style={{width:300}}
          source={require('../assets/nothing.json')}
          autoPlay
          loop
          
        />

        <Text>Ooops!! No Bookings Available</Text>
        </View>
      )}
      
    </ScrollView>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    
  },
  textContainer: {
    flex: 1,
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 16,
    marginBottom: 4,
  },
  year: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#1b3a5d',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading:{
    alignItems:"center",
    paddingVertical:23,
    
  },
  catname:{
    fontSize:23,
    fontWeight: 'bold',
  },
  noDoctorsText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  waitingText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeBadge: {
    backgroundColor: 'yellow',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 10,
  },
  inactiveBadge: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginTop: 10,
  },
  badgeText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});