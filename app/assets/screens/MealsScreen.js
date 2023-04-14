import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MealsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.content}>

      <View style={styles.TopContent}>
            <Text>Meals</Text>
            
        </View>
        <View style={styles.MidContent}>
            <Text>Meals</Text>
            
        </View>
        <View style={styles.BottomContent}>
            <Text>Meals</Text>
            
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
  
});

export default MealsScreen;
