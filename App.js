import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentFormScreen from './screens/StudentFormScreen';
import HomeScreen from './screens/HomeScreen';
import EditScreen from './screens/EditScreen';


import { StudentProvider } from './screens/StudentContext'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <StudentProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name='Control Estudiantes' component={HomeScreen} options={{ headerTitleAlign: 'center' }}/>
          <Stack.Screen name='StudentFormScreen' component={StudentFormScreen}/>
          <Stack.Screen name='EditScreen' component={EditScreen}/> 
        </Stack.Navigator>
      </NavigationContainer>
    </StudentProvider>
  )
}

export default App;
