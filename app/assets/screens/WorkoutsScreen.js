import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Workouts from './Workouts';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Entypo';

let selectedDays = [];

const onPressMyWorkoutLibrary = () => {
  // Switches to myWorkOuts if not already in it
  console.log("My workouts pressed.");
};

const onPressAddworkoutsLibrary = () => {
  console.log("Add workouts pressed.");
};

const workouts = [
  { title: 'Strength Training', shortDesc: 'Push, Pull, Legs', desc: 'A Push, Pull, Legs Split is a common workout routine used to target different muscle groups on different days.', icon: 'weight-lifter', id: 1 },
  { title: 'Cardio Training', shortDesc: 'Running, Cycling, HIIT ', desc: 'running', icon: '', id: 2 },
  { title: 'Mixed Program', shortDesc: 'Strength Training + Cardio', desc: '', icon: '', id: 3 },
  { title: 'Stretching Exercises', shortDesc: 'Overall Body Mobility', desc: '', icon: '', id: 4 },
];

const handlePressedDays = function (index) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  weekday = daysOfWeek[index];
  console.log(weekday + " pressed");

  if (selectedDays.includes(weekday)) {
    selectedDays.splice(selectedDays.indexOf(weekday), 1);
  } else {
    selectedDays.push(weekday);
  }

  console.log("selected days: " + selectedDays);
}

