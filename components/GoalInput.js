import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText){
        setEnteredGoalText(enteredText)
      };
    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    };
    return(
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/favicon.png')}/>
        <TextInput 
            style={styles.textInput} 
            placeholder="What's your goal" 
            onChangeText={goalInputHandler}
            value={enteredGoalText}/>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title='Add Goal' onPress={addGoalHandler} color='green'/>
              </View>
              <View style={styles.button}>
                <Button title='Cancel' onPress={props.onCancel} color='red'/>
              </View>
            </View>
      </View>
      </Modal>
    )
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center', //so that text in the btn is not stretched
        backgroundColor: 'beige',
        padding: 16,
      },
      textInput:{
        borderWidth: 1, 
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%', //take up 80% of the parent(in this case the container) width
        padding:10,
        borderRadius:6
      },
      buttonContainer:{
        flexDirection: 'row',
      },
      button:{
        width: '30%',
        marginTop: 20,
        marginHorizontal:8
      },
      image:{
        width: 100,
        height: 100,
        margin: 20
      }
});