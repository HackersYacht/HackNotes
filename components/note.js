import React from 'react'
import {
  Text, View, TouchableOpacity, Image
} from 'react-native'

export default (props)=>(
  <View
    style={{
      padding:20,
      borderBottomWidth:0.7,
      borderBottomColor: 'rgba(0,0,0,0.1)',
      flexDirection: 'row'
    }}>
    <TouchableOpacity style={{flex: 10}} onPress={()=>props.detail(props.note)}>
      <Text style={{fontSize: 18}}>
        {props.note}
      </Text>
    </TouchableOpacity>
    <TouchableOpacity style={{flex:1, padding:10}}
        onPress={()=>props.press()}
      >
      <Image source={require('../img/del.png')} style={{width:20, height: 20}} />
    </TouchableOpacity>
  </View>
)
