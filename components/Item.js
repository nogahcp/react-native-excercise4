import React from 'react'
import {
  Text,
} from 'react-native';

import { styles } from './styles'

export default class Item extends React.Component {
  //return item content given in props
  render() {
    return <Text style={styles.item}> { this.props.item } </Text>
  }
}
