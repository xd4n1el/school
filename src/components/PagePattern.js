import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Box from "./ui-kit/Box";
import MobileHeader from "./ui-kit/MobileHeader";
import MobileMenuButton from "./ui-kit/MobileMenuButton";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import LogoutButton from "./ui-kit/LogoutButton";
import { breakpoints } from "../utils/screen/Breakpoints";
import AuthContext from "../context/auth-contenxt";

const Wrapper = styled(Box)`
  flex-direction: column;
  width: 100%;
  height: 1167px;
  background-color: #f5f5f5;

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: row;
    height: 1260px;
  }
`;

const Header = styled(MobileHeader)`
  flex-direction: column;
  justify-content: center;
`;

const Main = styled(Box)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 80%;
  }
`;

const DesktopHeader = styled(Box)`
  @media screen and (max-width: ${breakpoints.desktop}) {
    display: none;
  }

  width: 100%;
  align-items: center;
  justify-content: flex-end;
  height: 5%;
  box-sizing: border-box;
  padding: 0 2rem;
`;

const PagePattern = (props) => {
  const auth = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState();
  const [fadeOutMobileMenu, setFadeOutMobileMenu] = useState(false);

  const animateMobileMenu = () => {
    setFadeOutMobileMenu(true);
    setTimeout(() => {
      setFadeOutMobileMenu(false);
      setShowMobileMenu(false);
    }, 400);
  };

  return (
    <>
      {auth.isLogin === false ? (
        <Navigate to="/login" />
      ) : (
        <Wrapper>
          <DesktopMenu />
          <Header>
            <MobileMenuButton onClick={() => setShowMobileMenu(true)} />
          </Header>
          <Main>
            <MobileMenu
              isOpen={showMobileMenu}
              onClose={animateMobileMenu}
              isClosed={fadeOutMobileMenu}
              onClick={animateMobileMenu}
              logout={() => auth.logout()}
            />
            <DesktopHeader>
              <LogoutButton onClick={auth.logout} />
            </DesktopHeader>
            {props.children}
          </Main>
        </Wrapper>
      )}
    </>
  );
};

export default PagePattern;
