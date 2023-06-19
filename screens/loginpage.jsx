import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Loginpage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    checkSavedCredentials();

    return () => {
      unsubscribe();
    };
  }, []);

  const checkSavedCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogin = async () => {
    if (!isConnected) {
      alert('No internet connection');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://www.mentheal.co.ke/api/loginauth.php', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Username: username, Email: email, Password: password }),
      });
      const data = await response.text();
      if (data === 'authenticated') {
        // Save credentials to AsyncStorage
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);

        navigation.navigate('userpage', {
          Username: email,
        });
        // User is authenticated, do something here (e.g. navigate to home screen)
      } else {
        // Authentication failed, show error message to user
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.logo}>
        <Image source={require('../assets/mentlogo.png')} style={{}} />
      </View>

      {!isConnected && (
        <LottieView source={require('../assets/connection.json')} autoPlay loop />
      )}

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('register')}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Loginpage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  logo: {
    marginTop: -40,
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
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#c1a64b',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: '#faf8f4',
    marginTop: 5,
    borderRadius: 10,
    width: '100%',
    borderColor: '#c1a64b',
    borderWidth: 2,
    padding: 15,
  },
  buttonText: {
    fontWeight: '700',
    color: 'white',
    fontSize: 17,
  },
  buttonOutlineText: {
    fontWeight: '700',
    color: 'black',
    fontSize: 17,
  },
  connectionText: {
    color: 'red',
    marginBottom: 10,
  },
});
