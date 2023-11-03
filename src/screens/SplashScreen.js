import React from 'react';
import {View, Image, StyleSheet, } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
          source={require('../assets/images/splashIcon.png')}
          style={styles.image}
          resizeMode='contain'
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"

  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
