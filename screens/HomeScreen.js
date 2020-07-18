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
                <Text>Home View</Text>
            </View>
            <Button
                title="Go to User"
                onPress={() => {
                    navigation.navigate('User')
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