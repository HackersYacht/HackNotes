import React, {Component} from 'react'
import {
  View, Text, TouchableOpacity
} from 'react-native'

export default class Appa1 extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={{flex:1, justifyContent:'center', backgroundColor:'#FFF'}}>
        <Text style={{fontSize:23}}>{this.props.byeVal}</Text>
        <TouchableOpacity style={{backgroundColor:'#000', padding:20}}
            onPress={this.props.pressed}
          >
          <Text style={{color:'#FFF', fontSize:23}}>{this.props.backVal}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
