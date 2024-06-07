
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Mainscreen from './views/mainscreen';
import Introscreen from './views/introscreen';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {isLoaded ? <Mainscreen /> : <Introscreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

