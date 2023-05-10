import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import TrashIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Entypo';

const Workouts = ({title, desc, shortDesc, icon, content, id}) =>  {

  // workout box logic
  const [workoutBoxVisible, setWorkoutBoxVisible] = useState(false);
  const onPressWorkoutBox = () => setWorkoutBoxVisible(!workoutBoxVisible);


  const onPressReturn = () => {
    console.log("Return pressed.");
    setWorkoutBoxVisible(!workoutBoxVisible);
  }

  const onPressRemoveWorkout = () => {
    console.log("Remove workout pressed.");
    // implement removing from users workouts
    setWorkoutBoxVisible(!workoutBoxVisible);
  };

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
                  <Icon5 name="cross" size={50} />
                </TouchableOpacity>
              </View>
              <View style={styles.workoutPopUpTop}>
                <Text style={styles.workoutTitle}>{title}</Text>
                <View style={styles.workoutDescription}>
                  <Text style={styles.descriptionText}>{desc}</Text>
                </View>
              </View>


              <View style={styles.workoutPopUpBottom}>
              <Text style={[styles.titleText, { paddingBottom: 8 },{ fontSize: 24}]}>Your Workout:</Text>
                <View style={styles.workoutChart}>
                    <ScrollView showsVerticalScrollIndicator={false} >
                        {content.map((item) => (
                        <View key={item.id}>
                            <Text style={styles.titleText}>{item.title}</Text>
                            <Text style={styles.contentText}>{item.content}</Text>
                        </View>
                        ))}
                    </ScrollView>
                </View>
                <TouchableOpacity style={styles.workoutRemoveButton} onPress={onPressRemoveWorkout}>
                    <TrashIcon name= 'trash-2' size={50} />
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>

        <View style={styles.workoutBox}>
            <View style={styles.iconBox}>
                <Icon name={icon} size={80} />    
            </View>
          <View style={styles.workoutBoxTextView}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={[styles.descriptionText, { color: '#656566' }]}>{shortDesc}</Text>
          </View>
          <View style={styles.workoutInfoIcon}>
            <TouchableOpacity onPress={onPressWorkoutBox}>
                <Icon name="information-circle-outline" size={60} />
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
  workoutChart: {
    height: "87%",
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
    justifyContent: 'flex-start',
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
  workoutRemoveButton: {
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
    backgroundColor: '#bdbdc7',
    elevation: 20,
    shadowColor: '#68686b'
  },
  workoutDescription: {
    justifyContent: 'flex-start',
    padding: 15,
    width: '80%',
    borderRadius: 20,
    shadowColor: '#505050'
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

