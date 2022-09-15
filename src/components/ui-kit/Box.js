import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

const BoxModel = styled("div").withConfig({ shouldForwardProp })`
  display: flex;
  width: 100%;
`;

const Box = (props) => {
  return <BoxModel {...props}>{props.children}</BoxModel>;
};

export default Box;
