//App.js
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

import Header from './components/header'
import Body from './components/body'
import AddNote from './components/addNote'

export default class App extends Component {
  state = {
    notes: [
      'Jogging',
      'Play Golf',
      'Hairdressing',
      'Go to party'
    ],
    showAddNote: false,
    newNote: ''
  }

  save(){
    let listOfNotes = this.state.notes
    let noteToAdd = this.state.newNote

    //add the new note to the start of the array so that it appears first
    listOfNotes.unshift(noteToAdd)
    //update the state with the new state and set showAddNote to false to
    //return to the our list of notes
    this.setState({notes: listOfNotes, showAddNote: false})
  }


  render(){

    //when we press add button we should be able to see the addNote Component
    if(this.state.showAddNote){
      return(
        <View style={styles.main}>
          <View style={{flex: 1, backgroundColor:'#5F85F0'}}>

            <TouchableOpacity style={styles.backBtn}
              onPress={()=>this.setState({showAddNote: false})}//we change the state to go back
            >
              <Text style={styles.backArrow}> {'<'} </Text>
            </TouchableOpacity>
          </View>

          <AddNote
            onInputChange={(input)=>this.setState({newNote: input})}
            onSave={()=>this.save()}
          />
        </View>
      )
    }

    return(
        <View style={styles.main}>
          <Header
            title='All Notes'
            pressed={()=>console.log('got pressed')}
          />

          <Body notesList={this.state.notes}
            del={(item)=>alert('delete: '+item)}
            detail = {(d)=>{
              this.setState({detail:true, })
            }}
          />

          <TouchableOpacity style={styles.btn}
              onPress={()=>this.setState({showAddNote: true})}
            >
            <Text style={styles.btnTxt}>+</Text>
          </TouchableOpacity>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    main: {
      flex: 1
    },
    btn: {
      position : 'absolute',
      bottom: 35,
      right: 30,
      backgroundColor: '#5F85F0',
      width: 60,
      height: 60,
      borderRadius: 30,
    },
    btnTxt: {
      fontSize: 45,
      alignSelf: 'center',
      color: '#FFF'
    },
    backArrow: {
        fontSize: 28,
        color: '#FFF'
    },
    backBtn: {
      paddingTop: 35,
      paddingLeft: 10,
    }
})
