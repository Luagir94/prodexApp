import React, { useEffect, useState, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthContext from '../../context/authContext';


import HomeScreen from '../../screens/home'
import RegisterScreen from '../../screens/register'
import LoginScreen from '../../screens/login'
import PasswordRecoveryScreen from '../../screens/passwordRecovery' 

import DashboardScreen from '../../screens/dashboard';
const Router = () => {
    const { isLogged } = useContext(AuthContext);
    const Stack = createNativeStackNavigator();
    if (!isLogged) {

        return <NavigationContainer>
            <Stack.Navigator   screenOptions={{
    headerShown: false
  }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Password-Recovery" component={PasswordRecoveryScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    } else {
        return <NavigationContainer>
                 <Stack.Navigator><Stack.Screen name="Dashboard" component={DashboardScreen}  /></Stack.Navigator>
            
        </NavigationContainer>
    }
}

export default Router