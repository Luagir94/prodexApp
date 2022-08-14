import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import stylesConstants from "../../../configs/constants/stylesConstants"

const MainButton = ({ onPress, text }) => {
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
    backgroundColor: stylesConstants.colors.hitGrey,
    borderRadius: 10,
    padding: 10,
    width: '90%',
    height: 50,
    justifyContent: "center",
    text: {
      color: stylesConstants.colors.black,
      fontFamily: stylesConstants.fonts.bold,
    }
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});

export default MainButton