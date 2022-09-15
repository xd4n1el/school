import { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth-contenxt";
import styled from "styled-components";
import { cutName } from "../../utils/functions/Functions";
import { breakpoints } from "../../utils/screen/Breakpoints";
import Box from "./Box";
import SimpleText from "./SimpleText";
import ARROWFOWARD from "../../assets/arrow-foward.png";

const UserButton = styled(Box)`
  justify-content: space-between;
  alignitems: center;
  height: 55px;
  width: 90%;
  maxwidth: 286px;
  background: #003576;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 1rem;
  margin: 1.5rem 1rem;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const Text = styled(SimpleText)`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
`;

const ArrowButton = styled("button")`
  border: none;
  width: 17px;
  height: 20px;
  background-color: transparent;
  background-image: url(${ARROWFOWARD});
  filter: invert(100%);
  background-position: center center;
  background-size: 150%;
  background-repeat: no-repeat;
`;

const MobileLogoutButton = (props) => {
  const [name, setName] = useState("");
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user.name) {
      setName(cutName(auth.user.name));
    }
  }, [auth.user.name]);

  return (
    <UserButton>
      <Text>Oi, {`${name ? name : "Bem Vindo"}`}</Text>
      <ArrowButton onClick={props.logout} />
    </UserButton>
  );
};

export default MobileLogoutButton;
