import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator, Share, TouchableOpacity } from 'react-native';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { Ionicons } from '@expo/vector-icons';

const Tips = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = () => {
    axios
      .get('https://type.fit/api/quotes')
      .then(response => {
        setQuotes(response.data);
        setLoading(false);
        setRefreshing(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
        setRefreshing(false);
      });
  };

  const handleRefresh = () => {
    setRefreshing(true);
    fetchQuotes();
  };

  const renderQuoteItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.text}>{item.text}</Text>
      <Text style={styles.author}>By {item.author}</Text>
      <TouchableOpacity onPress={() => shareQuote(item.text, item.author)} style={styles.shareButton}>
        <Ionicons name="share-outline" size={24} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );

  const shareQuote = (text, author) => {
    const message = `"${text}" - ${author}`;
    Share.share({
      message: message,
    });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <LottieView style={{ width: 300 }} source={require('../assets/waiting.json')} autoPlay loop />
          <Text style={styles.loadingText}>Loading quotes...</Text>
        </View>
      ) : (
        <FlatList
          data={quotes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderQuoteItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} colors={['#ffffff']} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b3a5d',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#ffffff',
  },
  card: {
    margin: 10,
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  author: {
    fontSize: 16,
    color: '#ffffff',
  },
  shareButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default Tips;
