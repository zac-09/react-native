import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet,Modal } from 'react-native';
const GoalInput = props => {
    const [enterGoal, setEnteredGoal] = useState('');
    const goalHandler = (enteredText) => {
        setEnteredGoal(enteredText);
      };
      const addGoalHandler = () =>{
        props.onAddGoal(enterGoal);
        setEnteredGoal('');
      };
    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputText}>
            <TextInput
                placeholder="Course goal"
                style={styles.input}
                onChangeText={goalHandler}
                value={enterGoal}
            />
            <Button title="Cancel" color='red'  style={styles.button} onPress={props.onCancel} />

            <Button title="ADD" color ='green' style={styles.button} onPress={addGoalHandler} />
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputText: {
        
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom:10
    },
    button:{
        marginBottom:10
    }
});

export default GoalInput;