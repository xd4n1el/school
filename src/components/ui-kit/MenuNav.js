import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import MenuLink from "./MenuLink";
import { breakpoints } from "../../utils/screen/Breakpoints";
import HOMEIMG from "../../assets/home-icon.png";
import HOMEFOCUSIMG from "../../assets/home-focus.png";
import USERIMG from "../../assets/user.png";
import USERFOCUSIMG from "../../assets/user-focus.png";
import DOCIMG from "../../assets/article.png";
import DOCFOCUSIMG from "../../assets/article-focus.png";
import MobileLogoutButton from "./MobileLogoutButton";

const Nav = styled("nav").withConfig({ shouldForwardProp })`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 85%;
  }
`;

const MenuNav = (props) => {
  return (
    <Nav>
      <MobileLogoutButton logout={props.logout}/>
      <MenuLink
        to="/home"
        icon={HOMEIMG}
        focusIcon={HOMEFOCUSIMG}
        text="Início"
      />
      <MenuLink
        to="/dependentes"
        icon={USERIMG}
        focusIcon={USERFOCUSIMG}
        text="Dependentes"
      />
      <MenuLink
        to="/matriculas"
        icon={DOCIMG}
        focusIcon={DOCFOCUSIMG}
        text="Matrículas"
      />
    </Nav>
  );
};

export default MenuNav;
