import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button} from 'react-native';

export default function App() 
{

  const [textInputString, textInputHandler] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(receivedText) {
    // console.log(receivedText);
    textInputHandler(receivedText);
  }

  function addGoalHandler() {
    console.log(textInputString);
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, textInputString]);   
    
    textInputHandler('');
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 8,
    marginRight: 8,
    width: '70%'
  },
  goalsContainer: {
    marginTop: 16,
    paddingTop: 16,
    flex: 5
  }
});
