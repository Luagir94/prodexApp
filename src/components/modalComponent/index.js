import React from 'react'
import { StyleSheet, Text, View, Modal} from 'react-native';
import MainButton from '../buttons/mainButton'
const ModalComponent = ({text,isVisible, handleModal}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={isVisible}
    onRequestClose={() => {
        handleModal()
    }}
  >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{text}</Text>
        <MainButton text={'CERRAR'} onPress={handleModal} />

      </View>
    </View>
   
  </Modal>
  )
}
const styles = StyleSheet.create({
    
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }

  })
export default ModalComponent