//body.js
import React, {Component} from 'react'
import {
  View, Text, StyleSheet, Image
} from 'react-native'

import Note from './note'

export default class Body extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <View style={styles.list}>
        {this.props.notesList.length !==0 ?
          this.props.notesList.map((note, i)=>(
            <Note key={i} note={note} />
          )) : (
            <Image source={require('../img/no-note.png')} style={styles.img} />
          )
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 9
  },
  img: {
    margin: 60,
    width: 260,
    height: 260
  }
})
