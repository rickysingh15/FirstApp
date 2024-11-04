import {useState} from "react";
import { TextInput, Button, StyleSheet, Text, View, Modal, Image } from "react-native";

function GoalInput(props) 
{
    const [textInputString, textInputHandler] = useState('');
    
    function goalInputHandler(receivedText) 
    {
        // console.log(receivedText);
        // textInputHandler('');
        textInputHandler(receivedText);
    }

    function cancelAddGoalHandler()
    {
        props.cancelStateVar();
    }

    function addGoalHandler()
    {   
        if(textInputString.length > 0)
        {
            props.addGoal(textInputString);
        }
        textInputHandler('');
    }

    return (
        // visible prop should be used to show/hide the modal coz as 
        // long as it is true, it is in the COMPONENT TREE
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require("../assets/images/goal.png")}/>
                <TextInput 
                        style={styles.textInput}
                        placeholder="Your course goal!" 
                        onChangeText={goalInputHandler}
                        value={textInputString}/>
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={cancelAddGoalHandler} color="#f31282"/>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;


const styles = StyleSheet.create({

inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
    backgroundColor: '#311b6b'
    },

    image:{
        width: 100,
        height: 100,
        margin: 20
    },

    textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    color: '#120438',
    padding: 16,
    width: '100%'
    },

    buttonContainer: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16
    },

    button:{
        width: 100,
        marginHorizontal: 8
    }

});