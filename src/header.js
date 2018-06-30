import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={this.props.onToggleAllComplete}>

          <Text style={styles.icon}>
            {String.fromCharCode(10003)}
          </Text>

        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={this.props.value}
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"

  },
  input: {
    flex: 1,
    height: 75,
    fontSize: 18,
    marginLeft: 16
  },
  icon: {
    fontSize: 30,
    color:  "#CCC"
  }
});
export default Header;
