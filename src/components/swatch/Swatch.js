import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-primitives";

const Swatch = ({ name, hex }) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8
    }}
  >
    <Text name="Swatch Name" style={{ color: "#FFF", fontWeight: "bold" }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: "#FFF" }}>
      {hex}
    </Text>
  </View>
);

export default Swatch;
