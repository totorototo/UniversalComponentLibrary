import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/primitives";
import chroma from "chroma-js";

// take a hex and give us a nice text color to put over it
const textColor = hex => {
  const vsWhite = chroma.contrast(hex, "white");
  if (vsWhite > 4) {
    return "#FFF";
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

const SwatchTile = styled.View`
  height: 250px;
  width: 250px;
  border-radius: 4px;
  margin: 4px;
  background-color: ${props => props.hex};
  justify-content: center;
  align-items: center;
`;

const SwatchName = styled.Text`
  color: ${props => textColor(props.hex)};
  font-weight: bold;
`;

const Ampersand = styled.Text`
  color: #f3f3f3;
  font-size: 120px;
  font-family: Himalaya;
  line-height: 144px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "GT America";
  font-weight: bold;
  padding: 4px;
`;

const Swatch = ({ name, hex }) => (
  <SwatchTile name={`Swatch ${name}`} hex={hex}>
    <SwatchName name="Swatch Name" hex={hex}>
      {name}
    </SwatchName>
    <Ampersand hex={hex}>&</Ampersand>
  </SwatchTile>
);

const Color = {
  hex: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

Swatch.propTypes = Color;

export default Swatch;
