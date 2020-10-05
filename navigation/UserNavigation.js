
import React from 'react';
// import {  } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen";

const Stack = createStackNavigator();

export default UserNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            mode="card"
            screenOptions={{
                headerStyle: { backgroundColor: 'papayawhip' },
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                gestureResponseDistance: {
                    horizontal: 300,
                },
                cardStyleInterpolator: ({ current, next, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                        overlayStyle: {
                            opacity: current.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 0.5],
                            }),
                        },
                    };
                },
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen} />
            <Stack.Screen
                name="User"
                component={UserScreen} />
        </Stack.Navigator>
    );
}

import React from "react";
import { Image, View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { globalStyle, color } from "../../utility";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ img, name, onImgTap, onEditImgTap }) => (
  <View style={[globalStyle.sectionCentered, styles.container]}>
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} resizeMode="cover" />
        ) : (
          <View
            style={[
              globalStyle.sectionCentered,
              styles.img,
              { backgroundColor: color.DARK_GRAY },
            ]}
          >
            <Text style={styles.name}>{name.charAt(0)}</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={[globalStyle.sectionCentered, styles.editImgContainer]}>
        <FontAwesome5
          name="user-edit"
          size={20}
          onPress={onEditImgTap}
          color={color.WHITE}
        />
      </View>
    </View>
    <Text style={styles.welcome}>{name}</Text>
  </View>
);
import React from "react";
import { Image, View, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import styles from "./styles";
import { globalStyle, color } from "../../utility";
import { TouchableOpacity } from "react-native-gesture-handler";

export default ({ img, name, onImgTap, onEditImgTap }) => (
  <View style={[globalStyle.sectionCentered, styles.container]}>
    <View style={styles.imgContainer}>
      <TouchableOpacity onPress={onImgTap} activeOpacity={0.8}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} resizeMode="cover" />
        ) : (
          <View
            style={[
              globalStyle.sectionCentered,
              styles.img,
              { backgroundColor: color.DARK_GRAY },
            ]}
          >
            <Text style={styles.name}>{name.charAt(0)}</Text>
          </View>
        )}
      </TouchableOpacity>
      <View style={[globalStyle.sectionCentered, styles.editImgContainer]}>
        <FontAwesome5
          name="user-edit"
          size={20}
          onPress={onEditImgTap}
          color={color.WHITE}
        />
      </View>
    </View>
    <Text style={styles.welcome}>{name}</Text>
  </View>
);
