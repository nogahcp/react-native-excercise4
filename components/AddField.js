import React from 'react'
import {
  TextInput, View, Button,
} from 'react-native';

import { styles } from './styles'

export default class AddField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {key: '', value: ''}
  }

  addField() {
    console.log("addField");
    this.props.onComplete(this.state.key, this.state.value)
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
            style={ styles.input }
            placeholder="Key"
            onChangeText={(key) => this.setState({key})}
            value={this.state.key}
          />
        <TextInput
              style={ styles.input }
              placeholder="Value"
              onChangeText={(value) => this.setState({value})}
              value={this.state.value}
            />
        <Button title="Add"
          onPress={ () => this.addField() }/>
      </View>
    )


  }
}
