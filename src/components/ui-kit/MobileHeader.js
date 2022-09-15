import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { breakpoints } from "../../utils/screen/Breakpoints";

const Header = styled("header").withConfig({ shouldForwardProp })`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0;
  height: 64px;
  background-color: #003576;
  box-sizing: border-box;
  padding: 0 2rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const MobileHeader = (props) => {
  return <Header {...props}>{props.children}</Header>;
};

export default MobileHeader;
