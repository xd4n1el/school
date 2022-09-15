import styled from "styled-components";
import shouldForwardProp from "@styled-system/should-forward-prop";

const Text = styled("p").withConfig({ shouldForwardProp })`
  color: #3c3c3b;
  font-weight: 400;
  margin: 0;
`;

const SimpleText = (props) => {
  return <Text {...props}></Text>;
};

export default SimpleText;
