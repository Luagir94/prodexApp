import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Modal, ImageBackground , StatusBar, Platform, ActivityIndicator } from 'react-native';
import stylesConstants from '../../configs/constants/stylesConstants';
import MainButton from '../../components/buttons/mainButton';
import bg from '../../../assets/bg/bg1.png'
import usePost from '../../hooks/usePost'
import ModalComponent from '../../components/modalComponent';
import InputComponent from '../../components/inputComponent';
const RegisterScreen = ({ navigation }) => {
  const [registerForm, setRegisterForm] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  })
  const [modalVisible, setModalVisible] = useState(false)
  const { response, error, loading, postData, resetHook } = usePost('api/auth/register', registerForm)
  const [msg, setMsg] = useState('')
  useEffect(() => {
    if (error) {
      setMsg(error)
      setModalVisible(true)
    }
  }, [error])
  
  useEffect(() => {
    if (response) {
      setMsg(response)
      setModalVisible(true)
    }
  }, [response])
const handleModal = () => {
  setModalVisible(!modalVisible)
  resetHook()
}

  return (
    <View
      style={styles.container}>
         <ImageBackground source={bg} resizeMode="cover" style={styles.image}>
          <ModalComponent text={msg} isVisible={modalVisible} handleModal={handleModal} />
          <View style={styles.titleContainer}>
          <Text
        style={styles.title}
        >REGISTRO</Text>
        <Text
        style={styles.subTitle}
        >Para disfrutar de nuestra aplicacion por favor completa el siguiente formulario.</Text>
          </View>
      
      <View
        style={styles.inputsContainer}
      >
        <InputComponent label="Nombre" name='name' value={registerForm.name} onChange={setRegisterForm} form={registerForm}  />
        <InputComponent label="Apellido" name='lastName' value={registerForm.lastName} onChange={setRegisterForm} form={registerForm}  />
        <InputComponent label="Email" name='email' value={registerForm.email} onChange={setRegisterForm} form={registerForm}  />
        <InputComponent label="Password" name='password' value={registerForm.password} onChange={setRegisterForm} form={registerForm}  />

      </View>
      <View
        style={styles.buttonContainer}>
           {loading ?  <ActivityIndicator size="large" color="#DBD3D8" /> :<MainButton text={'Registrarse'} onPress={postData} />}
        <MainButton text={'Volver Atras'} onPress={() => navigation.navigate('Home')} />
       
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
    alignItems: 'center',
    height: '30%',
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
export default RegisterScreen