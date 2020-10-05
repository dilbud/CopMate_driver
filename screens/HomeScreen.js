import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export default HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.name}>CopMate</Text>
      </View>
      <Image
        style={{ height: 200, width: 370 }}
        source={require('../assets/traffic.png.webp')}
      />

      <Button
        title="Go to User"
        onPress={() => {
          navigation.navigate('User');
        }}
      />
      <Button
        title="Go to Login"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  name: {
    justifyContent: 'center',
    fontSize: 70,
  },
});
