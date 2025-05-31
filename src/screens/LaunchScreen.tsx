import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const LaunchScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('AddExpense');
    }, 2000);
    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

export default LaunchScreen;

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: width * 0.6, // 60% of screen width
    height: height * 0.3, // 30% of screen height
  },
});
