import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, TextInput } from 'react-native';
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
  const [calorieGoal, setcalorieGoal] = useState('No goal');
  const [logMealModalVisible, setLogMealModalVisible] = useState(false);

  const [dailyCalorie, setDailyCalorie] = useState('0');
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [calorieDiscrepancy, setCalorieDiscrepancy] = useState(0)

  const confirmMeal = () => {
    setLogMealModalVisible(false)
    temp = calorieGoal - dailyCalorie
    setCalorieDiscrepancy(temp)
  }
  const Data = {
    labels: ['25 Mar', '26 Mar', '27 Mar'],
    datasets: [
      {
        data: [3000, 2200, 2500],
      },
    ],
  };


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
            <View style={[styles.modalTop, {flex: 2}]}>
              <Text style={[styles.modalTitle, {marginLeft: 30}]}>Set Calorie Goal</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon2 name="close" size={40} style={styles.modalCloseIcon} color={'#505050'} ></Icon2>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBot}>
              <View style={styles.scrollwheelBox}>
                <Picker
                  selectedValue={calorieGoal}
                  onValueChange={(itemValue, itemIndex) =>
                    setcalorieGoal(itemValue)
                  }>
                  <Picker.Item label="2750" value="2750" />
                  <Picker.Item label="2700" value="2700" />
                  <Picker.Item label="2650" value="2650" />
                  <Picker.Item label="2600" value="2600" />
                  <Picker.Item label="2550" value="2550" />
                  <Picker.Item label="2450" value="2450" />
                  <Picker.Item label="2400" value="2400" />
                  <Picker.Item label="2350" value="2350" />
                  <Picker.Item label="2300" value="2300" />
                  <Picker.Item label="2250" value="2250" />
                  <Picker.Item label="2200" value="2200" />
                  <Picker.Item label="2150" value="2150" />
                  <Picker.Item label="2100" value="2100" />
                  <Picker.Item label="2050" value="2050" />
                  <Picker.Item label="2000" value="2000" />
                </Picker>
              </View>
              <View>
                <TouchableOpacity style={styles.calorieGoalAccept} onPress={() => setIsModalVisible(false)}>
                <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit} color={'#505050'}></Icon2>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>


      <Modal
        animationType="slide"
        transparent={true}
        visible={logMealModalVisible}
      >
        <View style={styles.modalView}>
          <View style={styles.modalLogMealBox}>
            <View style={styles.modalTop}>
              <View style={styles.modalTitleWrapper}>
                <Text style={styles.modalTitle}>Log Meal</Text>
                <TouchableOpacity onPress={() => setLogMealModalVisible(false)}>
                  <Icon2 name="close" size={40} color={'#505050'} style={styles.modalCloseIcon} ></Icon2>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.modalBot}>
              <View style={styles.inputContainer}>
                <Text style={styles.textBoxText}>Calorie amount: (kcal):</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  value={dailyCalorie}
                  onChangeText={setDailyCalorie}
                  secureTextEntry={false}
                  keyboardType='numeric'
                >
                </TextInput>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.textBoxText}>Month</Text>
                <Picker
                  style={styles.input}
                  selectedValue={month}
                  onValueChange={(itemValue, itemIndex) => {
                    setMonth(itemValue)
                  }
                  }>
                  <Picker.Item label="January" value="January" />
                  <Picker.Item label="February" value="February" />
                  <Picker.Item label="March" value="March" />
                  <Picker.Item label="April" value="April" />
                  <Picker.Item label="May" value="May" />
                  <Picker.Item label="June" value="June" />
                  <Picker.Item label="July" value="July" />
                  <Picker.Item label="August" value="August" />
                  <Picker.Item label="September" value="September" />
                  <Picker.Item label="October" value="October" />
                  <Picker.Item label="November" value="November" />
                  <Picker.Item label="December" value="December" />
                </Picker>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.textBoxText}>day</Text>
                <Picker
                  style={styles.input}
                  selectedValue={day}
                  onValueChange={(itemValue, itemIndex) =>
                    setDay(itemValue)
                  }>
                  <Picker.Item label="1" value="1" />
                  <Picker.Item label="2" value="2" />
                  <Picker.Item label="3" value="3" />
                  <Picker.Item label="4" value="4" />
                  <Picker.Item label="5" value="5" />
                  <Picker.Item label="6" value="6" />
                  <Picker.Item label="7" value="7" />
                  <Picker.Item label="8" value="8" />
                  <Picker.Item label="9" value="9" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                  <Picker.Item label="13" value="13" />
                  <Picker.Item label="14" value="14" />
                  <Picker.Item label="15" value="15" />
                  <Picker.Item label="16" value="16" />
                  <Picker.Item label="17" value="17" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                  <Picker.Item label="23" value="23" />
                  <Picker.Item label="24" value="24" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="26" value="26" />
                  <Picker.Item label="27" value="27" />
                  <Picker.Item label="28" value="28" />
                  <Picker.Item label="29" value="29" />
                  <Picker.Item label="30" value="30" />
                  <Picker.Item label="31" value="31" />

                </Picker>
              </View>
              <TouchableOpacity style={styles.modalAccept} onPress={() => confirmMeal()}>
              <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit} color={'#505050'}></Icon2>
              </TouchableOpacity>
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
                  <Text style={styles.calorieUnitText}>{calorieGoal}</Text>
                </View>
                <Text style={styles.calorieGoalTop}>Daily calorie Goal</Text>
              </View>
              <TouchableOpacity style={styles.boxIconEdit} onPress={() => setIsModalVisible(true)}>
                <Icon2 name="edit" size={40} style={styles.WorkoutBoxEdit} color={'#505050'} ></Icon2>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.rightButton} onPress={() => setLogMealModalVisible(true)}>
              <Text style={styles.logMealText}>Log Meal</Text>
              <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit} color={'#505050'}></Icon2>
            </TouchableOpacity>
          </View>
          <Text style={styles.titleText}>Meal Timeline</Text>
        </View>
        <View style={styles.MidContent}>
          <View style={styles.chart}>
            <LineChart
              data={Data}
              chartConfig={chartConfig}
              bezier
              height={230}
              width={350}
            />
          </View>
        </View>
        <View style={styles.BottomContent}>
          <View style={styles.bottomContentTextTop}>
            <Text style={styles.dataText}>{day} {month}</Text>
          </View>
          <View style={styles.bottomContentTextBot}>
            <View style={styles.dietInfo}>
              <View style={styles.unitBox}>
                <Text style={styles.calorieUnitText}>{dailyCalorie} kcal</Text>
              </View>
              <Text style={styles.calorieText}>Calorie intake</Text>
            </View>
            <View style={styles.dietInfo}>
              <View style={styles.unitBox}>
                <Text style={styles.calorieUnitText}>{calorieDiscrepancy} kcal</Text>
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
  modalTitleWrapper: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
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
  calorieGoalAccept: {
    position: 'absolute',
    top: 5,
    right: -160,
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#d1d1d4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8cbbf1',
    elevation: 5,
    shadowColor: '#8cbbf1'
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
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    elevation: 4
  },
  modalBox: {
    flex: 0.4,
    width: "90%",
    borderRadius: 60,
    padding: 5,
    backgroundColor: '#e7e7e5',
    borderWidth: 2,
    borderColor: '#ebebea',
    elevation: 10,
    shadowColor: '#505050',
  },
  modalTop: {
    flexDirection: 'row',
    flex: 1.5,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 15,
    right: -80
  },
  modalBot: {
    flex: 7,
    alignItems: 'center',
  },
  scrollwheelBox: {
    width: '60%',
    height: '30%',
    borderRadius: 20,
    marginTop: 30,
  },
  modalAccept: {
    position: 'absolute',
    top: 230,
    right: 10,
    borderRadius: 50,
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#d1d1d4',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8cbbf1',
    elevation: 5,
    shadowColor: '#8cbbf1'
  },
  modalAcceptButtonText: {
    fontWeight: '800',
    fontSize: 18,
  },
  input: {
    height: 50,
    backgroundColor: 'white',
    fontSize: 16,
    marginRight: 20,
    flex: 0.7,
    borderWidth: 2,
    paddingLeft: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textBoxText: {
    marginLeft: 8,
    fontSize: 17,
    flex: 1,
    fontWeight: '800'
  },
  pickerWrapper: {
    backgroundColor: 'blue',
    marginTop: 10,
    width: "60%",
  },
  modalLogMealBox: {
    flex: 0.7,
    width: "90%",
    borderRadius: 60,
    backgroundColor: '#e7e7e5',
    borderWidth: 2,
    borderColor: '#ebebea',
    padding: 5,
    elevation: 10,
    shadowColor: '#505050'
  },
});

export default MealsScreen;