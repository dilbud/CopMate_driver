import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export default profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const availableMeals = useSelector((state) => state);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
                <Text>Login Screen</Text>
            </View>
            <Button
                title="Go to SignUp"
                onPress={() => navigation.navigate('SignUp')}
            /> */}

      <TextInput
        //   value={this.state.username}
        onChangeText={(username) => this.setState({ username })}
        placeholder={'Username'}
        placeholderTextColor="#ffffff"
        style={styles.input}
      />
      <TextInput
        //   value={this.state.password}
        onChangeText={(password) => this.setState({ password })}
        placeholder={'Password'}
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
        style={styles.input}
      />
      <View style={styles.login}>
        <Button
          icon={{ name: 'lock' }}
          title={'Login'}
          color="darkgreen"
          // style={styles.input}
          onPress={() => {
            Alert.alert('Logged Successfully!');
          }}
          // onPress={this.onLogin.bind(this)}
        />
        <Button
          icon={{ name: 'lock' }}
          title={'SignUp'}
          color="darkgreen"

          // style={styles.input}
          // onPress={() => {
          //   Alert.alert('Logged Successfully!');
          // }}
          // onPress={this.onLogin.bind(this)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#708090',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: 300,
    height: 54,
    padding: 10,
    // borderWidth: 1,
    //  borderColor: 'red',
    borderRadius: 30,
    marginBottom: 25,
    paddingHorizontal: 16,
    fontSize: 20,
    backgroundColor: 'rgba(255, 255, 255,0.3)',
  },
  login: {
    // marginRight:50,
    // marginLeft:40,
    marginTop: 10,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    backgroundColor: 'darkgreen',

    borderRadius: 70,
    width: 150,

    // borderWidth: 1,
    // borderColor: 'darkgreen',
  },
});
