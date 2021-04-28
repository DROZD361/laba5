import React, { useState } from 'react';
import { Alert, StyleSheet, Button, TextInput, View, Text } from 'react-native';
import NavBar from './components/NavBar'


export default function App() {
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')

  return (
    <View style={styles.container}>
      <NavBar title="Квадратные корни" />  
      <View style={{margin: 15}}>  
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>  
          <TextInput keyboardType='numeric' style={styles.input} value={a} onChangeText={setA} placeholder="Введите a"/><Text>*x^2 + </Text>  
          <TextInput keyboardType='numeric' style={styles.input} value={b} onChangeText={setB} placeholder="Введите b"/><Text>*x +</Text> 
          <TextInput keyboardType='numeric' style={styles.input} value={c} onChangeText={setC} placeholder="Введите c"/>
        </View>
        <Button title="Расчитать" onPress={() => {
          if (!a) {
            Alert.alert('Введите a')
            return false
          }
          if (!b) {
            Alert.alert('Введите b')
            return false
          }
          if (!c) {
            Alert.alert('Введите c')
            return false
          }
          let aa = parseFloat(a || 0) 
          let bb = parseFloat(b || 0) 
          let cc = parseFloat(c || 0)
          let dis = Math.pow(bb,2) - 4 * aa * cc

          if (dis < 0) {
            Alert.alert('Нет корней')
          } else {
            let x1 = (bb*(-1) + Math.sqrt(dis)) / 2 * aa
            let x2 = (bb*(-1) - Math.sqrt(dis)) / 2 * aa
            Alert.alert('Корни уравнения', `x1 = ${x1}, \nx2 = ${x2}
            `)

          }
        }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }, input: {
    padding: 10,
    borderBottomColor: '#3949ab',
    borderBottomWidth: 2,
    width: '25%',
    marginBottom: 20
}
});
