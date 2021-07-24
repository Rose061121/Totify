import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import MapView, { Marker }from 'react-native-maps';


export default function App() {



  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle} initialRegion={{latitude: 36.8529, longitude: -75.9780, latitudeDelta: .04, longitudeDelta: .04}}>
        <Marker pinColor='blue' coordinate={{latitude: 36.859378, longitude: -75.978360}}/>
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
