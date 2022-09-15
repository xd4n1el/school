import { useContext, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { variant } from "styled-system";
import Box from "./ui-kit/Box";
import SimpleText from "./ui-kit/SimpleText";
import ERRORICON from "../assets/error.png";
import SUCCESSICON from "../assets/checked.png";
import AlertContext from "../context/alert-context";

const moveIn = keyframes`
  from {
    transform: translateX(-200%);
  }
  to {
    transform: translateX(0);
  }
`;

const moveOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-200%);
  }
`;

const PopUp = styled(Box)(
  (props) => ({
    position: "fixed",
    display: "flex",
    alignItems: "center",
    minWidth: "160px",
    width: "80%",
    maxWidth: "350px",
    height: "100px",
    borderRadius: "12px",
    margin: "9rem 1rem",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    transform: `${props.show ? "translateX(0)" : "translateX(-200%)"}`,
    boxSizing: "border-box",
    padding: "0 1rem",
    boxShadow: "0px 18px 32px rgba(0, 0, 0, 0.05)",
    zIndex: "99",

    "@media screen and (min-width: 1200px)": {
      margin: "1rem 1rem",
    },
  }),
  css`
    animation: ${(props) => (props.show ? moveIn : null)} 0.8s linear,
      ${(props) => (props.show === false ? moveOut : null)} 0.8s linear;
  `,
  variant({
    variants: {
      animation: {
        transform: "translateX(0%)",
      },
    },
  })
);

const Icon = styled(Box)(
  {
    width: "40px",
    height: "40px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "100%",
  },
  variant({
    variants: {
      ERROR: {
        backgroundImage: `url(${ERRORICON})`,
      },
      SUCCESS: {
        backgroundImage: `url(${SUCCESSICON})`,
      },
    },
  })
);

const Text = styled(SimpleText)({
  margin: "0 1.5rem",
  fontSize: "18px",
  fontWeight: 700,
});

const Alert = () => {
  const [create, setCreate] = useState({});
  const AlertCtx = useContext(AlertContext);

  useEffect(() => {
    const { show, type, message } = AlertCtx.alert;

    if (AlertCtx.alert.show) {
      return setCreate({
        show,
        type,
        message,
      });
    }
    setCreate({
      show,
      type,
      message,
    });
    // eslint-disable-next-line
  }, [AlertCtx.alert.show]);

  return (
    <PopUp show={create.show} variant={create.show ? "animation" : null}>
      <Icon variant={create.type} />
      <Text>{create.message}</Text>
    </PopUp>
  );
};

export default Alert;