const WorkoutsScreen = ({ navigation }) => {

  //tab logic
  const [WorkoutLibrary, setWorkoutlibrary] = useState(true);

  // workout box logic
  const [workoutBoxVisible, setWorkoutBoxVisible] = useState(false);
  const onPressWorkoutBox = () => setWorkoutBoxVisible(!workoutBoxVisible);

  // weekday selector logic
  const [dayButtonToggled, setDayButtonToggled] = useState([]);

  const toggleDayButton = (buttonIndex) => {
    if (dayButtonToggled.includes(buttonIndex)) {
      setDayButtonToggled(dayButtonToggled.filter((index) => index !== buttonIndex));
    } else {
      setDayButtonToggled([...dayButtonToggled, buttonIndex])
    }
  }

  const onPressDay = function (index) {
    handlePressedDays(index);
    toggleDayButton(index);
  }

  const onPressReturn = () => {
    console.log("Return pressed.");
    selectedDays.splice(0);
    dayButtonToggled.splice(0);

    setWorkoutBoxVisible(!workoutBoxVisible);
  }

  const onPressAddWorkout = () => {
    console.log("Add workouts pressed.");
    selectedDays.splice(0);
    dayButtonToggled.splice(0);
    // implement adding to users workouts
    setWorkoutBoxVisible(!workoutBoxVisible);
  };

  return (

    <View style={styles.container}>
      <View style={styles.content}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={workoutBoxVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setWorkoutBoxVisible(!workoutBoxVisible);
          }}>
          <View style={styles.popUpBackGround}>
            <View style={styles.workoutPopUp}>
              <View style={styles.returnIcon}>
                <TouchableOpacity onPress={onPressReturn}>
                  <Icon5 name="cross" size={50} />
                </TouchableOpacity>
              </View>
              <View style={styles.workoutPopUpTop}>
                <Text style={styles.workoutTitle}>Strength training</Text>
                <View style={styles.workoutDescription}>
                  <Text style={styles.descriptionText}>A Push, Pull, Legs Split is a common workout routine used to target different muscle groups on different days.</Text>
                </View>
              </View>
              <View style={styles.workoutPopUpBottom}>
                <Text style={styles.titleText}>Choose the days to workout:</Text>
                <View style={styles.daySelector}>

                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(0) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(0)}>
                    <Text style={styles.buttonText}>Mon</Text>
                  </TouchableOpacity >
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(1) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(1)}>
                    <Text style={styles.buttonText}>Tue</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(2) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(2)}>
                    <Text style={styles.buttonText}>Wed</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(3) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(3)}>
                    <Text style={styles.buttonText}>Thu</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(4) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(4)}>
                    <Text style={styles.buttonText}>Fri</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(5) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(5)}>
                    <Text style={styles.buttonText}>Sat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.dayButtonNormalStyle, dayButtonToggled.includes(6) && styles.dayButtonToggledStyle]}
                    onPress={() => onPressDay(6)}>
                    <Text style={styles.buttonText}>Sun</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.workoutChart}>
                  <ScrollView showsVerticalScrollIndicator={false} >
                    <Text style={styles.titleText}>Push Day:</Text>
                    <Text style={styles.contentText}>
                      Barbell Bench Press: 3 sets of 8-10 {'\n'}
                      Dumbbell Shoulder Press: 3 sets of 8-10 {'\n'}
                      Cable Flyes: 3 sets of 10-12 {'\n'}
                      Tricep Pushdowns: 3 sets of 12-15 {'\n'}
                      Overhead Tricep Extensions: 3 sets of 12-15 {'\n'}
                      Lateral Raises: 3 sets of 12-15
                    </Text>

                    <Text style={styles.titleText}>Pull Day:</Text>
                    <Text style={styles.contentText}>
                      Deadlifts: 3 sets of 8-10 {'\n'}
                      Bent Over Rows: 3 sets of 8-10 {'\n'}
                      Lat Pulldowns: 3 sets of 10-12 {'\n'}
                      Bicep Curls: 3 sets of 12-15 {'\n'}
                      Hammer Curls: 3 sets of 12-15 {'\n'}
                      Face Pulls: 3 sets of 12-15
                    </Text>

                    <Text style={styles.titleText}>Leg Day:</Text>
                    <Text style={styles.contentText}>
                      Squats: 3 sets of 8-10 {'\n'}
                      Leg Press: 3 sets of 10-12 {'\n'}
                      Romanian Deadlifts: 3 sets of 8-10 {'\n'}
                      Leg Curls: 3 sets of 12-15 {'\n'}
                      Calf Raises: 3 sets of 12-15 {'\n'}
                      Lunges: 3 sets of 10-12
                    </Text>

                  </ScrollView>
                </View>

                <TouchableOpacity style={styles.workoutAddButton} onPress={onPressAddWorkout}>
                  <Text style={styles.titleText}>Add Workout</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>


        <Text style={styles.screenTitle}>Workouts</Text>
        <View style={styles.topContent}>


          <TouchableOpacity style={styles.workoutSelectorButton} onPress={onPressAddworkoutsLibrary}>
            <Icon2 name="plus" size={50} />
            <Text style={[styles.contentText, { fontSize: 10 }]}>Add workouts </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.workoutSelectorButton, { backgroundColor: '#e6e6e7' }]} onPress={onPressMyWorkoutLibrary}>
            <Icon3 name="collections-bookmark" size={50} />
            <Text style={[styles.contentText, { fontSize: 10 }]}>My workouts </Text>
          </TouchableOpacity>

        </View>

        <View style={styles.bottomContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.workoutBox}>
              <Icon4 name="weight-lifter" size={80} />
              <View style={styles.workoutBoxTextView}>
                <Text style={styles.titleText}> Strength Training </Text>
                <Text style={[styles.descriptionText, { color: '#656566' }]}> Push, pull, legs </Text>
              </View>
              <TouchableOpacity onPress={onPressWorkoutBox}>
                <Icon name="information-circle-outline" size={60} />
              </TouchableOpacity>
            </View>

            <View>
              {workouts.map((workout, id) =>(
                <Workouts key={id} title={workout.title} shortDesc={workout.shortDesc} icon={workout.icon}></Workouts>
                ))}
            </View>


          </ScrollView>
        </View>
      </View>


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
  workoutBox: {
    height: 140,
    width: 350,
    backgroundColor: "#bdbdc7",
    borderRadius: 35,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bdbdc7',
    elevation: 10,
    shadowColor: '#505050',
  },
  popUpBackGround: {
    flex: 1,
    backgroundColor: "#000000aa",
    alignItems: 'center',
    justifyContent: 'center'
  },
  workoutPopUp: {
    flex: 0.7,
    width: "90%",
    height: "80%",
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 60,
    backgroundColor: '#e7e7e5',
    borderWidth: 2,
    borderColor: '#f7f7ea',
    padding: 5,
    elevation: 10,
    shadowColor: '#505050'
  },
  workoutAddButton: {
    borderRadius: 15,
    width: 130,
    borderWidth: 1,
    borderColor: '#d1d1d4',
    height: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#bdbdc7',
  },
  workoutDescription: {
    justifyContent: 'flex-start',
    padding: 15,
    width: '80%',
    borderRadius: 20,
    shadowColor: '#505050'
  },
  workoutBoxTextView: {
    justifyContent: 'flex-start',
    height: "60%"
  },
  workoutChart: {
    overflow: 'hidden',
    height: "60%",
    padding: 7,
    borderWidth: 1,
    borderColor: '#fdfbfb',
    shadowColor: '#505050',
    backgroundColor: '#fdfbfb',
    borderRadius: 25,

  },
  workoutPopUpBottom: {
    flex: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  workoutPopUpTop: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  returnIcon: {
    position: 'absolute',
    top: 15,
    right: 10
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
  daySelector: {
    flexDirection: 'row',
    padding: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#e2e2e4',
    backgroundColor: '#c5c5ce',
    elevation: 10,
    shadowColor: '#505050'
  },
  dayButtonNormalStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: '#505050',
    backgroundColor: '#fdfbfb',
    elevation: 1.2,
    shadowColor: '#505050'
  },
  dayButtonToggledStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'black',
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
  workoutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: 'black',
    textAlign: 'auto',
    fontWeight: 'bold',
    fontSize: 15
  },

});

export default WorkoutsScreen;