import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import ProgressCircle from 'react-native-progress-circle'
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
import { Picker } from '@react-native-picker/picker';

//Linechartin style
const chartConfig = {
  backgroundColor: "#8cbbf1",
  backgroundGradientFrom: "#bdbdc7",
  backgroundGradientTo: "#bdbdc7",
  decimalPlaces: 2, // optional, defaults to 2dp
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

const HomeScreen = ({ navigation }) => {


  const [modalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  const [startWeight, setStartWeight] = useState(0);
  const [weightGoal, setWeightGoal] = useState('');
  const [goalTypeVisible, setGoalTypeVisible] = useState(true);
  const [progress, setProgress] = useState(0);


  const [weekOneWeight, setWeekOneWeight] = useState(0);
  const [weekTwoWeight, setWeekTwoWeight] = useState(0);
  const [weekThreeWeight, setWeekThreeWeight] = useState(0);

  const [editModalVisible, setEditModalVisible] = useState(false);

  const Data = {
    labels: ['Start', 'Week 1', 'week 2', 'week 3'],
    datasets: [
      {
        data: [startWeight, weekOneWeight, weekTwoWeight, weekThreeWeight],
      },
    ],
  };

  const confrimGoal = () => {
    setIsModalVisible(false)
  }

  const confirmEdit = () => {

    if (weekOneWeight === 0 && weekTwoWeight === 0 && weekThreeWeight === 0) {
      console.log("Error")
      currentWeight = startWeight
    } else if (weekOneWeight > 0 && weekTwoWeight === 0 && weekThreeWeight === 0) {
      currentWeight = weekOneWeight
    } else if (weekTwoWeight > 0 && weekThreeWeight === 0) {
      currentWeight = weekTwoWeight
    } else if (weekThreeWeight > 0) {
      currentWeight = weekThreeWeight
    } else {
      console.log("error")
      currentWeight = 0
    }
    prog = (startWeight - currentWeight) / (startWeight - weightGoal)
    setProgress(prog)
    setEditModalVisible(false)
  }


  const cancelEdit = () => {
    setWeekOneWeight(0)
    setWeekTwoWeight(0)
    setWeekThreeWeight(0)
    setEditModalVisible(false)
  }
  const goalTypeSelection = (value) => {
    if (value === 'Weight') {
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
              <Text style={styles.modalTitle}>Add Goal</Text>
              <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                <Icon3 name="close" size={40} style={styles.modalCloseIcon} color={'#505050'} ></Icon3>
              </TouchableOpacity>
            </View>
            <View style={styles.pickerWrapper}>
              <Text style={styles.goalTypeText}>Goal type:</Text>
              <Picker
                style={styles.picker}

                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedValue(itemValue)
                  goalTypeSelection(itemValue)
                }
                }>
                <Picker.Item label="Weight" value="Weight" />

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
                  <Icon2 name="plus" color={'#505050'} size={60} />
                </TouchableOpacity>
              ) : null}
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
              <Text style={styles.modalTitle}>Edit Goal</Text>
              <TouchableOpacity onPress={() => cancelEdit()}>
                <Icon3 name="close" size={40} style={styles.modalCloseIcon } color={'#505050'} ></Icon3>
              </TouchableOpacity>
            </View>
            <View style={styles.modalBot}>
              <View style={styles.goalBox}>
                <View style={styles.inputContainer}>
                  <Text style={styles.textBoxText}>Week 1 weight (kg):</Text>
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
                  <Text style={styles.textBoxText}>Week 2 weight (kg):</Text>
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
                  <Text style={styles.textBoxText}>Week 3 weight (kg):</Text>
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
              <TouchableOpacity style={[styles.modalAccept, {top: 250}]} onPress={() => confirmEdit()}>
                <Icon2 name="plus"  color={'#505050'} size={60} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>



      <View style={styles.content}>
        <View style={styles.TopContent}>
          <ProgressCircle
            percent={progress * 100}
            radius={70}
            borderWidth={30}
            color="#73d673"
            shadowColor="#d6d4d4"
            bgColor="#ececea"
          >
            <Text style={{ fontSize: 25 }}>{(progress * 100).toFixed(0) + "%"}</Text>
          </ProgressCircle>
        </View>
        <View>
          <Text style={styles.titleText}>Weight Goal</Text>
        </View>
        <View style={[{ flexDirection: 'row' }, { alignItems: 'center' }]}>
          <TouchableOpacity>
            <Icon2 name='chevron-left' size={40} color={'#505050'} />
          </TouchableOpacity>
          <View style={styles.MidContent}>
            <View style={styles.chart}>
              <LineChart
                data={Data}
                chartConfig={chartConfig}
                bezier
                height={250}
                width={300}
              />
            </View>
          </View>
          <TouchableOpacity>
            <Icon2 name='chevron-right' size={40} color={'#505050'} />
          </TouchableOpacity>
        </View>
        <View style={styles.BottomContent}>
          <View style={styles.BottomGoalBar}>
            <Text style={styles.barChartText}>{startWeight}</Text>
            <Progress.Bar progress={progress} width={200} height={50} color={'#73d673'} borderRadius={10} borderWidth={3} borderColor='#bdbdc7' unfilledColor={'#bdbdc7'} />
            <Text style={styles.barChartText}>{weightGoal}</Text>
          </View>
          <View style={styles.bottomContentButtons}>
            <TouchableOpacity style={styles.bottomContentButton} onPress={() => setIsModalVisible(true)}>
              <Text style={styles.bottomContentButtonText}> Add Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContentButton} onPress={() => setEditModalVisible(true)}>
              <Text style={styles.bottomContentButtonText}> Edit Goal</Text>
            </TouchableOpacity>
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
    marginTop: 5,
  },
  TopContent: {
    marginTop: 60,
    flex: 2,
    marginBottom: 5,
    width: "100%",
    alignItems: 'center',
  },
  MidContent: {
    flex: 4,
    backgroundColor: "#bdbdc7",
    borderRadius: 20,
    width: 300,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d7d7d8',
    elevation: 5,
  },
  chart: {
    marginVertical: 10,
    marginLeft: 5
  },
  BottomContent: {
    flex: 2.5,
  },
  BottomGoalBar: {
    width: 350,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 0.2,
  },
  barChartText: {
    marginRight: 10,
    marginLeft: 15,
    marginTop: 2,
    fontSize: 18,
    fontWeight: 'bold'
  },
  bottomContentButtons: {
    width: "95%",
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bottomContentButton: {
    flex: 1,
    margin: 30,
    height: 60,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#bdbdc7',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: '#bcbcc9',
    elevation: 7
  },
  bottomContentButtonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 5,
    paddingTop: 8
  }, modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBox: {
    marginTop: 22,
    backgroundColor: '#bdbdc7',
    height: "55%",
    width: "95%",
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#cbcbce',
    elevation: 10,
    shadowColor: '#505050',
  },
  modalTop: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
  },
  modalCloseIcon: {
    position: 'absolute',
    top: 15,
    right: -100
  },
  modalBot: {
    flex: 5,
    alignItems: 'center',
  },
  goalBox: {
    width: '90%',
    height: '70%',
    backgroundColor: '#D3D3D3',
    borderRadius: 30,
    marginTop: 15,
  },
  modalAccept: {
    position: 'absolute',
    top: 200,
    right: 15,
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
    fontSize: 22,
  },
  pickerWrapper: {
    width: "60%",
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '20%',
    borderBottomLeftRadius: 20,
  },
  picker: {
    marginLeft: 20,
    width: "60%",
    fontSize: 18,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  goalTypeText: {
    fontSize: 18,
    fontWeight: '800'
  },
  input: {
    height: 50,
    backgroundColor: '#ececea',
    fontSize: 16,
    marginRight: 20,
    flex: 0.6,
    borderWidth: 1,
    borderColor: '#f1f1ee',
    paddingLeft: 5,
    borderRadius: 40,
    elevation: 2
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
  textBoxText: {
    marginLeft: 14,
    fontSize: 18,
    flex: 1,
    fontWeight: '800'
  },
});

export default HomeScreen;