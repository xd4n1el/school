import styled from "styled-components";
import { breakpoints } from "../../utils/screen/Breakpoints";

const ButtonModel = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  min-width: 170px;
  width: 90%;
  max-width: 320px;
  background-color: #003576;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 195px;
  }

  ${(props) =>
    props.showDisable
      ? `
    &:disabled {
      opacity: 0.4;
    }
  `
      : null}
`;

const Button = (props) => {
  return <ButtonModel {...props}>{props.children}</ButtonModel>;
};

export default Button;
