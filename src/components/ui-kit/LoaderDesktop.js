import styled, { keyframes } from "styled-components";
import Box from "./Box";

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const Loader = styled(Box)`
  width: 60px;
  height: 60px;
  border: solid 12px #d4d4d4;
  border-top: solid 12px #3c3c3b;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

const LoaderDesktop = () => {
  return <Loader></Loader>;
};

export default LoaderDesktop;
