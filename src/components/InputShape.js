import styled from "styled-components";
import Box from "./ui-kit/Box";
import Input from "./ui-kit/Input";
import { breakpoints } from "../utils/screen/Breakpoints";
import useBreakpoints from "../hooks/use-breakpoints";

const Wrapper = styled(Box)`
  flex-direction: column;
  min-width: 170px;
  width: 100%;
  max-width: 320px;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    align-items: center;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    max-width: 460px;
  }
`;

const InputLabel = styled("label")`
  position: absolute;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  color: ${(props) => (props.showError ? "#d90404" : "#868e96")};
  background-color: #ffffff;
  transform: translate(1.5rem, -0.5rem);
  height: 15px;
  font-size: 11px;
  padding: 0 0.5rem;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    align-self: flex-start;
  }
`;

const ErrorMessage = styled("p")`
  opacity: ${(props) => (props.showError ? "1" : "0")};
  margin: 0;
  color: #d90404;
  font-size: 14px;
  padding: 0 0.5rem;
  height: 16px;
`;

const InputShape = (props) => {
  const breakpoint = useBreakpoints();

  return (
    <Wrapper>
      <InputLabel showError={props.showError} show={breakpoint === "desktop" || props.showLabel}>
        {props.label}
      </InputLabel>
      {props.children ? (
        props.children
      ) : (
        <Input
          {...props}
          placeholder={breakpoint !== "desktop" ? props.label : null}
          variant={props.showError ? "error" : null}
        />
      )}
      <ErrorMessage showError={props.showError}>
        {props.errorMessage}
      </ErrorMessage>
    </Wrapper>
  );
};

export default InputShape;
