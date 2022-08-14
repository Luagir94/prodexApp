import React, { useEffect, useState, useCallback } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, FlatList, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import {
  useFonts, PTSans_400Regular,
  PTSans_400Regular_Italic,
  PTSans_700Bold,
  PTSans_700Bold_Italic
} from '@expo-google-fonts/pt-sans';
import { AuthProvider } from './src/context/authContext';
import Router from './src/configs/router';
import stylesConstants from './src/configs/constants/stylesConstants';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          PTSans_400Regular,
          PTSans_400Regular_Italic,
          PTSans_700Bold_Italic,
          PTSans_700Bold
        });
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return <View  
  onLayout={onLayoutRootView}
  style={{width: '100%', height: '100%', backgroundColor: stylesConstants.colors.green}}
  >
  <AuthProvider>
    <Router />
  </AuthProvider>
  </View>



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'stretch',

  },
  inputContainer: {
    flex: 0,
    height: '10%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    text: {
      alignSelf: 'flex-start',
      paddingLeft: '5%',
      marginBottom: 10
    }

  }, input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '75%',
    borderRadius: 6,
  },
  button: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    backgroundColor: '#027af2',
    text: {
      color: 'white',
    }

  }
  ,
  inputField: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  listContainer: {
    flex: 1,
    width: '100%',
    height: 100,
    overflow: 'hidden',
    marginTop: 2000,

  },
  listItem: {
    height: 200,
    width: '75%',
    marginTop: 20,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    position: 'relative',
    top: '5%',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 6,
    padding: '1%'
  },
  item: {
    height: 60,
    width: '75%',
    borderRadius: 6,
    backgroundColor: '#cfd0d1',
    padding: '2%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
    button: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 6,
      backgroundColor: 'red',
    }
  }
});
