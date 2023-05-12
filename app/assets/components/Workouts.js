import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Entypo';

let selectedDays = [];

const Workouts = ({ title, desc, shortDesc, icon, id, content }) => {


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

  const onPressDay = function (index) {
    handlePressedDays(index);
    toggleDayButton(index);
  }

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

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={workoutBoxVisible}
        onRequestClose={() => {
          setWorkoutBoxVisible(!workoutBoxVisible);
        }}>
        <View style={styles.popUpBackGround}>
          <View style={styles.workoutPopUp}>
            <View style={styles.returnIcon}>
              <TouchableOpacity onPress={onPressReturn}>
                <Icon5 name="cross" color={'#505050'} size={50} />
              </TouchableOpacity>
            </View>
            <View style={styles.workoutPopUpTop}>
              <Text style={styles.workoutTitle}>{title}</Text>
              <View style={styles.workoutDescription}>
                <Text style={styles.descriptionText}>{desc}</Text>
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
                  {content.map((item) => (
                    //  rendering workoutBoxes
                    <View key={item.id}>
                      <Text style={styles.titleText}>{item.title}</Text>
                      <Text style={styles.contentText}>{item.content}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>

              <TouchableOpacity style={styles.workoutAddButton} onPress={onPressAddWorkout}>
                <Icon2 name="plus" color={'#505050'} size={60} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>

      <View style={styles.workoutBox}>
        <View style={styles.iconBox}>
          <Icon4 name={icon} color={'#505050'} size={70} />
        </View>
        <View style={styles.workoutBoxTextView}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{shortDesc}</Text>
        </View>
        <View style={styles.workoutInfoIcon}>
          <TouchableOpacity onPress={onPressWorkoutBox}>
            <Icon name="information-circle-outline" color={'#505050'} size={60} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
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
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8
  },
  iconBox: {
    flex: 3
  },
  workoutBoxTextView: {
    flex: 5,
    justifyContent: 'flex-start',
    height: 70
  },
  workoutInfoIcon: {
    flex: 2,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
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
    borderColor: '#b4b1b1',
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
    borderWidth: 1.5,
    borderColor: '#accbf0',
    backgroundColor: '#8cbbf1',
  },
  workoutChart: {
    height: '70%',
    width: 320,
    overflow: 'hidden',
    padding: 15,
    borderWidth: 1,
    borderColor: '#fdfbfb',
    shadowColor: '#505050',
    backgroundColor: '#fdfbfb',
    borderRadius: 50,
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
    position: 'absolute',
    top: 300,
    right: 10,
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#d1d1d4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8cbbf1',
    elevation: 5,
    shadowColor: '#8cbbf1'
  },
  workoutDescription: {
    justifyContent: 'flex-start',
    padding: 15,
    width: '80%',
    borderRadius: 20,
    shadowColor: '#505050'
  },
  descriptionText: {
    color: '#656566',
  },
  buttonText: {
    fontWeight: 'bold',
    textShadowColor: 'black',
    color: 'white',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 4
  },
  workoutTitle: {
    fontSize: 26,
    fontWeight: 'bold',
  },
})
export default Workouts;

