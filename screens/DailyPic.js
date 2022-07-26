import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  StyleSheet,
  Platform,
  SafeAreaView,
  ImageBackground,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apod: {},
    };
  }

  componentDidMount() {
    this.getAPOD();
  }

  getAPOD = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=cmPnf07W2TJ5e7tMc865Fd019hW7b7lRUdUbj8ep'
      )
      .then((response) => {
        this.setState({ apod: response.data });
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <Text style={styles.routeText}>Astronomy picture of the day</Text>
          <Text style={styles.titleText}>{this.state.apod.title}</Text>
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() =>
              Linking.openURL(this.state.apod.url).catch((err) =>
                console.error("Couldn 't load page", err)
              )
            }>
            <View style={styles.iconContainer}>
              <Image
                source={require('../assets/play-video.png')}
                style={{ width: 50, height: 50, alignSelf: 'center' }}></Image>
            </View>
          </TouchableOpacity>
          <Text style={styles.explanationText}>
            {this.state.apod.explanation}
          </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#8F86FF',
    alignSelf: 'center',
  },
  titleText: {
    color:"white",
    alignSelf:"center",
    fontWeight: 'bold',
    fontSize:15
  },

  explanationText: {
    flex: 0.9,
    fontSize:14,
    color:"white"
  },
});
