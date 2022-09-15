import styled from "styled-components";
import Box from "./ui-kit/Box";
import MenuNav from "./ui-kit/MenuNav";
import { breakpoints } from "../utils/screen/Breakpoints";

const Wrapper = styled(Box)`
  display: none;
  @media screen and (min-width: ${breakpoints.desktop}) {
    display: flex;
    align-items: flex-end;
    background-color: #ffffff;
    height: 100%;
    width: 288px;
  }
`;

const DesktopMenu = () => {
  return (
    <Wrapper>
      <MenuNav />
    </Wrapper>
  );
};

export default DesktopMenu;
