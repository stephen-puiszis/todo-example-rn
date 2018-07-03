import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
// TODO: Styling seems like it should be DRY'd up into a helper function
// TODO: Move Each Filter into it's own button component

class Footer extends Component {
  
  filterPressed(id) {
    this.props.onFilter(id)
  } 

  render() {
    const filters = ["all", "completed", "active"]
    const { filter } = this.props;
    
    return (
      <View style={styles.container}>
        <Text>{this.props.count} todos</Text>
        <View style={styles.filters}>
          <FilterButton onPress={() => this.filterPressed("all")} id="all" name="All" selected={"all" == filter }/>
          <FilterButton onPress={() => this.filterPressed("active")} id="active" name="Active" selected={"active"== filter }/>
          <FilterButton onPress={() => this.filterPressed("completed")} id="completed" name="Completed" selected={"completed" == filter }/>
        </View>
      </View>
    )
  }
}

const FilterButton = ({onPress, name, selected}) => {
  const style = [styles.filter, selected && styles.selected]

  return (  
    <TouchableOpacity style={style}
      onPress={onPress}>
      <Text>{name}</Text>
    </TouchableOpacity>
  )
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
