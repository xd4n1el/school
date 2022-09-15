import styled from "styled-components";
import { variant } from "styled-system";

const InputModel = styled("input")(
  {
    height: "65px",
    minWidth: "170px",
    width: "100%",
    border: "solid 1.45px #868E96",
    borderRadius: "8px",
    boxSizing: "border-box",
    padding: "0 1rem",
    fontFamily: "Open sans, sans-serif",
    color: "#3C3C3B",
    maxWidth: "320px",

    ":focus": {
      border: "solid 1.45px #868E96",
      outline: 0,
    },

    "::placeholder": {
      fontSize: "14px",
      color: "#3C3C3B",
      opacity: "50%",
    },

    "@media screen and (min-width: 1200px)": {
      maxWidth: "460px",
    },
  },
  variant({
    variants: {
      error: {
        border: "solid 1px #D90400",

        ":focus": {
          border: "solid 1px #D90400",
        },
      },
    },
  })
);
const Input = (props) => {
  return <InputModel {...props} />;
};

export default Input;
