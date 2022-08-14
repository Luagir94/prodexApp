import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableHighlight, ImageBackground,StatusBar,Platform, KeyboardAvoidingView} from 'react-native';
import MainButton from '../../components/buttons/mainButton';
import SecondaryButton from '../../components/buttons/secondaryButton';
import TertiaryButton from '../../components/buttons/tertiaryButton';
import stylesConstants from '../../configs/constants/stylesConstants';
import bg from '../../../assets/bg/bg1.png'
const HomeScreen = ({navigation}) => {
  return (
    <View
    style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
      <View
      style={styles.homeContainer}
      >
      <Text
      style={styles.title}
      >Prodex</Text>
      <View
      style={styles.buttonContainer}
      >
          <MainButton text={'LOGIN'} onPress={() => navigation.navigate('Login')}/>
          <MainButton text={'REGISTRO'} onPress={() => navigation.navigate('Register')}/>
      </View>

      </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    height: '100%',
    backgroundColor: stylesConstants.colors.green,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    height: '40%',
    width:' 100%',
    justifyContent: 'space-evenly',
    alignItems:'center',
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    fontFamily: stylesConstants.fonts.bold,
  },
  homeContainer: {
    width : '100%',
    height : '100%',
    justifyContent: 'space-evenly',
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
})
export default HomeScreen