import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Books = () => {
  const [data, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://openlibrary.org/subjects/therapy.json')
      .then(response => {
        setBooks(response.data.works);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  

  return (
    <View style={styles.container}>
      {data.map((book) => (
        <View style={styles.card} key={book.id}>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.author}>By {book.author}</Text>
          <Text style={styles.description}>{book.description}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default Books;
