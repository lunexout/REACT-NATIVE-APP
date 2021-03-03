
import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput
} from 'react-native'

export const NewTodo = (props) =>{
    const addTodos = () => {
        props.onSubmit(inputVal)
        setInputVal('')
    }

    const [inputVal, setInputVal] = useState('')

    return (
        <View style={styles.block}>
            <TextInput placeholder='set name of todo' onChangeText={text => setInputVal(text)} value={inputVal} style={styles.input}/>
            <View style={styles.button}>
                <Button color='black' onPress={addTodos} title='ADD NEW TODO'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        // height: 70,
        // backgroundColor: 'black',
        // alignItems: 'center',
        // justifyContent: 'flex-end'
        flexDirection: 'column'
    },
    button: {
        marginTop: 20,
        padding: 15,
        width: 300,
        backgroundColor: '#61DAFB',
        color: 'black',
        marginTop: 20,
        borderRadius: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    input: {
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 300,
        backgroundColor: 'white',
        color: 'black',
        borderRadius: 60,
        padding: 15,
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: '#D8DBDF',
    },
})