import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { breakpoints } from "../../utils/screen/Breakpoints";

const Text = styled("h1").withConfig({ shouldForwardProp })`
  font-size: 28px;
  font-weight: 300;
  margin: 0 0 1rem 0;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 38px;
    margin: 0 0 0.7rem 0;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    font-size: 56px;
  }
`;

const Title = (props) => {
  return <Text {...props}></Text>;
};

export default Title;
