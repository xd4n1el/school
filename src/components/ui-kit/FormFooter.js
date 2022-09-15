import styled from "styled-components";
import Box from "./Box";
import SimpleText from "./SimpleText";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../../utils/screen/Breakpoints";

const Wrapper = styled(Box)`
  align-items: center;
  min-width: 170px;
  width: 90%;
  height: 55px;
  border-top: solid 1px #a7a7a7;
  box-sizing: border-box;
  padding: 2rem 0 0 0;

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
`;

const Text = styled(SimpleText)`
  font-size: 16px;
  font-weight: 400;
  color: #3c3c3b;
`;

const Link = styled(NavLink)`
  height: 20px;
  padding: 0;
  fontfamily: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #3c3c3b;
  cursor: pointer;
  margin: 0 0.5rem;
  text-decoration: none;

  @media screen and (min-width: ${breakpoints.tablet}) {
    color: #003576;
  }
`;

const FormFooter = (props) => {
  return (
    <Wrapper>
      <Text>{props.text}</Text>
      <Link to={props.navigate}>{props.link}</Link>
    </Wrapper>
  );
};

export default FormFooter;
