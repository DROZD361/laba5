import React, { useState } from 'react';
import { Text, Button, TextInput, View, TouchableOpacity } from 'react-native';

const AddTodo = function ({ todo, onRemove, onOpen }) {


  return (
      <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => onOpen(todo.id)}
        onLongPress={onRemove.bind(null, todo.id)}>
        <View style={{flexDirection: 'row', padding: 15, alignItems: 'center', borderWidth: 1, borderColor: '#eee', borderRadius: 5, marginBottom: 10}}>
            <Text>{todo.title}</Text>
        </View>
    </TouchableOpacity>
  );
}

export default AddTodo