import { useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth-contenxt";
import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import SimpleText from "../ui-kit/SimpleText";
import Box from "./Box";
import MenuLink from "./MenuLink";
import { breakpoints } from "../../utils/screen/Breakpoints";
import HOMEIMG from "../../assets/home-icon.png";
import HOMEFOCUSIMG from "../../assets/home-focus.png";
import USERIMG from "../../assets/user.png";
import USERFOCUSIMG from "../../assets/user-focus.png";
import DOCIMG from "../../assets/article.png";
import DOCFOCUSIMG from "../../assets/article-focus.png";
import ARROWFOWARD from "../../assets/arrow-foward.png";
import { cutName } from "../../utils/functions/Functions";

const Nav = styled("nav").withConfig({ shouldForwardProp })`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 85%;
  }
`;

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

const MenuNav = (props) => {
  const [name, setName] = useState("");
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user.name) {
      setName(cutName(auth.user.name));
    }
  }, [auth.user.name]);

  return (
    <Nav>
      <UserButton>
        <Text>Oi, {`${name}`}</Text>
        <ArrowButton onClick={props.logout} />
      </UserButton>
      <MenuLink
        to="/home/welcome"
        icon={HOMEIMG}
        focusIcon={HOMEFOCUSIMG}
        text="Início"
      />
      <MenuLink
        to="/home/dependentes"
        icon={USERIMG}
        focusIcon={USERFOCUSIMG}
        text="Dependentes"
      />
      <MenuLink
        to="/home/matriculas"
        icon={DOCIMG}
        focusIcon={DOCFOCUSIMG}
        text="Matrículas"
      />
    </Nav>
  );
};

export default MenuNav;
