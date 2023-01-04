import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyleButton = styled(motion.button)`
  display: inline-block;
  height: 70px;
  width: 80%;
  border: none;
  border-radius: 15px;
  background-color: #ffffff;
  color: #222222;
  font-size: 1.2em;
  margin: 20px;
  cursor: pointer;
  line-height: 20px;
  user-select: none;
  color: rgb(255, 255, 255);
  background: rgb(255, 255, 255, 0.3);
`;
const Button = (props) => {
  return (
    <StyleButton
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      onClick={props.onClick}
    >
      {props.text}
    </StyleButton>
  );
};

export default Button;
