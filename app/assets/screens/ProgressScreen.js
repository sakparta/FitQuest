import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle'
import { BarChart } from 'react-native-chart-kit';
import {Picker} from '@react-native-picker/picker';
import * as Progress from 'react-native-progress';





  //barchartin style
  const chartConfig = {
    backgroundGradientFrom: 'grey',
    backgroundGradientTo: 'grey',
    fillShadowGradientOpacity: 1,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 6) => `rgba(0, 0, 255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
    barRadius: 1,
   
  };
 

const HomeScreen = ({navigation}) => {
  
 
  const [modalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const [startWeight, setStartWeight] = useState('');
  const [weightGoal, setWeightGoal] = useState('');
  const [goalTypeVisible, setGoalTypeVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [goalSet, setGoalSet] = useState(false)

  const [weekOneWeight, setWeekOneWeight] = useState(0);
  const [weekTwoWeight, setWeekTwoWeight] = useState(0);
  const [weekThreeWeight, setWeekThreeWeight] = useState(0);
 
  const [editModalVisible, setEditModalVisible] = useState(false);

  const barData = {
    labels: ['Start', 'Week 1', 'week 2', 'week 3'],
    datasets: [
      {
        data: [startWeight, weekOneWeight, weekTwoWeight, weekThreeWeight],
      },
    ],
  };




  const confrimGoal = () =>{
    setIsModalVisible(false)     
  }

  const confirmEdit = () =>{
   
    if(weekOneWeight===0 && weekTwoWeight===0 && weekThreeWeight===0){
      console.log("Error")
      currentWeight = startWeigh
    }else if(weekOneWeight>0 && weekTwoWeight===0 && weekThreeWeight===0){
      currentWeight = weekOneWeight
    }else if(weekTwoWeight>0 && weekThreeWeight===0){
      currentWeight = weekTwoWeight
    }else if(weekThreeWeight>0 ){
      currentWeight = weekThreeWeight
    }else{
      console.log("error")
      currentWeight = 0
    }
   prog = (startWeight-currentWeight)/(startWeight-weightGoal)
   setProgress(prog)
   setEditModalVisible(false)
  }


  const cancelEdit = () =>{
    setWeekOneWeight(0)
    setWeekTwoWeight(0)
    setWeekThreeWeight(0)
    setEditModalVisible(false)
  }
  const goalTypeSelection = (value) =>{
    if(value === 'Weight'){
      setGoalTypeVisible(true)
    }
  }
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        >
      <View style={styles.modalView}>
        <View style={styles.modalBox}>
          <View style={styles.modalTop}>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
          <Icon2 name="close" size={40} style={styles.modalCloseIcon} ></Icon2>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>ADD GOAL</Text>
        </View>
        <View style={styles.pickerWrapper}>
        <Text style={styles.goalTypeText}>Goal type:</Text>
        <Picker
            style={styles.picker}
           
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>{
              setSelectedValue(itemValue)
              goalTypeSelection(itemValue)
            }   
        }>
            <Picker.Item label="Weight" value="Weight" />
            <Picker.Item label="asd" value="asdsad" />
        </Picker>
        </View>
        <View style={styles.modalBot}>
          {goalTypeVisible ? (
          <View style={styles.goalBox}>
            <View style={styles.inputContainer}>
                <Text style={styles.textBoxText}>Current weight (kg):</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  value={startWeight}
                  onChangeText={setStartWeight}
                  secureTextEntry={false}
                  keyboardType='numeric'
                />
              </View>
              <View style={styles.inputContainer}>
              <Text style={styles.textBoxText}>Goal (kg):</Text>
                <TextInput
                  style={styles.input}
                  placeholder=""
                  value={weightGoal}
                  onChangeText={setWeightGoal}
                  secureTextEntry={false}
                  keyboardType='numeric'
                />
              </View>
              
          </View>
          ) : null}
          {goalTypeVisible ? (
          <TouchableOpacity style={styles.modalAccept} onPress={() => confrimGoal(false)}>
              <Text style={styles.modalAcceptButtonText}>Confirm</Text>
          </TouchableOpacity>
          ): null}
        </View>
        </View>
      </View>
    </Modal>


    <Modal
        animationType="slide"
        transparent={true}
        visible={editModalVisible}
        >
      <View style={styles.modalView}>
        <View style={styles.modalBox}>
          <View style={styles.modalTop}>
          <TouchableOpacity onPress={() => cancelEdit()}>
          <Icon2 name="close" size={40} style={styles.modalCloseIcon} ></Icon2>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>EDIT GOAL</Text>
        </View>
        <View style={styles.modalBot}>
        <View style={styles.goalBox}>
        <View style={styles.inputContainer}>
        <Text style={styles.textBoxText}>Week 1 weigh (kg):</Text>
        <TextInput
         style={styles.input}
         placeholder=""
         value={weekOneWeight}
         onChangeText={setWeekOneWeight}
         secureTextEntry={false}
         keyboardType='numeric'
        >
        </TextInput>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.textBoxText}>Week 2 weigh (kg):</Text>
        <TextInput
         style={styles.input}
         placeholder=""
         value={weekTwoWeight}
         onChangeText={setWeekTwoWeight}
         secureTextEntry={false}
         keyboardType='numeric'
        >
        </TextInput>
        </View>


        <View style={styles.inputContainer}>
        <Text style={styles.textBoxText}>Week 3 weigh (kg):</Text>
        <TextInput
         style={styles.input}
         placeholder=""
         value={weekThreeWeight}
         onChangeText={setWeekThreeWeight}
         secureTextEntry={false}
         keyboardType='numeric'
        >
        </TextInput>
        </View>

        </View>
          
          <TouchableOpacity style={styles.modalAccept} onPress={() => confirmEdit()}>
              <Text style={styles.modalAcceptButtonText}>Confirm</Text>
          </TouchableOpacity>
  
        </View>
        </View>
      </View>
    </Modal>


      <View style={styles.content}>
        <View style={styles.TopContent}>
            <ProgressCircle
            percent={progress*100}
            radius={70}
            borderWidth={30}
            color="#10e410"
            shadowColor="#d6d4d4"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 25 }}>{(progress*100).toFixed(0) + "%"}</Text>
        </ProgressCircle>
        </View>
        <Text style={styles.goalText}>Weight loss goal: {weightGoal} </Text>
        <View style={styles.MidContent}>
          <View style={styles.Chart}>
          <BarChart
            data={barData}
            width={330}
            height={200}
            chartConfig={chartConfig}
            withInnerLines={true}
            withHorizontalLabels={true}
            fromZero={true}
            showBarTops={false}
          />
        </View>
        </View>
          <View style={styles.BottomContent}>
            <View style={styles.BottomGoalBar}>
                    <Text style={styles.StartWeightText}>{startWeight}</Text>
                    <Progress.Bar progress={progress} width={200} height={50} color={'green'} unfilledColor={'#D3D3D3'}/>
                    <Text style={styles.EndWeightText}>{weightGoal}</Text>
            </View>
            <View style={styles.bottomContentButtons}>
                <TouchableOpacity style={styles.bottomContentAddButton} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.bottomContentButtonText}> ADD GOAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomContentEditButton}>
                   <Text  style={styles.bottomContentButtonText} onPress={() => setEditModalVisible(true)}> EDIT GOAL</Text>
                </TouchableOpacity>
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
        marginTop: 60,
        flex: 0.7,
        marginBottom: 5,
        width: "100%",
        alignItems: 'center',
      },
      MidContent:{
        flex: 1.1,
        backgroundColor: "grey",
        borderRadius: 20,
        width: '97%',
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 2,
      },
      Chart:{
        marginTop: 40,
      },
      BottomContent:{
        flex: 0.8,
        
      },
      BottomGoalBar:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.2,
      },
      StartWeightText:{
        marginRight: 10,
        marginTop: 2,
        fontSize: 18,
      },
      EndWeightText:{
        marginLeft: 10,
        marginTop: 2,
        fontSize: 18,
      },
      bottomContentButtons:{
        width: "95%",
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      bottomContentAddButton:{
        flex: 1,
        marginLeft: 35,
        marginRight: 20,
        height: '42%',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: '#007FFF',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      bottomContentEditButton:{
        flex: 1,
        marginLeft: 20,
        marginRight: 35,
        height: '42%',
        borderWidth: 3,
        borderRadius: 20,
        backgroundColor: '#007FFF',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      bottomContentButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
      },
      goalText:{
        fontSize: 18,
        marginRight: 200,
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
        height: "95%",
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
        marginLeft: "18%",
      },
      modalCloseIcon:{
        marginTop: 10,
        marginLeft: 20,
      },
      modalBot:{
        flex: 6,
        
        alignItems: 'center', 
      },
      goalBox:{
        width: '90%',
        height: '70%',
        backgroundColor: '#D3D3D3',
        borderRadius: 20,
        marginTop: 40,
      },
      modalAccept:{
        height: 50,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#007FFF',
        marginTop: 30,
        alignItems: 'center',
        borderWidth: 2,
      },
      modalAcceptButtonText:{
        marginTop: 12,
        fontWeight: 'bold',
        fontSize: 18,
      },
      pickerWrapper:{
        width: "60%",
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '20%',
        borderBottomLeftRadius: 20,
      },
      picker:{
        marginLeft: 20,
        width: "60%",
        fontSize: 18,
        borderRadius: 20,
        backgroundColor: 'white'
      },
      goalTypeText:{
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
    });

export default HomeScreen;
