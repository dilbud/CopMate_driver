import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

export default HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const availableMeals = useSelector(state => state);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Home Screen</Text>  
            </View>
            <Button
                title="Go to User"
                onPress={() => {
                    navigation.navigate('User')
                }}
            />
            <Button
                title="Go to Login"
                onPress={() => {
                    navigation.navigate('Login')
                }}
            />
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});