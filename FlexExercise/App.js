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
      selected: 1,
      flexDirectionStyleIdx: 0,
      alignItemsStyleIdx: 1,
      justifyContentStyleIdx: 3
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={this.buildParentStyle()}>
          <TouchableOpacity style={[styles.item1, (this.state.selected === 1) && styles.selected]}
            onPress={()=>this.selectItem(1)}/>
          <TouchableOpacity style={[styles.item2, (this.state.selected === 2) && styles.selected]}
            onPress={()=>this.selectItem(2)}/>
          <TouchableOpacity style={[styles.item3, (this.state.selected === 3) && styles.selected]}
            onPress={()=>this.selectItem(3)}/>
        </View>
        <View style={styles.controlContainer}>
          <Text style={styles.controlLabel} >Parent flexDirection</Text>
          <SegmentedControlTab 
            values={flexDirections}
            selectedIndex={this.state.flexDirectionStyleIdx}
            onTabPress={(index) => { this.setState({ flexDirectionStyleIdx: index }) }}/>
          <Text style={styles.controlLabel} >Parent alignItems</Text>
          <SegmentedControlTab 
            values={alignItems}
            selectedIndex={this.state.alignItemsStyleIdx}
            onTabPress={(index) => { this.setState({ alignItemsStyleIdx: index }) }}/>
          <Text style={styles.controlLabel} >Parent justifyContent</Text>
          <SegmentedControlTab tabsContainerStyle={{paddingBottom: 4}}
            values={justifyContent.slice(0, 3)}
            selectedIndex={this.state.justifyContentStyleIdx}
            onTabPress={(index) => { this.setState({ justifyContentStyleIdx: index }) }}/>
          <SegmentedControlTab
            values={justifyContent.slice(3, 5)}
            selectedIndex={this.state.justifyContentStyleIdx - 3}
            onTabPress={(index) => { this.setState({ justifyContentStyleIdx: index + 3 }) }}/>
        </View>
      </View>
    );
  };

  buildParentStyle = () => {
    return StyleSheet.create({
      style: {
        height: 120,
        flexDirection: flexDirections[this.state.flexDirectionStyleIdx],
        alignItems: alignItems[this.state.alignItemsStyleIdx],
        justifyContent: justifyContent[this.state.justifyContentStyleIdx],
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
const alignItems = ['flex-start', 'center', 'flex-end', 'stretch'];
const justifyContent = ['flex-start', 'center', 'flex-end', 'space-around', 'space-between'];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  item1: {
    minWidth: 60,
    minHeight: 30,
    backgroundColor: 'crimson',
  },
  item2: {
    minWidth: 60,
    minHeight: 30,
    backgroundColor: 'gold'
  },
  item3: {
    minWidth: 60,
    minHeight: 30,
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
