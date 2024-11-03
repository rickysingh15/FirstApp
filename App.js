import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, ScrollView, FlatList} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() 
{

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  /**
   * Adds the current input text to the courseGoals state array.
   * Clears the input text.
   */
  function addGoalHandler(inputText) 
  {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
       {text: inputText, id: Math.random().toString()},
      ]);  
      
      cancelAddGoalHandler();
  }

  function startAddGoalHandler()
  {
    setModalIsVisible(true);
  }

  function cancelAddGoalHandler()
  {
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id)
  {
    console.log("Delete");   
    setCourseGoals((currentCourseGoals) => {
      let sz = currentCourseGoals.length;
      let newGoals = [];
      for(let i=0; i<sz; i++)
      {
        if(currentCourseGoals[i].id != id) newGoals.push(currentCourseGoals[i]);
      }

      return newGoals;
    });
  } 
  
  return (
    <View style={styles.appContainer}>

      <View style={styles.addNewButtonContainer}>
        <Button title='Add New Goal'
          color="#5A5A5A"
          onPress={startAddGoalHandler}/>
      </View>

      <View style={styles.inputContainer}>
          {modalIsVisible && <GoalInput 
                                visible={modalIsVisible} 
                                addGoal={addGoalHandler} 
                                cancelStateVar={cancelAddGoalHandler}/>}
      </View>

      <View style={styles.goalsContainer}>
        <FlatList 
          data={courseGoals}
          renderItem={(itemData)=>{

            return (
              <GoalItem id = {itemData.item.id} text={itemData.item.text} onDelete={deleteGoalHandler}/>
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
  goalsContainer: {
    // marginTop: 16,
    // paddingTop: 16,
    flex:7
  },

  addNewButtonContainer:{
    flex:1
  }
});
