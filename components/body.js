//body.js
//Replacing the map function with the FlatList Component
//it deals better with list and has more features
//https://facebook.github.io/react-native/docs/flatlist

//it a data prop where you put your list of notes and it will map through it
//and then renderItem prop where you can define how you want the each element in the list
//to look like; for us we will pass the Note Component
//and we will use the keyExtractor prop also which will make sure that React can update
//the specific Note needed to be updated

import React, {Component} from 'react'
import {
  View, Text, StyleSheet, Image, FlatList
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
          (<FlatList
            data = {this.props.notesList}
            renderItem={({item})=><Note  note={item}

            detail = {this.props.detail}
            press={()=>this.props.del(item)} />}



            keyExtractor ={(item, index) => JSON.stringify(index)}
          />)
          : (
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
