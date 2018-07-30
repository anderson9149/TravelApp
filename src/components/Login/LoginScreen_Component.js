import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, AsyncStorage, Button, Image, ImageBackground, Animated } from 'react-native';
import { SafeAreaView, StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { scale, moderateScale, verticalScale, DeviceWidth, DeviceHeight } from '../HelperComponents/ScaleFunctions';
import NavigationService from '../../../NavigationService.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

class LoginComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      renderState: 'login',
      loginEmail: '',
      loginPassword: '',
      newUserEmail: '',
      newUserName: '',
      newUserpassword1: '',
      newUserpassword2: '',
      loginSucceed: 'NA',
      newUserEmailValid: 'NA',
      newUserNameValid: 'NA',
      newUesrPasswordValid: 'NA',
      newUserConfirmPasswordValid: 'NA',
      fadeAnim: new Animated.Value(0),
    }
    this.setRenderToCreateUser = this.setRenderToCreateUser.bind(this);
    this.setRenderSignIn = this.setRenderSignIn.bind(this);
  }

  componentDidMount() {
    Animated.timing(          // Animate over time
      this.state.fadeAnim,    // The animated value to drive
      {
        toValue: 1,           // Animate to opacity: 1 (opaque)
        duration: 250,       // fade duration
      }
    ).start();                // Starts the animation
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    //this.props.navigation.navigate('App');
    NavigationService.navigate('App');
  };

  loginUser = () => {
    console.log("Check User Credentials")
    console.log('Email: ' + this.state.emailInput)
    console.log('Password: ' + this.state.loginPassword)
    fetchCall = 'http://127.0.0.1:8888/PHPTA/loginUser.php?&email=' + this.state.emailInput + '&userPassword=' + this.state.loginPassword
    console.log(fetchCall)
    fetch(fetchCall)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("Local Host PHP API Returned!")
        console.log(responseJson)
        if(responseJson){
          console.log("Username and Password are valid!")
          this.setState( {loginSucceed: 'true'} )
          this._signInAsync();
        }
        else {
          console.log("Sorry no such Username and Password combination.")
          this.setState( {loginSucceed: 'false'} )
        }
      })
      .catch((error) =>{
        console.log("Local Host PHP API Error!")
      });
  }

  createNewUser = () => {
    console.log("*********** Create New User")

    // Confirm the entered email is valid format
    var validEmail = false
    if( this.validateEmail(this.state.newUserEmail) ){
      console.log("Valid Email")
      validEmail = true
    }
    else {
      console.log("Invalid Email");
      validEmail = false
      this.setState( {newUserEmailValid: 'BadEmailFormat'} )
    }
    // Ensure the username entered is not empty
    var validUserName = false
    if(this.state.newUserName != ""){
      console.log("valid Username");
      validUserName = true
    }
    else {
      this.setState( {newUserNameValid: 'BadUserNameFormat'} )
      validUserName = false
      console.log("invalid Username");
    }
    // Confirm password entered is valid
    var validPassword = false
    if( this.validatePassword(this.state.newUserpassword1) ){
      console.log("Valid Password")
      validPassword = true;
    }
    else {
      this.setState( {newUesrPasswordValid: 'BadPasswordFormat'} )
      console.log("Invalid Password")
      validPassword = false
    }
    // Make sure passwords entered match
    var passwordsMatch = false
    if (this.state.newUserpassword1 == this.state.newUserpassword2){
      console.log("passwords match");
      passwordsMatch = true
    }
    else {
      this.setState( {newUserConfirmPasswordValid: 'PasswrodsDontMatch'} )
      console.log("passwords don't match");
    }

    if( validEmail && validUserName && validPassword && passwordsMatch ){
      console.log("Valid create inputs.  Make call to mkae user")
      fetchCall = 'http://127.0.0.1:8888/PHPTA/createUser.php?newUser=' + this.state.newUserName + '&email=' + this.state.newUserEmail + '&userPassword=' + this.state.newUserpassword1
      fetch(fetchCall)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("Local Host PHP API Returned!")
          this.setState( {renderState: 'userCreationSucesful'} )
          console.log(responseJson)
        })
        .catch((error) => {
          console.log("Local Host PHP API Error!")
          console.log(error);
        });
    }
  };

  // *************************************************
  // Login handlers
  handleEmail = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ emailInput: text })
  }

  handlePassword = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ loginPassword: text })
  }
  //***************************************************

  //***************************************************
  // Create User handlers
  handleNewUserEmail = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ newUserEmail: text })
  }

  handleNewUserName = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ newUserName: text })
  }

  handleNewUserPassword1 = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ newUserpassword1: text })
  }

  handleNewUserPassword2 = (text) => {
    console.log("******** Input Value:" + text)
    this.setState({ newUserpassword2: text })
  }
  //***************************************************

  setRenderToCreateUser(){
    this.setState( {loginSucceed: 'NA'} )
    this.setState( {newUserEmailValid: 'NA'} )
    this.setState( {newUserNameValid: 'NA'} )
    this.setState( {newUesrPasswordValid: 'NA'} )
    this.setState( {newUserConfirmPasswordValid: 'NA'} )
    this._emalLoginInput.setNativeProps({text: ''})
    this._passwordLoginInput.setNativeProps({text: ''})
    this.setState({ fadeAnim: new Animated.Value(1) },
      () => {
        Animated.timing(          // Animate over time
          this.state.fadeAnim, // The animated value to drive
          {
            toValue: 0,           // Animate to opacity: 1 (opaque)
            duration: 250,       // 2000ms
          }
        ).start( () => {
          this.setState({
            renderState: 'createUser',
            loginEmail: '',
            loginPassword: '',
            newUserEmail: '',
            newUserName: '',
            newUserpassword1: '',
            newUserpassword2: ''})
            this.setState({ fadeAnim: new Animated.Value(0) },
              () => {
                Animated.timing(          // Animate over time
                  this.state.fadeAnim, // The animated value to drive
                  {
                    toValue: 1,           // Animate to opacity: 1 (opaque)
                    duration: 250,       // 2000ms
                  }
                ).start()
              })
        });
      })
  }

  setRenderSignIn(){
    this.setState( {loginSucceed: 'NA'} )
    this.setState( {newUserEmailValid: 'NA'} )
    this.setState( {newUserNameValid: 'NA'} )
    this._emalNewUserInput.setNativeProps({text: ''});
    this._nameNewUserInput.setNativeProps({text: ''});
    this._password1NewUserInput.setNativeProps({text: ''});
    this._password2NewUserInput.setNativeProps({text: ''});
    this.setState({ fadeAnim: new Animated.Value(1) },
      () => {
        Animated.timing(          // Animate over time
          this.state.fadeAnim, // The animated value to drive
          {
            toValue: 0,           // Animate to opacity: 1 (opaque)
            duration: 250,       // 2000ms
          }
        ).start( () => {
          this.setState({
            renderState: 'login',
            loginEmail: '',
            loginPassword: '',
            newUserEmail: '',
            newUserName: '',
            newUserpassword1: '',
            newUserpassword2: ''})
            this.setState({ fadeAnim: new Animated.Value(0) },
              () => {
                Animated.timing(          // Animate over time
                  this.state.fadeAnim, // The animated value to drive
                  {
                    toValue: 1,           // Animate to opacity: 1 (opaque)
                    duration: 250,       // 2000ms
                  }
                ).start()
              })
        });
      })
  }

  // Function to validate email
  validateEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
  }

  validatePassword(password){
      console.log("validate Password: " + password);
      // Check the length
      if( !( password.length >= 8 ) ){
          console.log("Password too short");
          return false;
          }

      // Check for lower case
      var regex = /^(?=.*[a-z]).+$/;
      if( !(regex.test(password)) ) {
          console.log("Does Not Contain lower Case letter");
          return false;
      }

      // Check for Upper Case
      regex = /^(?=.*[A-Z]).+$/;
      if( !(regex.test(password)) ) {
          console.log("Does Not Contain Uper Case letter");
          return false;
      }

      // Check for special charecters
      /*
      regex = /^(?=.*[0-9_\W]).+$/;
      if( !(regex.test(password)) ) {
          console.log("Does Not Contain Specail character");
          return false;
      }
      */

      //All checks passed
      return true;
  }

  renderLoginMessage(){
    if (this.state.loginSucceed == 'false'){
      return (
        <View style= {{ height: scale(15) }}>
          <Text style={{ marginLeft: scale(25), color: 'red', fontWeight: '700', fontSize: scale(15) }} >
            Email and Password Combination Not valid
          </Text>
        </View>
      )}
      else {
        return (
          <View style= {{ height: scale(15) }}/>
      )}
    }

    renderNewUserEmailError(){
      if (this.state.newUserEmailValid == 'BadEmailFormat'){
        return (
          <View style= {{ height: scale(15) }}>
            <Text style={{ marginLeft: scale(25), color: 'red', fontWeight: '700', fontSize: scale(15) }} >
              Invalid Email Format
            </Text>
          </View>
        )}
    }

    renderNewUserNameError(){
      if (this.state.newUserNameValid == 'BadUserNameFormat'){
        return (
          <View style= {{ height: scale(15), marginTop: scale(10), }}>
            <Text style={{ marginLeft: scale(25), color: 'red', fontWeight: '700', fontSize: scale(15) }} >
              Empty User Name Not Allowed
            </Text>
          </View>
        )}
    }

    renderNewUserPasswordError(){
      if (this.state.newUesrPasswordValid == 'BadPasswordFormat'){
        return (
          <View style= {{ height: scale(15), marginTop: scale(10), }}>
            <Text style={{ marginLeft: scale(25), color: 'red', fontWeight: '700', fontSize: scale(15) }} >
              Password needs 8 char, Upper and lower case
            </Text>
          </View>
        )}
    }

    renderNewUserPasswordConfirmError(){
      if (this.state.newUserConfirmPasswordValid == 'PasswrodsDontMatch'){
        return (
          <View style= {{ height: scale(15), marginTop: scale(10), }}>
            <Text style={{ marginLeft: scale(25), color: 'red', fontWeight: '700', fontSize: scale(15) }} >
              Password do not match
            </Text>
          </View>
        )}
    }

  renderItem(){
      let { fadeAnim } = this.state;
      //console.log('************* Test Render: ' + this.state.emailInput)
      switch (this.state.renderState) {
        case 'login':
          return (
            <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
              {this.props.children}

              <View style={styles.imageContainer}  >
                <Image source={require('../pictures/TravelLogo.png')} style={styles.image}/>
              </View>

              {this.renderLoginMessage()}

              <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-mail" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  autoCapitalize = "none"
                  onChangeText = {this.handleEmail}
                  ref={component => this._emalLoginInput = component}/>
                  </View>

              <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-lock" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  autoCapitalize = "none"
                  secureTextEntry
                  onChangeText = {this.handlePassword}
                  ref={component => this._passwordLoginInput = component}/>
              </View>

            <TouchableOpacity style={styles.button} onPress={this.loginUser} >
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}>
                Sign In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={this.setRenderToCreateUser} >
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}>
                New User Sign Up
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: scale(10)}} >
              <TouchableOpacity style={{ flex: 1 }} >
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', textDecorationLine: 'underline', fontSize: scale(15) }}>
                  Forgot Password
                </Text>
              </TouchableOpacity>
            </View>

          </Animated.View>
          )
          break
        case 'createUser':
        return (
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
            {this.props.children}

            <View style={styles.imageContainer} >
              <Image source={require('../pictures/TravelLogo.png')} style={styles.image}/>
            </View>

            {this.renderNewUserEmailError()}

            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-mail" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Email"
                  autoCapitalize = "none"
                  onChangeText = {this.handleNewUserEmail}
                  ref={component => this._emalNewUserInput = component}/>
            </View>

            {this.renderNewUserNameError()}

            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-person" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "User Name"
                  autoCapitalize = "none"
                  onChangeText = {this.handleNewUserName}
                  ref={component => this._nameNewUserInput = component}/>
            </View>

            {this.renderNewUserPasswordError()}

            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-lock" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Password"
                  autoCapitalize = "none"
                  secureTextEntry
                  onChangeText = {this.handleNewUserPassword1}
                  ref={component => this._password1NewUserInput = component}/>
            </View>

            {this.renderNewUserPasswordConfirmError()}

            <View style={styles.inputContainer}>
                <Ionicons style={styles.inputIcon} name="ios-lock" size={20} color="#000"/>
                <TextInput style = {styles.input}
                  underlineColorAndroid = "transparent"
                  placeholder = "Confirm Password"
                  autoCapitalize = "none"
                  secureTextEntry
                  onChangeText = {this.handleNewUserPassword2}
                  ref={component => this._password2NewUserInput = component}/>
            </View>

            <TouchableOpacity style={styles.button} onPress={this.createNewUser} >
              <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', fontSize: scale(20) }}>
                Create New User
              </Text>
            </TouchableOpacity>

            <View style={{flexDirection: 'row', marginTop: scale(10)}} >
              <TouchableOpacity onPress={this.setRenderSignIn } style={{ flex: 1 }} >
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: '700', textDecorationLine: 'underline', fontSize: scale(15) }}>
                  Return to Sign In
                </Text>
              </TouchableOpacity>
            </View>

          </Animated.View>
        )
        break
      case 'userCreationSucesful':
        return (
          <Animated.View style={{ ...this.props.style, opacity: fadeAnim }} >
            {this.props.children}

            <View style={styles.imageContainer} >
              <Image source={require('../pictures/TravelLogo.png')} style={styles.image}/>
            </View>

          </Animated.View>
        )
        break;
      default:
        return (null)
        break;
      }
  }

  render() {
    const resizeMode = 'center';

    return (
      <ImageBackground source={require('../pictures/LoginPic4.png')} style={{ width: DeviceWidth(), height: DeviceHeight()}} blurRadius={2} >
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {this.renderItem()}
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

/*
<View style={styles.inputContainer}>
    <Ionicons style={styles.inputIcon} name="ios-mail" size={20} color="#000"/>
    <TextInput
      style={styles.input}
      placeholder="email"
      onSubmitEditing = { () => this.emailInput.focus()}
      keyboardType="email-address"
      autoCorrect={false}
      autoCapitalize="none">
    </TextInput>
</View>
*/

// Loign styles
styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    height: verticalScale(40),
    width: scale(250),
  },
  imageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  image:{
    width: scale(99),
    height: scale(66),
    resizeMode: 'stretch'
  },
  button:{
    justifyContent: 'center',
    backgroundColor: '#1a8cff',
    height: verticalScale(40),
    marginLeft: scale(25),
    marginRight: scale(25),
    //marginBottom: scale(10),
    marginTop: scale(10),
  },
  buttonSignUp:{
    justifyContent: 'center',
    backgroundColor: '#1a8cff',
    height: verticalScale(40),
    marginLeft: scale(25),
    marginRight: scale(25),
    //marginBottom: scale(10),
    marginTop: scale(10),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white',
    height: verticalScale(40),
    marginBottom: scale(1),
    marginLeft: scale(25),
    marginRight: scale(25),
    marginTop: scale(10),
    paddingHorizontal: scale(10),
  },
  inputIcon: {
    color: 'grey',
    padding: scale(10),
  },
});

export default LoginComponent;
