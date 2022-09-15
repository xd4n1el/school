import { useState } from "react";
import styled, { keyframes } from "styled-components";
import Icon from "../../assets/arrow-icon.png";

const arrowUp = keyframes`
  from {
    transform: rotate(-180deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const arrowDown = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-180deg);
  }
`;

const arrowSide = (value) => {
  switch (value) {
    case true:
      return arrowUp;
    case false:
      return arrowDown;
    default:
      return null;
  }
};

const Button = styled("button")`
  width: 17px;
  height: 13px;
  background-color: transparent;
  background-image: url(${Icon});
  background-repeat: no-repeat;
  background-position: center;
  transform: ${(props) => (props.showAnimation ? null : "rotate(180deg)")};
  animation: ${(props) => arrowSide(props.showAnimation)} 0.5s linear;
  cursor: pointer;
  border: none;
`;

const ExpandButton = (props) => {
  const [animate, setAnimate] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const animateButton = () => {
    setDisabled(true);
    setAnimate((value) => !value);
    setTimeout(() => {
      setDisabled(false);
    }, 600);
  };

  return (
    <Button
      showAnimation={animate}
      disabled={disabled}
      onClick={() => {
        animateButton();
        props.onClick();
      }}
    />
  );
};

export default ExpandButton;
