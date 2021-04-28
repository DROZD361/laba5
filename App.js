import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar'
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen'

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([
    {id: '1', title: 'Скоро все кончится'},
    {id: "2", title: 'Лаба это хорошо'}
  ])

  const addTodo = title => {
    setTodos(prev => [
      ...prev, {
        id: Date.now().toString(),
        title
      }
    ])
  }

  const removeTodo = id => {
    const todo = todos.find(t => t.id == id)
    Alert.alert('Удаление элемента', 'Вы уверены, что хотите удалить ' + todo.title, [
      {text: 'Отмена', style: 'cancel'}, {text: 'Удалить', onPress: () => {
        setTodoId(null)
        setTodos(prev => prev.filter(todo => todo.id !== id))
      }}
    ], { cancelable: false })
  }
  const updateTodo = (id, title) => {
    console.log('UPDATE')
    console.log(id)
    console.log(title)
    let arr = todos.map(todo => {
      if (todo.id == id) {
        todo.title = title
      }
      return todo
    })
    console.log(arr)
    setTodos(arr)
  }

  let content = (
    <MainScreen 
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    console.log(todos)
    const selectedTodo = todos.find(todo => todo.id == todoId)
    content = (
      <TodoScreen
        goBack={() => {
          setTodoId(null)
        }}
        onRemove={removeTodo}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    )
  }

  return (
    <View style={styles.container}>
      <NavBar title="Todo App" />  
      <View style={{margin: 15}}>  
        {content}
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
