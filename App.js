import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentFormScreen from './screens/StudentFormScreen';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();


const App = () => {
  return (
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen  name='Control Estudiantes' component={HomeScreen} options={{ headerTitleAlign: 'center' }}/>
    <Stack.Screen name='StudentFormScreen' component={StudentFormScreen}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

export default App