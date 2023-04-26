import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const MealsScreen = ({navigation}) => {
  return (
  <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.TopContent}>
           
            <View style={styles.Topbuttons}>
              <View style={styles.leftButton}>
                <View style={styles.boxText}>
                <Text style={styles.calorieTop}>2 500 kcal</Text>
                <Text style={styles.calorieGoalTop}>Daily calorie Goal</Text>
                </View>
                <TouchableOpacity style={styles.boxIconEdit}>
                <Icon2 name="edit" size={40} style={styles.WorkoutBoxEdit}></Icon2>
                </TouchableOpacity>
              </View>
              <View style={styles.rightButton}>
                <View style={styles.boxText}>
                <Text style={styles.logMealText}>Log Meal</Text>
                </View>
                <TouchableOpacity style={styles.boxIconPlus}>
                <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit}></Icon2>
                </TouchableOpacity>
              </View>
            </View>
      </View>
        <View style={styles.MidContent}>
            <Text>Meals</Text>
            
        </View>
        <View style={styles.BottomContent}>
            <View style={styles.bottomContentTextleft}>
            <Text style={styles.dataText}>26 March</Text>
            <Text style={styles.calorie}>2 220 kcal</Text>
            <Text style={styles.calorieText}>Calorie intake</Text>
            </View>
            <View style={styles.bottomContentTextright}>
            <Text style={styles.calorieDis}>-180 kcal</Text>
            <Text style={styles.calorieText}>calorie discrepancy</Text>
            </View>
            
            
        </View>
      </View>
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
                <Icon name="home-outline" size={30} color="black"  />
                <Text style={styles.navButtonText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Workouts")}>
                <Icon name="fitness-outline" size={30} color="black" />
                <Text style={styles.navButtonText}>Workouts</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Meals")}>
                <Icon name="fast-food" size={40} color="black" />
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
  content: {
    flex: 1,
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
  TopContent:{
    marginTop: 30,
    flex: 1,
    marginBottom: 5,
    width: "100%",
    alignItems: 'center',
  },
  header:{
    flex: 1,
    backgroundColor: "blue",
  },
  Topbuttons:{
    width: "95%",
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  leftButton:{
    flex: 1.5,
    marginTop: 50,
    height: '50%',
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 20,
    flexDirection: 'row',
  },
  rightButton:{
    flex: 1,
    borderWidth: 2,
    height: '50%',
    borderRadius: 20,
    marginTop: 50,
    flexDirection: 'row',
  },
  calorieTop:{
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  calorieGoalTop:{
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 15,
    marginLeft: 20,
  },
  boxIconEdit:{
    marginTop: 25,
    marginLeft: 20,
  },
  boxIconPlus:{
    marginTop: 25,
    marginLeft: 10,
  },
  logMealText:{
    marginTop: 32,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
  },
  MidContent:{
    flex: 1.5,
    backgroundColor: "grey",
    borderRadius: 20,
    width: '95%',
    marginBottom: 10,
    
  },
  BottomContent:{
    flex: 0.7,
    backgroundColor: "grey",
    borderRadius: 20,
    width: '95%',
    marginBottom: 10,
    borderWidth: 2,
    flexDirection: 'row',
    
  },
  bottomContentTextleft:{
    flex: 1,
    alignItems: 'center',
  },
  bottomContentTextright:{
    flex: 1,
    
    alignItems: 'center',
  },
  dataText:{
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  calorie:{
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 10,
  },
  calorieDis:{
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 53,
  },
  calorieText:{
    fontSize: 15,
    marginTop: 10,
  }
  
  
});

export default MealsScreen;
