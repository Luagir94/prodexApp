import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import stylesConstants from "../../../configs/constants/stylesConstants"

const SecondaryButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text
        style={styles.button.text}
      >{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  button: {
    alignItems: "center",
    backgroundColor: 'transparent',
    borderColor: stylesConstants.colors.beige,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    width: '40%',
    height: 40,
    justifyContent: "center",
    text: {
      color: stylesConstants.colors.beige,
      fontFamily: 'PTSans_700Bold',
    }
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default SecondaryButton