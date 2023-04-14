import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const onPressMyWorkouts = () => {
  // Switches to myWorkOuts if not already in it
  console.log("My workouts pressed.");
};

const onPressAddWorkouts = () => {
  console.log("Add workouts pressed.");
}

const Tab = createBottomTabNavigator();

const WorkoutsScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>

      <View flex={1}>
        <View style={styles.topContent}>

            <Button
            style = {styles.workoutSelectorButton}
            onPress = {onPressAddWorkouts}
            title = "Add Workouts"
            color = "black"
            />

            <Button
            style = {styles.workoutSelectorButton}
            onPress = {onPressMyWorkouts}
            title = "My Workouts"
            color = "black"
            />

        </View>

        <View style={styles.bottomContent}>

        </View>
      </View>

      
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={30} color="black"  />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Workouts")}>
          <Icon name="fitness" size={40} color="black" />
          <Text style={styles.navButtonText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Meals")}>
          <Icon name="fast-food-outline" size={30} color="black" />
          <Text style={styles.navButtonText}>Meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContent: {
    flex: 0.4,
    flexDirection: 'row',
    backgroundColor: 'pink'
  },
  bottomContent: {
    flex: 0.4,
    backgroundColor: "magenta"
  },
  workoutSelectorButton: {
    flex: 1,
    height: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center'
  },
  navBar: {
    flex: 0.12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 80,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    fontSize: 12,
    color: 'black',
    marginTop: 5,
  },
  
});

export default WorkoutsScreen;
