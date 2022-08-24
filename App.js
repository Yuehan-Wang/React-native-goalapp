import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() { 
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModelIsVisible(true);
  }

  function endAddGoalHandler(){
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText){
    {/* we need what's passed in the getInputHandler function.
        to achieve that, we need to store the input text as State*/}
        setCourseGoals(currentCourseGoals => enteredGoalText ? [
          ...currentCourseGoals, 
          {text: enteredGoalText, 
           id: Math.random().toString()},
          ] : currentCourseGoals); 
           //best practice of updating State
           endAddGoalHandler()
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
    <StatusBar style="dark" />
    <View style={styles.appContainer}>
      {/* <Text>Open up App.js to start working on your phone!</Text>
      <Text style={styles.dummyText}> This is a test</Text>
      <Button title='Tap'/>
      <StatusBar style="auto" /> */}
      <Button 
        title='Add New Goal' 
        onPress={startAddGoalHandler}/>
      <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      <FlatList 
        data={courseGoals}  
        renderItem={(itemData) => {
          return(
           <GoalItem 
              text = {itemData.item.text} 
              id = {itemData.item.id}
              onDeleteItem={deleteGoalHandler}/>
          )
      }}
      keyExtractor={(item, index) => {
        return item.id
      }}/>
      {/* we add View to wrap the goal item to allow rounded corner using border radius in IOS
      we add View to wrap FlatList/ScrollView to control the space it's taking*/}
      </View>
      
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal:20
  },
  goalsContainer:{
    flex: 5
  },
});
