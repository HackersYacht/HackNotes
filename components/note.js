import React from 'react'
import {
  Text, View
} from 'react-native'

export default (props)=>(
  <View
    style={{
      padding:20,
      borderBottomWidth:0.7,
      borderBottomColor: 'rgba(0,0,0,0.1)'
    }}>
    <Text style={{fontSize: 18}}>
      {props.note}
    </Text>
  </View>
)
