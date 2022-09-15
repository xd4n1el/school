import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import MenuIcon from "../../assets/menu-icon.png";
import { breakpoints } from "../../utils/screen/Breakpoints";

const MenuButton = styled("button").withConfig({ shouldForwardProp })`
  height: 34px;
  width: 34px;
  alignself: flex-end;
  border: none;
  background-image: url(${MenuIcon});
  filter: invert(100%);
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center center;
  cursor: pointer;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const MobileMenuButton = (props) => {
  return <MenuButton {...props} />;
};

export default MobileMenuButton;
