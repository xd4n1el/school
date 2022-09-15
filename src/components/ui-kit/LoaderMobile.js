import styled, { keyframes } from "styled-components";
import Box from "./Box";
import SimpleText from "./SimpleText";

const Wrapper = styled(Box)`
  width: 60px;
  height: 48px;
  font-size: 42px;
  overflow: hidden;
`;

const showDot = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Text = styled(SimpleText)`
//   opacity: 0;
  animation: ${(props) => props.animation} ${(props) => props.timing} linear infinite alternate;
`;

const LoaderMobile = () => {
  return (
    <Wrapper>
      <Text animation={showDot} timing="1s">.</Text>
      <Text animation={showDot} timing="1.2s">
        .
      </Text>
      <Text animation={showDot} timing="1.4s">
        .
      </Text>
    </Wrapper>
  );
};

export default LoaderMobile;
