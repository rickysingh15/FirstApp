import { StyleSheet, Text, View } from "react-native";

function GoalItem(props) 
{
    return (
      <View style={styles.listItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
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