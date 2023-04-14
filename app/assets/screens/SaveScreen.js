import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';




const HomeScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
    
      <View style={styles.TopContent}>
      <Icon2 name="user-circle-o" size={100} color="blue" marginBottom={20} />
      </View>
      <View style={styles.BottomContent}>
        <Text style={styles.title}>What are we doing today?</Text>
        <TouchableOpacity style={styles.WorkoutBox}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.WorkoutBox}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.WorkoutBox}>

        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Icon name="home" size={40} color="black"  />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Workouts")}>
          <Icon name="fitness-outline" size={30} color="black" />
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
  TopContent: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-around', 
    //backgroundColor: "grey",
  },
  BottomContent: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  navBar: {
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
  WorkoutBox: {
    width: "90%",
    height: 140,
    backgroundColor: "grey",
    borderRadius: 20,
    marginBottom: 30,
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', // align text to the left
    marginLeft: "-21%",
    marginBottom: 10,
    
  },
  
});

export default HomeScreen;
