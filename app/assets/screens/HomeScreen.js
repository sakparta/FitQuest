import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Wrapper } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';




const HomeScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.hamburgerButton}>
        <Icon name="menu-outline" size={50} color="black"/>
      </TouchableOpacity>
      <View style={styles.TopContent}>
      <Icon2 name="user-circle-o" size={100} color="blue" marginBottom={20} />
      </View>
      <View style={styles.BottomContent}>
      <Text style={styles.title}>What are we doing today?</Text>
      <ScrollView style={styles.ScrollView}>
        
        <TouchableOpacity style={styles.WorkoutBox}>
          <Icon2 name="user-circle-o" size={100} style={styles.WorkoutBoxIcon}/>
          <View style={styles.WorkoutBoxText}>
            <Text fontWeight='bold'>5km Running</Text>
            <Text>5km Running</Text>
          </View>
          <Icon2 name="user-circle-o" size={70} style={styles.WorkoutBoxEdit}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.WorkoutBox}>

        </TouchableOpacity>
        <TouchableOpacity style={styles.WorkoutBox}>

        </TouchableOpacity>
      </ScrollView>
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
    flex: 1,
    justifyContent: 'center',
    
    alignItems: 'center',
    
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
    marginLeft: 14,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left', // align text to the left
    marginLeft: "-21%",
    marginBottom: 10,
    
  },
  ScrollView:{
    width: '100%',
    marginLeft: 10,
  },
  hamburgerButton: {
    position: 'absolute',
    //alignItems: 'center',
    marginLeft: 20,
    marginTop: 70,
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
    marginTop: 35,
  },
});

export default HomeScreen;
