import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground, StatusBar, Platform, ActivityIndicator } from 'react-native';
import InputComponent from '../../components/inputComponent';
import stylesConstants from '../../configs/constants/stylesConstants';
import MainButton from '../../components/buttons/mainButton';
import bg from '../../../assets/bg/bg1.png'
import usePost from '../../hooks/usePost'
import ModalComponent from '../../components/modalComponent';
import AuthContext from '../../context/authContext'
const LoginScreen = ({ navigation }) => {
  const [registerForm, setRegisterForm] = useState({
    userName: '',
    password: '',
  })
  const { setAuthToken, setIsLogged } = useContext(AuthContext)
  const { response, error, loading, postData, resetHook } = usePost('api/auth/login', registerForm)
  const [modalVisible, setModalVisible] = useState(false)
  useEffect(() => {
    error && setModalVisible(true)
  }, [error])

  useEffect(() => {
    if (response) {
      setAuthToken(response)
      setIsLogged(true)
    }
  }, [response])

  const handleModal = () => {
    setModalVisible(!modalVisible)
    resetHook()
  }
  return (
    <View
      style={styles.container}>
      <ModalComponent text={error} isVisible={modalVisible} handleModal={handleModal} />
      <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
        <View style={styles.titleContainer}>
          <Text
            style={styles.title}
          >LOGIN</Text>
          <Text
            style={styles.subTitle}
          >Bienvenido de nuevo!</Text>
        </View>

        <View
          style={styles.inputsContainer}
        >
          <InputComponent label="Usuario" name='userName' value={registerForm.userName} onChange={setRegisterForm} form={registerForm} />
          <InputComponent label="Password" name='password' value={registerForm.password} onChange={setRegisterForm} form={registerForm} />

        </View>
        <View
          style={styles.buttonContainer}>
          {loading ? <ActivityIndicator size="large" color="#DBD3D8" /> : <MainButton text={'LOGIN'} onPress={postData} />}
          <MainButton text={'VOLVER ATRAS'} onPress={() => navigation.navigate('Home')} />

        </View>
      </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: stylesConstants.colors.green,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 0,
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  inputsContainer: {
    width: '100%',
    height: '50%',

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',

  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    alignSelf: 'flex-start',
    fontFamily: stylesConstants.fonts.bold
  },
  subTitle: {
    fontSize: 15,
    textAlign: 'left',
    alignSelf: 'flex-start',
    fontFamily: stylesConstants.fonts.normal
  },
  buttonContainer: {
    flex: 0,
    width: ' 100%',
    marginTop: 20,
    justifyContent: 'space-evenly',
    height: '30%',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    backgroundColor: 'white',
    height: '20%',
    justifyContent: 'space-evenly',
  }
})
export default LoginScreen