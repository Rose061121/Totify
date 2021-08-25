import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, Text } from 'react-native';
import MapView, { Marker }from 'react-native-maps';
import * as Location from 'expo-location'

export default function App() {
  
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [followUserLocation, setFollowUser] = useState(true)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


 const onDrag = (event) => {
    this.setState({
      followUserLocation: false
    });
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} 
      initialRegion={{latitude: 36.8529, longitude: -75.9780, latitudeDelta: .08, longitudeDelta: .08}}
      showsUserLocation={true}
      followsUserLocation={true}
      >
        </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
