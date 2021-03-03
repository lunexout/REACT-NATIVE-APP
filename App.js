import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';

import {Navbar} from './src/Navbar'
import {NewTodo} from './src/NewTodo'
import {Todo} from './src/Todo'
export default function App() {
  const [todos, setTodo] = useState([])

  const addTodos = (title) => {
    setTodo(prev => [...prev, {
      id: Date.now().toString(),
      title: title
    }])
  }

  const removeTodo = (id) => {
    setTodo(prev => prev.filter(item => item.id !== id))
  }

  return (
    // <SafeAreaView>
        <View style={styles.container}>
          <Navbar title='TODO APP'/>
          <NewTodo onSubmit={addTodos}/>
          <ScrollView>
          {todos.map(item => {
            return (<>
              <Todo obj={item} removeTodo={removeTodo}/>
            </>)
          })}
          </ScrollView>
        </View>
    // {/* </SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // height: 80,
    backgroundColor: '#282C34',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
  },
});
