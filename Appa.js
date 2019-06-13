import React, {Component} from 'react'
import {
  View, Text, TouchableOpacity
} from 'react-native'
import Appa1 from './Appa1'

export default class Appa extends Component{
  state={
    next:false,

  }

  render(){


    if (this.state.next){
      return(
        <Appa1 byeVal='Bye' backVal={'Go back'}
          pressed={()=>{
            this.setState({next:false})
          }}
         />
      )
    }
    return(
      <View style={{flex:1, justifyContent:'center', backgroundColor:'#FFF'}}>
        <Text style={{fontSize:23}}>Hello</Text>
        <TouchableOpacity style={{backgroundColor:'#000', padding:20}}
        onPress={
          ()=>{this.setState({next:true})}
        }
        >
          <Text style={{color:'#FFF', fontSize:23}}>Go next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
