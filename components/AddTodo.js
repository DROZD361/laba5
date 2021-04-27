import React, { useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';

const AddTodo = function (props) {
  const [value, setValue] = useState("")

  const pressHandler = () => {
    if (value.length > 0) {
      props.onSumbit(value)
      setValue("")
    } else {
      Alert.alert('Ошибка', 'укажите название')
      alert('укажите название')
    }
  }

  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
      <TextInput style={{width: '70%', padding: 10, borderStyle: 'solid', borderBottomWidth: 2, borderBottomColor: '#ff5b5b'}}
        value={value} placeholder="Напишите задачу" onChangeText={setValue} />
      <Button onPress={pressHandler} title="Добавить" /> 
    </View>
  );
}

export default AddTodo