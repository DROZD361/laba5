import {View, Button, Text} from 'react-native'
import React, { useState } from 'react'
import AppCard from '../components/ui/AppCard'
import {EditModal} from '../components/EditModal'

export const TodoScreen = ({goBack, todo, onRemove, onSave}) => {
    const [modal, setModal] = useState(false)

    const saveHandler = (title) => {
        onSave(todo.id, title)
        setModal(false)
    }

    return (
        <View>
            <EditModal onSave={saveHandler} value={todo.title} visible={modal} onCancel={goBack} />
            <AppCard style={{marginBottom: 20, padding: 15}}>
                <Text style={{fontSize: 20}}>{todo.title}</Text>
                <Button title="Ред." onPress={() => setModal(true)} />    
            </AppCard>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button style={{width: '40%'}} title="Назад" onPress={goBack} />    
                <Button style={{width: '40%'}} title="Удалить" color="#e53935" onPress={() => onRemove(todo.id)} />    
            </View>
        </View>
    )
}