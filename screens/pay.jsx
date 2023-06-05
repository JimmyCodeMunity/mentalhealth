import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Payment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    // Perform necessary validations on phoneNumber and amount

    // Make API call to initiate M-Pesa STK Push
    // Use the appropriate endpoint and HTTP library (e.g., axios, fetch)

    // Example API call using fetch:
    fetch('http://192.168.8.153:80/api/mpesa.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phoneNumber,
        amount,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response from the API
        console.log(data);
        // Process the response, update UI, etc.
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>M-Pesa STK Push</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      <Button title="Make Payment" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default Payment;
