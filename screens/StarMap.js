import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
  Alert,
} from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: '',
      longtitude: '',
    };
  }

  render() {
    const { longitude, latitude } = this.state;
    const path =
      'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true';
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/space.gif')}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Star Map!</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Your Latitude"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  latitude: text,
                });
              }}
            />
            <TextInput
              style={styles.inputBox}
              placeholder="Enter Your Longtitude"
              placeholderTextColor="black"
              onChangeText={(text) => {
                this.setState({
                  longtitude: text,
                });
              }}
            />
          </View>
          <View style={styles.mapContainer}>
            <WebView
              scalesPageToFit={true}
              source={{ uri: path }}
              style={styles.map}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  titleContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  mapContainer: { flex: 0.8, backgroundColor: "#1a0023" },

  map: { width: '100%', height: '100%' },

  infoContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    marginTop: -10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
  },

  infoText: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },

  inputBox: {
    width: '80%',
    alignSelf: '',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    margin: 4,
    backgroundColor: 'white',
  },
});
