import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Button, TextInput } from 'react-native';
import AppHeader from '../components/AppHeader';
import dictionary from '../dictionary';

class HomeScreen extends React.Component {

  constructor() {
    super();
    this.state = {
      text: "",
      word: "",
      isSearchPressed: '',
      lexicalCategory: "",
      examples: [],
      definition: ""
    }
  }

  getWord = (word) => {
    try {
    var searchKeyword = word.toLowerCase();
    //var url = "https://rupinwhitehatjr.github.io/dictionary/" + searchKeyword + ".json";
    //console.log(url);
    //console.log(url);
    //return fetch(url)
    //.then((response) => response.json())
    //.then((responseJson) => {
      //var responseObject = responseJson;
      //if (responseObject.definitions !== []) {
        var wordData = dictionary[word]["word"];
        var definition = dictionary[word]["definition"];
        var lexicalCategory = dictionary[word]["lexicalCategory"];

        this.setState({
          word: this.state.text,
          definition: definition,
          lexicalCategory: lexicalCategory
        })
    }
      //}

      catch (err) {
        alert("Sorry, This word is not available at this time");
        this.setState({
          word: this.state.text,
          definition: "Not Found"
        })
      }
      //}
    //})
    /*.catch((error) => {
        console.error(error);
        this.setState({
          word: this.state.text,
          definition: "Not Found"
        })
    });*/
  }

  render() {
    return (
      <View>
      <AppHeader/>
      <TextInput onChangeText = {text=> {
        this.setState({
          text: text,
          isSearchPressed: false,
          word: "Loading...",
          lexicalCategory: "",
          examples: [],
          definition: ""
        })
      }}
      value={this.state.text} style= {styles.textInput}/>
      <TouchableOpacity onPress= {() => {
        this.setState({isSearchPressed: true});
        this.getWord(this.state.text);
      }} style= {styles.button}> Search </TouchableOpacity>
      <View style = {styles.row}>
      <Text> Word: </Text>
      <Text> {this.state.word} </Text>
      </View>
      <View style = {styles.row}>
      <Text> Type: </Text>
      <Text> {this.state.lexicalCategory} </Text>
      </View>
      <View style = {styles.row}>
      <Text> Definition: </Text>
      <Text> {this.state.definition} </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    marginTop: 100,
    width: "80%",
    height: 40,
    borderWidth: 5,
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "white"
  },
  button : {
    width: 100,
    height: 50,
    borderWidth: 5,
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
    color: "blue",
    backgroundColor: "white"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});


export default HomeScreen;
