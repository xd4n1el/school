import styled, { keyframes } from "styled-components";
import { BaseModalBackground } from "styled-react-modal";
import Box from "./ui-kit/Box";
import MobileHeader from "./ui-kit/MobileHeader";
import MenuNav from "./ui-kit/MenuNav";
import SimpleText from "./ui-kit/SimpleText";
import CloseIcon from "../assets/close-icon.png";
import { breakpoints } from "../utils/screen/Breakpoints";

const animateMenu = keyframes`
  0% {
    transform: translateX(-100%);
  }
  
  30% {
    transform: translateX(-70%);
  }

  70% {
    transform: translateX(-35%);
  }

  100% {
    transform: translateX(0);
  }
`;

const controlBackground = keyframes`
  0%{
    background-color: rgba(0, 0, 0, 0);
  }
  25%{
    background-color: rgba(0, 0, 0, 0);
  }
  50%{
    background-color: rgba(0, 0, 0, 0.1);
  }
  75%{
    background-color: rgba(0, 0, 0, 0.2);
  }
  100% {
    background-color: rgba(0, 0, 0, 0.3);

  }
`;

const Background = styled(BaseModalBackground)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${(props) => (props.isOpen ? animateMenu : null)} 0.4s linear,
    ${(props) => (props.isOpen && !props.isClosed ? controlBackground : null)}
      1.2s ease-in,
    ${(props) => (props.isClosed ? animateMenu : null)} 0.4s linear reverse,
    ${(props) => (props.isClosed ? controlBackground : null)} 0.1s linear reverse;
  transform: translateX(
    ${(props) => (props.isOpen && !props.isClosed ? "0%" : "-100%")}
  );
  background-color: ${props => !props.isClosed ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)"};
`;

const Modal = styled(Box)`
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
  max-width: 286px;
  background-color: #ffffff;
  border-right: solid 1px #003576;

  @media screen and (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`;

const Header = styled(MobileHeader)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  height: 61px;
  border: none;
`;

const rotateCloseIcon = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

const CloseButton = styled("button")`
  height: 17px;
  width: 17px;
  border: none;
  background-color: transparent;
  background-image: url(${CloseIcon});
  background-size: 150%;
  filter: invert(100%);
  background-position: center center;
  background-repeat: no-repeat;
  animation: ${(props) => (props.isOpen ? rotateCloseIcon : null)} 0.8s linear;
`;

const Text = styled(SimpleText)`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #ffffff;
`;

const MobileMenu = (props) => {
  return (
    <Background {...props}>
      <Modal>
        <Header>
          <Text>Menu</Text>
          <CloseButton onClick={props.onClose} isOpen={props.isOpen} />
        </Header>
        <MenuNav logout={props.logout}/>
      </Modal>
    </Background>
  );
};

export default MobileMenu;
