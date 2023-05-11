import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, TextInput, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { BarChart } from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';


const screenWidth = Dimensions.get("window").width;







//barchartin style
const chartConfig = {
  backgroundGradientFrom: '#D3D3D3',
  backgroundGradientTo: '#D3D3D3',
  fillShadowGradientOpacity: 1,
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 6) => `rgba(0, 0, 255, ${opacity})`,
  strokeWidth: 0, // optional, default 3
  barPercentage: 1.5,
  useShadowColorFromDataset: false, // optional
  barRadius: 5,
  showBarTops: false, 
};


const MealsScreen = ({navigation}) => {
  const [modalVisible, setIsModalVisible] = useState(false);
  const [calorieGoal, setcalorieGoal] = useState('No goal');
  const [logMealModalVisible, setLogMealModalVisible] = useState(false);

  const [dailyCalorie, setDailyCalorie] = useState('0');
  const [month, setMonth] = useState('')
  const [day, setDay] = useState('')

  const [calorieDiscrepancy, setCalorieDiscrepancy] = useState(0)

  

  const confirmMeal = () =>{
    setLogMealModalVisible(false)
    temp = calorieGoal - dailyCalorie
    setCalorieDiscrepancy(temp)
  }
  const barData = {
    labels: [day + " " + month, ],
    datasets: [
      {
        data: [dailyCalorie],
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
          <View style={styles.modalTop}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <Icon2 name="close" size={40} style={styles.modalCloseIcon} ></Icon2>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Set calorie goal</Text>
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
          <TouchableOpacity style={styles.modalAccept} onPress={() => setIsModalVisible(false)}>
              <Text style={styles.modalAcceptButtonText}>Confirm</Text>
          </TouchableOpacity>
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
          <TouchableOpacity onPress={() => setLogMealModalVisible(false)}>
          <Icon2 name="close" size={40} style={styles.modalCloseIcon} ></Icon2>
          </TouchableOpacity>
          <View style={styles.modalTitleWrapper}>
          <Text style={styles.modalTitle}>Log Meal</Text>
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
              onValueChange={(itemValue, itemIndex) =>{
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
              <Text style={styles.modalAcceptButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
        
        </View>
      </View>
    </Modal>










    <View style={styles.content}>
      <View style={styles.TopContent}>
            <View style={styles.Topbuttons}>
              <View style={styles.leftButton}>
                <View style={styles.boxText}>
                <Text style={styles.calorieTop}>{calorieGoal}</Text>
                <Text style={styles.calorieGoalTop}>Daily calorie Goal</Text>
                </View>
                <TouchableOpacity style={styles.boxIconEdit} onPress={() => setIsModalVisible(true)}>
                <Icon2 name="edit" size={40} style={styles.WorkoutBoxEdit} ></Icon2>
                </TouchableOpacity>
              </View>
              <View style={styles.rightButton}>
                <View style={styles.boxText}>
                <Text style={styles.logMealText}>Log Meal</Text>
                </View>
                <TouchableOpacity style={styles.boxIconPlus} onPress={() => setLogMealModalVisible(true)}>
                <Icon2 name="plus" size={40} style={styles.WorkoutBoxEdit}></Icon2>
                </TouchableOpacity>
              </View>
            </View>
      </View>
        <View style={styles.MidContent}>
          <View style={styles.Chart}>
          <BarChart
            data={barData}
            width={330}
            height={220}
            chartConfig={chartConfig}
            withInnerLines={false}
            withHorizontalLabels={false}
            fromZero={true}
            showBarTops={false}
          />
          </View>
        </View>
        <View style={styles.BottomContent}>
            <View style={styles.bottomContentTextleft}>
            <Text style={styles.dataText}>{day} {month}</Text>
            <Text style={styles.calorie}>{dailyCalorie}</Text>
            <Text style={styles.calorieText}>Calorie intake</Text>
            </View>
            <View style={styles.bottomContentTextright}>
            <Text style={styles.calorieDis}>{calorieDiscrepancy} kcal</Text>
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
  
}

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
    backgroundColor: "#D3D3D3",
    borderRadius: 20,
    width: '95%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Chart:{
    marginTop: 40,
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
  },
  modalView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBox:{ 
    marginTop: 22,
    backgroundColor: 'grey',
    height: "60%",
    width: "95%",
    borderRadius: 20,
    borderWidth: 2,
  },
  modalTop:{
    flexDirection: 'row',
    flex: 1,
    
  },
  modalTitle:{
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
    marginLeft: 40,
  },
  modalTitleWrapper:{
    alignItems: 'center',
    flex: 1,
    marginRight: 85,
  },
  modalCloseIcon:{
    marginTop: 10,
    marginLeft: 20,
  },
  modalBot:{
    flex: 6,
    
    alignItems: 'center', 
  },
  scrollwheelBox:{
    width: '60%',
    height: '60%',
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    marginTop: 40,
  },
  modalAccept:{
    height: 50,
    width: 150,
    borderRadius: 20,
    backgroundColor: '#D3D3D3',
    marginTop: 30,
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 40,
  },
  modalAcceptButtonText:{
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 18,

  },
  input:{
    height: 50,
    backgroundColor: 'white',
    fontSize: 16,
    marginRight: 20,
    flex: 0.7,
    borderWidth: 2,
    paddingLeft: 5,
  },
  inputContainer:{
    flexDirection: 'row',
    
    alignItems: 'center',
    marginTop: 50,
  },
  textBoxText:{
    marginLeft: 10,
    fontSize: 17,
    flex: 1,
  },
  pickerWrapper:{
    backgroundColor: 'blue',
    marginTop: 10,
    width: "60%",
  },
  modalLogMealBox:{ 
    marginTop: 22,
    backgroundColor: 'grey',
    height: "70%",
    width: "95%",
    borderRadius: 20,
    borderWidth: 2,
  },
});

export default MealsScreen;
