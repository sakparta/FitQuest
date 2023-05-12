import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import ProgressCircle from 'react-native-progress-circle'
import { LineChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
const data = {
  labels: ['Start', 'Week 1', 'Week 2', 'Week 3'],
  datasets: [
    {
      data: [100, 98, 96, 95],
    },
  ],
};
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
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.TopContent}>
          <ProgressCircle
            percent={50}
            radius={70}
            borderWidth={30}
            color="#73d673"
            shadowColor="#d6d4d4"
            bgColor="#ececea"
          >
            <Text style={{ fontSize: 25 }}>{'50%'}</Text>
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
                data={data}
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
            <Text style={styles.barChartText}>100kg</Text>
            <Progress.Bar progress={0.4} width={200} height={50} color={'#73d673'} borderRadius={10} borderWidth={3} borderColor='#bdbdc7' unfilledColor={'#bdbdc7'} />
            <Text style={styles.barChartText}>80kg</Text>
          </View>
          <View style={styles.bottomContentButtons}>
            <TouchableOpacity style={styles.bottomContentButton}>
              <Text style={styles.bottomContentButtonText}> Add Goal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bottomContentButton}>
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
  },
});

export default HomeScreen;
