import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// How to deal with the hanging carrot?
//
class Filter extends Component {
  render() {
    return (
      <View style={styles.filter} name={this.props.name}>
        <TouchableOpacity
          style={[styles.filter, filter ==  && styles.selected]}
          onPress={() => this.props.onFilter()}
        >
          <Text>{this.props.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  filter: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent"
  },
  selected: {
    borderColor: "rgba(175, 47, 47, .2)"
  }
})

export default Filter;
