import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';

export default function App() 
{

  const [textInputString, textInputHandler] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(receivedText) {
    // console.log(receivedText);
    textInputHandler(receivedText);
  }

  /**
   * Adds the current input text to the courseGoals state array.
   * Clears the input text.
   */
  function addGoalHandler() 
  {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
       {text: textInputString, id: Math.random().toString()},
      ]);   
  }
  
  return (
    <View style={styles.appContainer}>

      <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler}/>
          <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{

            return (
              <GoalItem text={itemData.item.text}/>
            );
          }}
          keyExtractor={(item, index)=>{return item.id}}
          alwaysBounceVertical={false}
          />  
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
  },

  listItem: {
    margin: 8,
    padding: 10,
    borderRadius: 6,
    backgroundColor:'#5e0acc'
  },

  goalText:{
    color: 'white'
  }
});
