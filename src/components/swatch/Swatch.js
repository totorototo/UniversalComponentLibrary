import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-primitives";
import styled from "styled-components/primitives";

const Wrapper = styled.View`
  backgroundcolor-color: papayawhip;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 20;
  text-align: center;
  margin: 10;
  color: palevioletred;
  font-weight: bold;
`;

const Swatch = () => (
  <Wrapper>
    <Title>Hello world, this is my first universal styled component</Title>
  </Wrapper>
);

export default Swatch;
