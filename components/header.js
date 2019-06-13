import React from 'react'
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native'

export default class Header extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.pressed}>
          <Text style={styles.headerTxt}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#5F85F0',
  },
  headerTxt: {
    fontSize: 24,
    paddingTop: 25,
    paddingLeft: 20,
    color: '#FFF'
  },
})
