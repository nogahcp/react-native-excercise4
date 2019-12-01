import React from 'react'
import {
  ScrollView,
  Text,
  SectionList,
} from 'react-native';

import Item from './Item'
import { styles } from './styles'

export default class ItemsList extends React.Component {

  constructor(props) {
    super(props)
    const object = props.object
    //convert iten to sectionData
    const sectionsData = Object.keys(object).map(function(key, index) {
      return {
        title: key,
        data: Array.isArray(object[key]) ? object[key] : [object[key]],
      }
    });
    this.state = { sectionsData: sectionsData, }
  }

  render() {
    return (
        <SectionList
          sections={this.state.sectionsData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item item={item} />}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.title}>  { title }  </Text>
        )}
      />
    )
  }
}
