import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import SimpleText from "./SimpleText";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../utils/screen/Breakpoints";

const Link = styled(NavLink).withConfig({ shouldForwardProp })`
  display: flex;
  align-items: center;
  height: 40px;
  width: 100%;
  max-width: 286px;
  background-color: transparent;
  text-decoration: none;
  margin: 0 0 1rem 0;

  @media screen and (min-width: ${breakpoints.desktop}) {
    box-sizing: border-box;
    padding: 0 0.5rem 0 0;
    max-width: 160px;

    &.active {
      background-size: 15%;

      & > span {
        background-image: url(${(props) => props.focusIcon});
      }

      & > p {
        background-color: #e7f2f9;
        border-radius: 0px 12px 12px 0px;
        font-weight: bold;
      }
    }
  }
`;

const Img = styled("span")`
  position: absolute;
  height: 25px;
  width: 25px;
  background-size: 90%;
  background-image: url(${(props) => props.icon});
  background-position: center center;
  background-repeat: no-repeat;
  margin: 0 0 0 2rem;
`;

const Text = styled(SimpleText)`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 .5rem 0 4rem;
  height: 100%;
  font-weight: 400;
  font-size: 14px;
`;

const MenuLink = (props) => {
  return (
    <Link {...props}>
      <Img icon={props.icon} />
      <Text>{props.text}</Text>
    </Link>
  );
};

export default MenuLink;
