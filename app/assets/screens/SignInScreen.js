import React, { useState } from 'react';
import {StatusBar} from 'expo-status-bar';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import { authentication } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useTheme } from '@react-navigation/native';

const SignInScreen = (props) => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [errorMessageVisible, setErrorMessageVisible] = useState(false);

  let message = '';


  const handleSignin = () => {
    createUserWithEmailAndPassword(authentication, email, password)
    .then((re)=>{

      setIsSignedIn(true)
    })
    .catch((re) => {
      if(re.code === 'auth/email-already-in-use'){
        message = 'Email is already in use!'
      }
      else if(re.code === 'auth/invalid-email'){
         message = 'Email is invalid!'
         
      }else if(re.code === 'auth/weak-password'){
        message = 'Weak password'
      }else{
         message = re.code
      }
      setErrorMessage(message)
      setErrorMessageVisible(true)
    })
  }

 /* const handleError = (message) =>{
    const [errorMessage, setMessage] = useState(message);
  };*/

  return (
    
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="user-circle-o" size={20} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          secureTextEntry={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="black" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          secureTextEntry={false}
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
    
      <TouchableOpacity style={styles.loginButton} onPress={handleSignin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      {errorMessageVisible ? (
          <View style={styles.erroBox}>
          <Text style={styles.errorMessage}>
          {errorMessage}
          </Text>
          </View>
      ) : null}
    
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
    marginTop: 40,
    height: 80,
    width: 300,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 2,
  },
  errorMessage:{
    color: '#8B0000',
    fontWeight: 'bold',
    
  },
 
});

export default SignInScreen;
