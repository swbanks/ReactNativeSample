import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

class EventForm extends Component {
  state = {};

  handleAddPress = () => {
    console.log(this.state);
    this.props.navigation.navigate('list');
  };

  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F3F3F3' }}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder='Event title'
            spellCheck={false}
            onChangeText={this.handleChangeTitle}
            value={this.state.title}
          />
        </View>
        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
