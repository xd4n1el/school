import styled from "styled-components";

const BodyModel = styled("div")`
  display: flex;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Body = (props) => {
  return <BodyModel>{props.children}</BodyModel>;
};

export default Body;
