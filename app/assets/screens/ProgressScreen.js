import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle'
import { BarChart } from 'react-native-chart-kit';
import * as Progress from 'react-native-progress';
const barData = {
    labels: ['Start', 'Week 1', 'week 2', 'week 3'],
    datasets: [
      {
        data: [100, 98, 96, 95],
      },
    ],
  };
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
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.TopContent}>
            <ProgressCircle
            percent={50}
            radius={60}
            borderWidth={17}
            color="#32CD32"
            shadowColor="#999"
            bgColor="#fff"
            >
            <Text style={{ fontSize: 25 }}>{'50%'}</Text>
        </ProgressCircle>
        </View>
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
                    <Text style={styles.StartWeightText}>100kg</Text>
                    <Progress.Bar progress={0.4} width={200} height={50} color={'green'} unfilledColor={'#D3D3D3'}/>
                    <Text style={styles.EndWeightText}>80kg</Text>
            </View>
            <View style={styles.bottomContentButtons}>
                <TouchableOpacity style={styles.bottomContentAddButton}>
                    <Text style={styles.bottomContentButtonText}> ADD GOAL</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomContentEditButton}>
                   <Text  style={styles.bottomContentButtonText}> EDIT GOAL</Text>
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
        backgroundColor: '#D3D3D3',
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
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      bottomContentButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
      }
    });

export default HomeScreen;
