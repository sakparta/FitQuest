import React from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Button, Pressable } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native';

const onPressMyWorkouts = () => {
  // Switches to myWorkOuts if not already in it
  console.log("My workouts pressed.");
};

const onPressAddWorkouts = () => {
  console.log("Add workouts pressed.");
}


const WorkoutsScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.content}>
      <Text style={styles.screenTitle}>Workouts</Text>
        <View style={styles.topContent}>


            <Pressable style={styles.workoutSelectorButton} onPress={onPressAddWorkouts}>
            <Icon2 name="plus" size={50} />
            <Text style={[styles.contentText, {fontSize: 10}]}>Add workouts </Text>
            </Pressable>

            

            <Pressable style={styles.workoutSelectorButton} onPress={onPressAddWorkouts}>
            <Icon3 name="collections-bookmark" size={50} />
            <Text style={[styles.contentText, {fontSize: 10}]}>My workouts </Text>
            </Pressable>

        </View>

        <View style={styles.bottomContent}>
          <ScrollView>
            <View style={styles.workoutBox}>
              <Text> Hello </Text>
            </View>

            <View style={styles.workoutBox}>
              <Text> Hello </Text>
            </View>

            <View style={styles.workoutBox}>
              <Text> Hello </Text>
            </View>
          </ScrollView>
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
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  topContent: {
    flex: 0.3,
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 110,
    backgroundColor: 'pink',
  },
  bottomContent: {
    flex: 0.7,
    backgroundColor: "magenta"
  },
  workoutBox: {
    width: "90%",
    height: 140,
    backgroundColor: "grey",
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  workoutSelectorButton: {
    flex: 1,

    borderRadius: 50,
    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: 'crimson'
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
  contentText: {
    fontsize: 14,
    color: 'black',
    fontWeight: 'bold'
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 35
  }
  
});

export default WorkoutsScreen;
