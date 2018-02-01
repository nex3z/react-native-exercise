import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
      flexDirectionSelectedIdx: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.buildParentStyle()}>
          <TouchableOpacity style={[styles.item0, (this.state.selected === 0) && styles.selected]}
            onPress={()=>this.selectItem(0)}/>
          <TouchableOpacity style={[styles.item1, (this.state.selected === 1) && styles.selected]}
            onPress={()=>this.selectItem(1)}/>
          <TouchableOpacity style={[styles.item2, (this.state.selected === 2) && styles.selected]}
            onPress={()=>this.selectItem(2)}/>
        </View>
        <View style={styles.controlContainer}>
          <Text style={styles.controlLabel} >Parent Flex Direction</Text>
          <SegmentedControlTab 
            values={flexDirections}
            selectedIndex={this.state.flexDirectionSelectedIdx}
            onTabPress={(index) => { this.setState({ flexDirectionSelectedIdx: index }) }}/>
        </View>
      </View>
    );
  };

  buildParentStyle = () => {
    return StyleSheet.create({
      style: {
        height: 120,
        flexDirection: flexDirections[this.state.flexDirectionSelectedIdx],
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey'
      }
    }).style;
  }

  selectItem = (position) => {
    this.setState({
      selected: position
    });
  }
}

const flexDirections = ['row', 'column'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  item0: {
    width: 60,
    height: 30,
    backgroundColor: 'crimson',
  },
  item1: {
    width: 60,
    height: 30,
    backgroundColor: 'gold'
  },
  item2: {
    width: 60,
    height: 30,
    backgroundColor: 'dodgerblue'
  },
  selected: {
    borderWidth: 1,
    borderColor: 'black'
  },
  controlContainer: {
    flex: 1,
    top: 16,
    padding: 16
  },
  controlLabel: {
    paddingTop: 8,
    paddingBottom: 8
  }
});
