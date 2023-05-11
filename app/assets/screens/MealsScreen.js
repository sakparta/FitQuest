import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { BarChart } from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';
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
const barData = {
  labels: ['25 Mar', '26 Mar', '27 Mar'],
  datasets: [
    {
      data: [3000, 2200, 2500],
    },
  ],
};
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
  const [selectedValue, setSelectedValue] = useState('');
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
          <TouchableOpacity style={styles.modalAccept} onPress={() => setIsModalVisible(false)}>
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
                <Text style={styles.calorieTop}>2 500 kcal</Text>
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
                <TouchableOpacity style={styles.boxIconPlus}>
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
  },
  modalAcceptButtonText:{
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 18,

  },
});

export default MealsScreen;
