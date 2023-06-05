import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';

const HomePage = () => {
    const [userName,setUserName] = useState('');
  return (
    <View>
      <Text styles.username>HomePage</Text>
      <TextInput
        value={userName}
        onChangeText={newvalue => setUserName(newvalue)}
      />

      <Button/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({})