import React from 'react'
import {View, Text, StyleSheet} from 'react-native'



export const Navbar = (props) =>{
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        backgroundColor: '#20232A',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        // fontFamily:
    }
})