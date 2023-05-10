import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { authentication } from '../firebase/firebase';
import {signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({navigation}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  const handleLogin = () => {
    // Handle login logic here
    
    signInWithEmailAndPassword(authentication, email, password)
    .then((re)=>{
      setIsSignedIn(true)
      navigation.navigate("Home")
    })
    .catch((re)=>{
      if(re.code === 'auth/missing-password'){
        message = 'Wrong password'
      }
      else if(re.code === 'auth/invalid-email'){
         message = 'Email is invalid!'
         
      }else if(re.code === 'auth/wrong-password'){
        message = 'Wrong password'
      }else if("auth/user-not-found"){
        message = "Wrong email/password"
      }
      else{
         message = re.code
      }
      setErrorMessage(message)
      setErrorMessageVisible(true)
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={errorMessageVisible}
        >
          <View style={styles.erroBox}>
          <TouchableOpacity onPress={() => setErrorMessageVisible(false)}>
          <Icon2 name="close" size={35} style={styles.modalCloseIcon} ></Icon2>
          </TouchableOpacity>
          <View style={styles.textWrapper}>
          <Text style={styles.errorMessage}>
          {errorMessage}
          </Text>
          </View>
          </View>
      </Modal>
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
  erroBox:{
    backgroundColor: 'grey',
    borderRadius: 20,
    marginTop: 300,
    marginLeft: 50,
    height: 150,
    width: 300,
    borderWidth: 2,
  },
  errorMessage:{
    color: '#8B0000',
    fontWeight: 'bold',
  },
  modalCloseIcon:{
    marginLeft: 250,
    width: 35,

  },
  textWrapper:{
    position: 'absolute',
    alignItems: 'center',
    width: '70%',
    marginLeft: 40,
    marginTop: 60,
  },
});

export default LoginScreen;
