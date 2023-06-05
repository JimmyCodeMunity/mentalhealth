import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';





const Music = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loaderContainer}>
          <LottieView style={{ width: 300 }} source={require('../assets/comingsoon.json')} autoPlay loop />
          
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  songList: {
    flex: 1,
    width: '100%',
  },
  songItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  songTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  songArtist: {
    fontSize: 16,
    color: '#666',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 10,
  },
});

export default Music;
