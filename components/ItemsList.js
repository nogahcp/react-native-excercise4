import React from 'react'
import {
  ScrollView,
  Text,
  SectionList,
  Button,
  View
} from 'react-native';

import Item from './Item'
import { styles } from './styles/stylesItemsList'
import AddField from './AddField'

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
    this.state = {
      sectionsData: sectionsData,
      addField: false,
    }
  }

  render() {
    if (this.state.addField === true) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={ styles.header }> Add Field </Text>
          <AddField onComplete={(key, value) => this.addOrModifyField(key, value)} exitWithoutSave={ () => this.stopAddField() }/>
        </View>
      )
    } else {
      return (
        <>
        <Text style={ styles.header }> View Object </Text>
          <SectionList
            sections={this.state.sectionsData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item item={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.title}>  { title }  </Text>
          )}
        />
        <Button title="Add/Modify field"
          onPress={() => this.setState({addField: true})}/>
        </>
      )
    }
  }

  addOrModifyField(key, value) {
    let newSectionData = this.state.sectionsData
    //if key do not exist - add to state
    if (!this.state.sectionsData.map(obj => obj.title).includes(key)) {
      newSectionData = [...this.state.sectionsData, {title: key, data: [value]}]
    }
    //if key exist - in case of array - add new value to array. If primitive - replace with new value
    else {
      const oldValue = (this.state.sectionsData.filter(obj => (obj.title === key))[0]).data
      //array
      if (Array.isArray(this.props.object[key])) {
        newSectionData = [...(this.state.sectionsData.filter(obj => (obj.title !== key))), {title: key, data: [...oldValue, value]}]
      }
      //primitive
      else {
        newSectionData = [...(this.state.sectionsData.filter(obj => (obj.title !== key))), {title: key, data: [value]}]
      }
    }
    this.setState({
      sectionsData: newSectionData,
      addField: false,
    })
  }

  stopAddField() {
    this.setState({
      addField: false,
    })
  }
}
