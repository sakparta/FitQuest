import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Entypo';

class Workouts extends Component {
  
  render() {
    const { title, desc, shortDesc, icon, id } = this.props

    return (
      <View style={styles.workoutBox}>
        <Icon4 name={icon} size={80} />
        <View style={styles.workoutBoxTextView}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={[styles.descriptionText, { color: '#656566' }]}>{shortDesc}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="information-circle-outline" size={60} />
        </TouchableOpacity>
      </View>
    )

  }
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
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 2,
    paddingTop: 8
  },
  workoutBoxTextView: {
    justifyContent: 'flex-start',
    height: "60%"
  },
})
export default Workouts;

