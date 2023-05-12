import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import WorkoutCard from "../components/WorkoutCard";
import ProgressCircle from 'react-native-progress-circle';


const EditWorkoutBox = () => {

}


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.menuBox}>
        </View>
        <View style={styles.TopContent}>
          <TouchableOpacity style={styles.hamburgerButton}>
            <Icon name="menu-outline" size={50} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Progress")}>
          <View style={[{paddingTop: 55}]}>
            <ProgressCircle
              percent={50}
              radius={80}
              borderWidth={35}
              color="#73d673"
              shadowColor="#d6d4d4"
              bgColor="#ececea"
            >
              <Text style={{ fontSize: 25 }}>{'50%'}</Text>
            </ProgressCircle>
          </View>
          </TouchableOpacity>
          <Text style={styles.titleText}>What are we doing today?</Text>
        </View>
        <View style={styles.BottomContent}>
          <ScrollView style={styles.ScrollView} showsVerticalScrollIndicator={false}>
            <WorkoutCard title="5km Run" time="30 Minutes" icon="run-fast" />
            <WorkoutCard title="Leg Day" time="60 Minutes" icon="weight-lifter" />
            <WorkoutCard title="Stretching" time="15 Minutes" icon="yoga" />
          </ScrollView>
        </View>

      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={40} color="#8cbbf1" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Workouts")}>
          <Icon name="fitness-outline" size={30} color="#505050" />
          <Text style={styles.navButtonText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Meals")}>
          <Icon name="fast-food-outline" size={30} color="#505050" />
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
    alignItems: 'center'
  },
  TopContent: {
    width: '90%',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#8cbbf1'
  },
  BottomContent: {
    flex: 5,
    alignItems: 'center',
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  ScrollView: {
    width: '100%',
    marginLeft: 10,
  },
  hamburgerButton: {
    position: 'absolute',
    left: "0%",
    top: "15%",
  },
  WorkoutBoxIcon: {
    marginTop: 20,
  },
  WorkoutBoxText: {
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
  /*menuBox:{
    position: 'absolute',
    backgroundColor: 'blue',
    height: '100%',
    width: '70%',
    borderRadius: 20,
  },*/
});

export default HomeScreen;
