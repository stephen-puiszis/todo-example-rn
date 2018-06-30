import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// TODO: Styling seems like it should be DRY'd up into a helper function
// TODO: Move Each Filter into it's own button component

class Footer extends Component {
  render() {
    const { filter } = this.props;
    const filterStyles = (filter, targetFilter) => {
      return [styles.filter, filter == targetFilter && styles.selected];
    }
    return (
      <View style={styles.container}>
        <Text>{this.props.count} todos</Text>
        <View style={styles.filters}>

          <TouchableOpacity
            style={filterStyles(filter, "all")}
            onPress={() => this.props.onFilter("all")}
          >
            <Text>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={filterStyles(filter, "active")}
            onPress={() => this.props.onFilter("active")}
          >
            <Text>Active</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={filterStyles(filter, "completed")}
            onPress={() => this.props.onFilter("completed")}
          >
            <Text>Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.props.onClearComplete}>
            <Text>Clear Completed</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filters: {
    flexDirection: "row"
  },
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

export default Footer;
