import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea}/>
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
            <Image
              source={require('../assets/main-icon.png')}
              style={styles.titleImage}
            />
            <Text style={styles.titleText}>The Stellar App!</Text>
          </View>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('SpaceCraft')}>
            <Text style={styles.routeText}>Space Craft</Text>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('StarMap')}>
            <Text style={styles.routeText}>Star Map</Text>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.routeCard}
            onPress={() => this.props.navigation.navigate('DailyPic')}>
            <Text style={styles.routeText}>Daily Pictures</Text>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}
            />
          </TouchableOpacity>
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
  routeCard: {
    flex: 0.18,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  titleBar: {
    flex: 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 20,
    color: 'purple',
    fontWeight: 'bold',
  },
  iconImage: {
    position: 'absolute',
    height: 70,
    width: 100,
    resizeMode: 'contain',
    right: -21,
    top: -10,
  },
  titleImage: {
    justifyContent: 'center',
    resizeMode: 'contain',
    right: 20,
    top: 50,
    height: 200,
    width: 200,
  },
});
