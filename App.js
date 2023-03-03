import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { LogBox } from 'react-native'
import { Provider } from 'react-redux'
import { TailwindProvider } from 'tailwindcss-react-native'
import store from './src/redux/store'
import Basket from './src/screens/Basket'
import Food from './src/screens/Food'
import Home from './src/screens/Home'

LogBox.ignoreLogs([""])
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator 
            initialRouteName='Home'
            screenOptions={{
              headerShown: false
            }}
          >

            <Stack.Screen
              name='Home'
              component={ Home } 
            />

            <Stack.Screen
              name='Food'
              component={ Food } 
            />

            <Stack.Screen
              name='Basket'
              component={ Basket } 
            />

          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  )
}