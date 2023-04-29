import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Wrapper } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

const WorkoutCard = ({title, time, icon}) => {
    return (
        <View style={styles.WorkoutBox}>
        <Icon2 name={icon} size={100} style={styles.WorkoutBoxIcon}/>
        <View style={styles.WorkoutBoxText}>
          <Text style={styles.titleWorkoutBox}>{title}</Text>
          <Text marginTop={5}>{time}</Text>
      </View>
        <TouchableOpacity>
            <Icon2 name="edit" size={50} style={styles.WorkoutBoxEdit}/>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    WorkoutBox: {
        width: "90%",
        height: 140,
        backgroundColor: "grey",
        borderRadius: 20,
        marginBottom: 30,
        marginLeft: 14,
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      WorkoutBoxIcon: {
        marginTop: 20,
      },
    WorkoutBoxText:{
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 15
      },
      WorkoutBoxEdit: {
        marginTop: 50,
      },
      titleWorkoutBox: {
        fontWeight: 'bold',
        fontSize: 19,
      },

});
export default WorkoutCard;