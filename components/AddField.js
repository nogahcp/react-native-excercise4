import React from 'react'
import {
  TextInput, View, Button,
} from 'react-native';

import { styles } from './styles/stylesAddField'

export default class AddField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {key: '', value: ''}
  }

  //add/modify Field
  addField() {
    this.props.onComplete(this.state.key, this.state.value)
  }

  //dont add/modify field - just return
  returnToList() {
    this.props.exitWithoutSave()
  }

  render() {
    return (
      <View style={ styles.container }>
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
        <View style={ styles.button }>
          <Button title="Add"
            onPress={ () => this.addField() }
            disabled={ (this.state.key.length === 0) || (this.state.value.length === 0) }
            />
          <Button title="Back"
            onPress={ () => this.returnToList() }/>
        </View>
      </View>
    )


  }
}
