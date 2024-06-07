import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Image } from 'react-native';
import logo from '../assets/cal_logo.png';

const Introscreen = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Animated.Image source={logo} style={[styles.innerimg, { transform: [{ scale: scaleAnim }] }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerimg: {
    width: 200,  
    height: 200,
  },
});

export default Introscreen;

