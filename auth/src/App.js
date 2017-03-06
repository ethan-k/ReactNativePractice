import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = {
    loggedIn: false
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAbsno8uMFOyZpgeGqiTbToGxGwVbTSL3M',
      authDomain: 'auth-d6006.firebaseapp.com',
      databaseURL: 'https://auth-d6006.firebaseio.com',
      storageBucket: 'auth-d6006.appspot.com',
      messagingSenderId: '461108949134'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderConent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => firebase.auth().signOut()}              
            >
              Log out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }  
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />  
        {this.renderConent()}
      </View>
    );
  }
}

const styles = {
  logOutButtonStyle: {
    width: 100, 
    height: 20
  }
};

export default App;
