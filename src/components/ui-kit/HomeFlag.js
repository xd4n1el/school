import styled from "styled-components";
import { breakpoints } from "../../utils/screen/Breakpoints";

const FlagBox = styled("span")`
  display: ${(props) => props.display};
  width: 90%;
  max-width: 320px;
  height: 280px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  background-image: url(${props => props.bgImg});
  background-repeat: no-repeat;
  background-position: bottom right;
  
  @media screen and (min-width: ${breakpoints.desktop}) {
    height: 277px;
    max-width: 495px;
    background-position: bottom right;
  }
`;

const Flag = styled("span")({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  height: "100%",
  boxSizing: "border-box",
  padding: "1rem",
});

const Title = styled("h1")({
  fontSize: "24px",
  fontWeight: 400,
});

const Tag = styled("span")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "34px",
  width: "90px",
  backgroundColor: "#58EDC9",
  borderRadius: "8px",
  fontSize: "13px",
  fontWeight: "bold",
  color: "#003576",
});

const Description = styled("p")({
  margin: 0,
  fontSize: "14px",
  fontWeight: 300,
});

const HomeFlag = (props) => {
  return (
    <FlagBox {...props}>
      <Flag>
        <Tag>{props.endDate}</Tag>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
      </Flag>
    </FlagBox>
  );
};

export default HomeFlag;
