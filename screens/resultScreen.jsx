import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { useNavigation, useRoute,StackActions,CommonActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native';

const ResultScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { answers,Username } = route.params;
  const countYes = answers.filter(answer => answer === 'Yes').length;

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(()=>{
    navigation.setOptions({
      headerLeft:null,
    });
  },[]);

  const handleSkip = () => {
    navigation.navigate('Landing');
    navigation.dispatch(StackActions.popToTop());
  };

  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0.2)).current;
  const translateAnimation = useRef(new Animated.Value(200)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnimation, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(translateAnimation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const navigateToQuotes = () => {
    navigation.navigate("Tips",{Username});
  };

  const navigateToTherapist = () => {
    navigation.navigate("categories",{Username});
  };

  const navigateToAnotherPage = () => {
    navigation.navigate("AnotherPage");
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.resultContainer, { opacity: opacityAnimation, transform: [{ scale: scaleAnimation }, { translateX: translateAnimation }] }]}>
        {countYes < 3 && (
          <>
          <LottieView style={{width:300}}
          source={require('../assets/hurray.json')}
          autoPlay
          loop
          
        />
            <Text style={styles.resultText}>You are Okay!!</Text>
            <Pressable onPress={navigateToQuotes} style={styles.button}>
              <Text style={styles.buttonText}>Read Quotes</Text>
            </Pressable>
          </>
        )}

        {countYes > 3 && (
          <>
          <LottieView style={{width:200}}
          source={require('../assets/sad.json')}
          autoPlay
          loop
          
        />
            <Text style={styles.resultText}>You need to see a therapist</Text>
            <Pressable onPress={navigateToTherapist} style={styles.button}>
              <Text style={styles.buttonText}>Book Therapist</Text>
            </Pressable>
          </>
        )}

        <Pressable onPress={handleSkip} style={styles.skipButton}>
          <Icon name="angle-right" size={20} color="#1b3a5d" style={styles.skipButtonIcon} />
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    backgroundColor: '#f4f4f4',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1b3a5d',
    padding: 14,
    borderRadius: 25,
    width: 120,
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  skipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 25,
    alignSelf: 'flex-end',
  },
  skipButtonIcon: {
    marginRight: 8,
  },
  skipButtonText: {
    color: '#1b3a5d',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default ResultScreen;
