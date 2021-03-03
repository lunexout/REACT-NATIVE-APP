
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

export const Todo = (props) =>{
    return (
        <TouchableOpacity onLongPress={() => props.removeTodo(props.obj.id)}>
        <View style={styles.block}>
            <Text style={styles.text}>auto_ID: {props.obj.id}</Text>
            <Text style={styles.text}>todo_TITLE: {props.obj.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    block: {
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#D8DBDF',
        borderRadius: 10,
        flexDirection: 'column',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300,
    },
    text: {
        padding: 10,
        color: 'white',
    },
})