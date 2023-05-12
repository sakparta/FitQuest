import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { LineChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';
import { db } from '../firebase/firebase';
/*
todo:
  -Barchartista klikattava
  -Modalille rullavalikko
  -navbaarista klikattava kun modal on auki
*/

const screenWidth = Dimensions.get("window").width;

const handleCalorieGoal = () => {

}



//barchartin data
const data = {
  labels: ['25 Mar', '26 Mar', '27 Mar'],
  datasets: [
    {
      data: [3000, 2200, 2500],
    },
  ],
};
//barchartin style
const chartConfig = {
  backgroundColor: "#8cbbf1",
  backgroundGradientFrom: "#bdbdc7",
  backgroundGradientTo: "#bdbdc7",
  decimalPlaces: 0, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 40
  },
  propsForDots: {
    r: "6",
    strokeWidth: "2",
    stroke: "#8cbbf1"
  }
};


const MealsScreen = ({ navigation }) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalBox}>
            <View style={styles.modalTop}>
              <Text style={styles.modalTitle}>Set Calorie Goal</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon2 name="close" size={40} style={styles.modalCloseIcon} color={'#505050'} ></Icon2>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBot}>
              <View style={styles.scrollwheelBox}>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="2550" value="2550" />
                  <Picker.Item label="2550" value="2550" />
                  <Picker.Item label="2450" value="2450" />
                  <Picker.Item label="2400" value="2400" />
                  <Picker.Item label="2350" value="2350" />
                  <Picker.Item label="2300" value="2300" />
                  <Picker.Item label="2250" value="2250" />
                  <Picker.Item label="2200" value="2200" />
                  <Picker.Item label="2550" value="2550" />
                  <Picker.Item label="2550" value="2550" />
                  <Picker.Item label="2450" value="2450" />
                  <Picker.Item label="2400" value="2400" />
                  <Picker.Item label="2350" value="2350" />
                  <Picker.Item label="2300" value="2300" />
                  <Picker.Item label="2250" value="2250" />
                  <Picker.Item label="2200" value="2200" />
                </Picker>
              </View>
              <View>
              <TouchableOpacity style={styles.modalAccept} onPress={() => setIsModalVisible(false)}>
                <Text style={styles.modalAcceptButtonText}>Confirm</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={styles.content}>
        <View style={styles.TopContent}>
          <View>
            <Text style={styles.screenTitle}>Meals</Text>
          </View>
          <View style={styles.Topbuttons}>
            <View style={styles.leftButton}>
              <View style={styles.boxText}>
                <View style={styles.unitBox}>
                  <Text style={styles.calorieUnitText}>2 500 kcal</Text>
                </View>
                <Text style={styles.calorieGoalTop}>Daily calorie Goal</Text>
              </View>
              <TouchableOpacity style={styles.boxIconEdit} onPress={() => setIsModalVisible(true)}>
                <Icon2 name="edit" size={40} style={styles.WorkoutBoxEdit} color={'#505050'} ></Icon2>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.rightButton}>
              <Text style={styles.logMealText}>Log Meal</Text>
              <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit} color={'#505050'}></Icon2>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Meal Timeline</Text>
        </View>
        <View style={styles.MidContent}>
          <View style={styles.chart}>
            <LineChart
              data={data}
              chartConfig={chartConfig}
              bezier
              height={250}
              width={350}
            />
          </View>
        </View>
        <View style={styles.BottomContent}>
          <View style={styles.bottomContentTextTop}>
            <Text style={styles.dataText}>26 March</Text>
          </View>
          <View style={styles.bottomContentTextBot}>
            <View style={styles.dietInfo}>
              <View style={styles.unitBox}>
                <Text style={styles.calorieUnitText}>2 220 kcal</Text>
              </View>
              <Text style={styles.calorieText}>Calorie intake</Text>
            </View>
            <View style={styles.dietInfo}>
              <View style={styles.unitBox}>
                <Text style={styles.calorieUnitText}>-180 kcal</Text>
              </View>
              <Text style={styles.calorieText}>Calorie Discrepancy</Text>
            </View>
          </View>


        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Home")}>
          <Icon name="home-outline" size={30} color="#505050" />
          <Text style={styles.navButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Workouts")}>
          <Icon name="fitness-outline" size={30} color="#505050" />
          <Text style={styles.navButtonText}>Workouts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate("Meals")}>
          <Icon name="fast-food" size={40} color="#8cbbf1" />
          <Text style={styles.navButtonText}>Meals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ececea',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  TopContent: {
    flex: 3,
    width: "100%",
    alignItems: 'center',
  },
  MidContent: {
    flex: 3,
    backgroundColor: "#bdbdc7",
    borderRadius: 20,
    width: '95%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#d7d7d8',
  },
  BottomContent: {
    flex: 2,
    backgroundColor: "#bdbdc7",
    alignItems: 'center',
    borderRadius: 20,
    width: '95%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#d7d7d8',
    elevation: 3
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
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 6,
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
  dietInfo: {
    flex: 1,
    alignItems: 'center',
  },
  unitBox: {
    backgroundColor: '#d7d7d8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    width: 120,
    height: 35,
    borderColor: '#cbc9d6',
    borderWidth: 2,
  },
  Topbuttons: {
    width: "95%",
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftButton: {
    flex: 1.5,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60%',
    marginRight: 20,
    borderWidth: 2,
    borderRadius: 20,
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#bdbdc7',
    borderColor: '#bcbcc9',
    elevation: 7,
  },
  rightButton: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60%',
    flexDirection: 'row',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#bdbdc7',
    borderColor: '#bcbcc9',
    elevation: 7
  },
  calorieGoalTop: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  logMealText: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 18,
  },
  chart: {
    marginTop: 15,
    marginLeft: 5
  },
  bottomContentTextTop: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#cbc9d6',
    width: '90%',
  },
  bottomContentTextBot: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    marginTop: 40
  },
  dataText: {
    fontSize: 25,
    marginTop: 10,
    fontWeight: 'bold',
  },
  calorieText: {
    fontWeight: '800',
    fontSize: 16,
  },
  calorieUnitText: {
    fontWeight: '600',
    fontSize: 18,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBox: {
    flex: 0.6,
    width: "90%",
    borderRadius: 60,
    backgroundColor: '#e7e7e5',
    borderWidth: 2,
    borderColor: '#ebebea',
    padding: 5,
    elevation: 10,
    shadowColor: '#505050'
  },
  modalTop: {
    flexDirection: 'row',
    flex: 1,

  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 40,
  },
  modalCloseIcon: {
    marginTop: 13,
    marginLeft: 14,
  },
  modalBot: {
    flex: 6,

    alignItems: 'center',
  },
  scrollwheelBox: {
    width: '60%',
    height: '60%',
    borderRadius: 20,
    marginTop: 40,
  },
  modalAccept: {
    margin: 30,
    height: 60,
    width: 110,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#bdbdc7',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bcbcc9',
    elevation: 7
  },
  modalAcceptButtonText: {
    fontWeight: '800',
    fontSize: 18,
  },
});

export default MealsScreen;
