import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";
import BGMOBILE from "../../assets/loginNoLogoMobile.png";
import BGDESKTOP from "../../assets/loginNoLogo.png";
import { breakpoints } from "../../utils/screen/Breakpoints";

const Main = styled("main").withConfig({ shouldForwardProp })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-image: url(${BGMOBILE});
  background-position: center top;
  background-size: 110% 250px;
  background-repeat: no-repeat;

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 1267px;
    flex-direction: row;
    align-items: center;
    background-image: url(${BGDESKTOP});
    background-position: left center;
    background-size: 40% 100%;
  }
`;

const ContentWrapper = styled("div")`
  display: flex;
  align-items: initial;
  height: ${(props) => props.contentHeight};
  width: 100%;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: center;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 100%;
    width: 60%;
    align-items: center;
  }
`;

const Background = (props) => {
  return (
    <Main {...props}>
      <ContentWrapper contentHeight={props.contentHeight}>
        {props.children}
      </ContentWrapper>
    </Main>
  );
};

export default Background;
