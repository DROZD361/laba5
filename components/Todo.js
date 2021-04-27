import React, { useState } from 'react';
import { Text, Button, TextInput, View } from 'react-native';

const AddTodo = function ({ todo }) {


  return (
    <View style={{flexDirection: 'row', padding: 15, alignItems: 'center', borderWidth: 1, borderColor: '#eee', borderRadius: 5, marginBottom: 10}}>
      <Text>{todo.title}</Text>
    </View>
  );
}

export default AddTodo