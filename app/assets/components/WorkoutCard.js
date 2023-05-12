import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';

const WorkoutCard = ({ title, time, icon }) => {
  return (
    <View style={styles.workoutBox}>
      <View style={styles.iconBox}>
        <Icon4 name={icon} color={'#505050'} size={70} />
      </View>
      <View style={styles.workoutBoxTextView}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.descriptionText}>{time}</Text>
      </View>
      <View style={styles.workoutEditIcon}>
        <TouchableOpacity>
          <Icon2 name="edit" color={'#505050'} size={50}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
  workoutEditIcon: {
    flex: 2,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  workoutBoxTextView: {
    flex: 5,
    justifyContent: 'flex-start',
    height: 70
  },
  WorkoutBoxEdit: {
    flex: 2,
    borderRadius: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 8
  },
  iconBox: {
    flex: 3
  },
  descriptionText: {
    color: '#656566',
  },
});
export default WorkoutCard;