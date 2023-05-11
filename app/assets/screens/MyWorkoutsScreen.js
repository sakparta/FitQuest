
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Workouts from '../components/AddedWorkouts';
import { workoutArray } from '../components/WorkoutList';


import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Entypo';


const onPressMyWorkoutLibrary = () => {
  console.log("My workouts pressed.");
};

const onPressAddworkoutsLibrary = () => {
  console.log("Add workouts pressed.");
  // Switches to Add workouts if not already in it
};

const MyWorkoutsScreen = ({ navigation, onPressReturn, onPressRemoveWorkout, workoutBoxVisible }) => {

  //tab logic
  const [WorkoutLibrary, setWorkoutlibrary] = useState(true);



  // weekday selector logic
  const [dayButtonToggled, setDayButtonToggled] = useState([]);

  return (

    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.screenTitle}>Workouts</Text>
        <View style={styles.topContent}>
          <TouchableOpacity style={[styles.workoutSelectorButton, { backgroundColor: '#e6e6e7' }]} onPress={() => navigation.navigate("Workouts")}>
            <Icon2 name="plus" size={50} />
            <Text style={[styles.contentText, { fontSize: 10 }]}>Add workouts </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.workoutSelectorButton} onPress={onPressMyWorkoutLibrary}>
            <Icon3 name="collections-bookmark" size={50} />
            <Text style={[styles.contentText, { fontSize: 10 }]}>My workouts </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {workoutArray.map((workout) => (
                <Workouts
                  key={workout.id}
                  title={workout.title}
                  desc={workout.desc}
                  content={workout.content}
                  shortDesc={workout.shortDesc}
                  icon={workout.icon}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </View>


                {/* Nav Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={30} color="black" />
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
    backgroundColor: '#ececea',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  topContent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    gap: 110,
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdc7'
  },
  bottomContent: {
    flex: 3,
    alignItems: 'center',
  },
  workoutSelectorButton: {
    flex: 1,
    height: 80,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bdbdc7',
    elevation: 5,
    shadowColor: '#505050'
  },
  navBar: {
    flex: 0.1,
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

  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2,
    paddingTop: 8
  },
  buttonText: {
    fontWeight: 'bold',
    textShadowColor: 'black',
    color: 'white',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4

  },
  contentText: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 35

  },
  descriptionText: {
    color: 'black',
    textAlign: 'auto',
    fontWeight: 'bold',
    fontSize: 15
  },


});

export default MyWorkoutsScreen;