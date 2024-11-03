import { StyleSheet, Text, View, Pressable} from "react-native";

function GoalItem(props) 
{

    function deleteHandler()
    {
      setTimeout( () =>{props.onDelete(props.id)},500);
    }

    return (
      <View style={styles.listItem}>
        <Pressable 
            onPress={deleteHandler}
            android_ripple={{color: '#210644'}}
            // style prop of pressable is for IOS only
            style={(pressed)=>{pressed && styles.pressedItem}}>
            <Text style={styles.goalText}>{props.text}</Text>
        </Pressable>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
listItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor:'#5e0acc'
    },

    pressedItem:{
      opacity: 0.5
    },

    goalText:{
      padding: 10,
      color: 'white'
    }
});