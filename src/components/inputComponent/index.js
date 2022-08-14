import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import stylesConstants from "../../configs/constants/stylesConstants"

const InputComponent = ({ label, name, value, onChange, form }) => {

    return (
        <View
            style={styles.container}
        >
            <Text
                style={styles.label}
            >{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={val => onChange({ ...form, [name]: val })}
                value={value}
                name={name}
            />


        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 100,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: stylesConstants.colors.hitGrey,
        height: '50%',
        width: '100%',
        borderColor:stylesConstants.colors.grey,
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 10,
        padding: 10,
    },
    label: {
        color: stylesConstants.colors.beige,
        fontSize: 15
    },
    errorMsg: {
        color: 'red'
    }
});


export default InputComponent