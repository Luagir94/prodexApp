import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import stylesConstants from "../../../configs/constants/stylesConstants"

const TertiaryButton = ({ onPress, text }) => {
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
        width: 120,
        padding: 10,
        height: 40,
        justifyContent: "center",
        text: {
            color: stylesConstants.colors.beige,
            fontFamily: 'PTSans_700Bold',
            textDecorationLine: 'underline',
            
        }
    }
});

export default TertiaryButton