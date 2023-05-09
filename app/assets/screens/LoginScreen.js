import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { authentication } from '../firebase/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const handleLogin = () => {
    // Handle login logic here
    
    signInWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
      setIsSignedIn(true)
      navigation.navigate("Home")
    })
    .catch((re)=>{
      console.log(re.message);
      
    })
  };
 

  const handleForgotPassword = () => {
    // Handle forgot password logic here
    console.log('Forgot password');
  };

  return (
    
    <View style={styles.container}>
      <Image source={require('../components/Logo.png')}  style={styles.icon}></Image>
      
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
        Forgot your password?
      </Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.Noaccount}>
       Don't have an account?
      </Text>

      <Text style={styles.forgotPassword} onPress={() => navigation.navigate("SignIn")}>
        Create new account
      </Text>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 50,
    width: 260,
    height: 240,
    borderWidth: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    
  },
  inputIcon: {
    marginRight: 10,
  },
  forgotPassword: {
    color: '#007FFF',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007FFF',
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
  },
  Noaccount: {
    color: 'black',
    fontSize: 16,
    marginTop: 30,
  },
});

export default LoginScreen;
