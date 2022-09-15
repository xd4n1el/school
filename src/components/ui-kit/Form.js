import styled from "styled-components";
import { breakpoints } from "../../utils/screen/Breakpoints";

const FormModel = styled("form")`
  display: flex;
  width: 90%;
  height: ${(props) => props.height};
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.tablet}) {
    box-sizing: border-box;
    padding: 0 1.5rem;
    max-width: 400px;
    align-items: initial;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    align-items: center;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    height: ${(props) => props.desktopHeight};
    align-items: initial;
    max-width: 460px;
  }
`;

const Form = (props) => {
  return <FormModel {...props}>{props.children}</FormModel>;
};

export default Form;
