//addNote.js
import React, {Component} from 'react'
import {
  View, TextInput, TouchableOpacity, Text
} from 'react-native'

export default (props)=>{
  return (
    <View style={{flex:9, padding: 10}}>
      <TextInput style={{flex:8, fontSize: 18}}
        onChangeText = {props.onInputChange}
        placeholder='Add your note here'
        autoFocus
        multiline
       />
       <TouchableOpacity
          onPress={props.onSave}
          style={{
            //flex:1,
            alignSelf:'center',
            marginBottom: 25,
            padding: 10,
            paddingHorizontal: 90,
            backgroundColor: '#007EF5',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
          }}
        >

        <Text style={{color: 'white', fontSize: 24}}>
          Save
        </Text>
       </TouchableOpacity>
    </View>
  )
}
