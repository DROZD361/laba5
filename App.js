import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    setTodos(prev => [
      ...prev, {
        od: Date.now.toString(),
        title: title
      }
    ])
  }

  return (
    <View style={styles.container}>
      <NavBar title="Todo App" />  
      <View style={{margin: 15}}>  
        <AddTodo onSumbit={addTodo}></AddTodo> 
        <View>
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </View>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
