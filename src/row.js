import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TouchableOpacity
} from "react-native";

class Row extends Component {
  render() {
    const { complete } = this.props;
    const styleHelper = (complete) => {
      return [styles.text, complete && styles.complete];
    }
    const textComponent = (
      <TouchableOpacity
        style={styles.textWrap}
        onLongPress={() => this.props.onToggleEdit(true)}
      >
        <Text style={styleHelper(complete)}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    )

    const removeButton = (
      <TouchableOpacity onPress={this.props.onRemove}>
        <Text style={styles.destroy}>X</Text>
      </TouchableOpacity>
    )

    const doneButton = (
      <TouchableOpacity
        style={styles.save}
        onPress={() => this.props.onToggleEdit(false)}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    )

    const editingComponent = (
      <View style={styles.textWrap}>
        <TextInput
          style={styles.input}
          autoFocus
          onChangeText={this.props.onUpdate}
          value={this.props.text}
          multiline
        />
      </View>
    )

    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={this.props.onComplete}
        />
        {this.props.editing ? editingComponent : textComponent }
        {this.props.editing ? doneButton : removeButton }
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between"
  },
  input: {
    height: 100,
    flex: 1,
    fontSize: 24,
    padding: 0,
    color: "#4D4D4D"
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  complete: {
    textDecorationLine: "line-through"
  },
  save: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#7BE290",
    padding: 7,
  },
  saveText: {
    color: "#4D4D4D",
    fontSize: 20
  },
  destroy: {
    fontSize: 20,
    color: "#CC9A9A"
  },
  text: {
    fontSize: 24,
    color: "#4D4D4D"
  }
})
export default Row;
