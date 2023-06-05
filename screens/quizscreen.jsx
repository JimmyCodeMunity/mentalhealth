import React, { useState,useEffect } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const questions = [
  "Have you had excessive anxiety or worry for the last 6 months?",
  "Do situations that are new or associated with unfamiliar people cause you to feel anxious, distressed, or panicky?",
  "Have you experienced an attack characterized by palpitations, pounding heart or accelerated heart rate, sweating, trembling or shaking sensations and shortness of breath?",
  "Are you struggling with thoughts that come into your mind that you do not want to be there?",
  "Do you experience difficulty falling or staying asleep, lack of concentration and feelings of self-blame, guilt, shame, detachment, and decreased interest in activities?"
  // Add more questions here
];

const QuizScreen = ({route}) => {
  const [answers, setAnswers] = useState([]);
  const navigation = useNavigation();
  const {Username} = route.params;

  const goBack = () => {
    navigation.goBack();
  };
  useEffect(()=>{
    navigation.setOptions({
      headerLeft:null,
    });
  },[]);

  const handleYes = () => {
    setAnswers([...answers, 'Yes']);
    if (questions.length === answers.length + 1) {
      navigateToResult();
    }
  };

  const handleNo = () => {
    setAnswers([...answers, 'No']);
    if (questions.length === answers.length + 1) {
      navigateToResult();
    }
  };

  const navigateToResult = () => {
    navigation.navigate('results', { answers,Username });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            onYes={handleYes}
            onNo={handleNo}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const QuestionCard = ({ question, onYes, onNo }) => {
  const [bgColor, setBgColor] = useState('#FFFFFF');

  const handleButtonClick = (color) => {
    setBgColor(color);
  };

  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Yes"
          onPress={() => {
            onYes();
            handleButtonClick('#FF0000'); // Change to desired color
          }}
        />
        <Button
          title="No"
          onPress={() => {
            onNo();
            handleButtonClick('#00FF00'); // Change to desired color
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 19,
    
    borderRadius: 8,
  },
  question: {
    fontSize: 14,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default QuizScreen;
