import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-primitives";

class Foo extends Component {
  render() {
    return <View style={styles.foo}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  foo: {
    width: 100,
    height: 100,
    backgroundColor: "#ff00ff"
  }
});

export default Foo;
