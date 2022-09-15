import styled from "styled-components";
import ConfirmIcon from "../../assets/confirm-icon.png";
import { variant } from "styled-system";

const CheckWrapper = styled("span")(
  {
    height: "21px",
    width: "21px",
    borderRadius: "5px",
    border: "solid 1.45px #868e96",
    appearance: "none",

    "&:checked": {
      borderColor: "transparent",
      backgroundColor: "#58edc9",
      backgroundImage: `url(${ConfirmIcon})`,
      backgroundPosition: "center",
      backgroundSize: "95%",
      backgroundRepeat: "no-repeat",
    },
  },
  variant({
    variants: {
      error: {
        borderColor: "#d90404",
      },
    },
  })
);

const Checkbox = (props) => {
  return <CheckWrapper as="input" {...props} type="checkbox" />;
};

export default Checkbox;
