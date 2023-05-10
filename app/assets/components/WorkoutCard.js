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
      WorkoutBoxIcon: {
        marginTop: 20,
        
      },
    WorkoutBoxText:{
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 15,
        
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