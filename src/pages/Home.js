import { useState, useEffect, useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Box from "../components/ui-kit/Box";
import MobileHeader from "../components/ui-kit/MobileHeader";
import MobileMenuButton from "../components/ui-kit/MobileMenuButton";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import LogoutButton from "../components/ui-kit/LogoutButton";
import { breakpoints } from "../utils/screen/Breakpoints";
import Welcome from "./Welcome";
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

const Home = () => {
  const auth = useContext(AuthContext);
  const [showMobileMenu, setShowMobileMenu] = useState();
  const [fadeOutMobileMenu, setFadeOutMobileMenu] = useState(false);
  const navigate = useNavigate();

  const animateMobileMenu = () => {
    setFadeOutMobileMenu(true);
    setTimeout(() => {
      setFadeOutMobileMenu(false);
      setShowMobileMenu(false);
    }, 400);
  };

  useEffect(() => {
    if (auth.isLogin === false) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, [auth.isLogin]);

  useEffect(() => {
    navigate("/home/welcome");
    // eslint-disable-next-line
  }, []);

  return (
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
          logout={() => console.log("mobile")}
        />
        <DesktopHeader>
          <LogoutButton onClick={auth.logout} />
        </DesktopHeader>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dependentes" element={<p>oi</p>} />
          <Route path="/matriculas" element={<p>tchau</p>} />
        </Routes>
      </Main>
    </Wrapper>
  );
};

export default Home;
