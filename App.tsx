// src/App.js
import React from 'react';
import {StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();

const App = () => {
  const handleButtonPress = () => {
    BackHandler.exitApp();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HOS"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => handleButtonPress()}>
                <MaterialIcons name="arrow-back-ios" color={'#fff'} size={20} />
              </TouchableOpacity>
            ),
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#6495ed'},
            headerTitleStyle: {color: '#fff', fontWeight: 'bold', fontSize: 30},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
