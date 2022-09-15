import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContext from "../../context/auth-contenxt";
import Box from "./Box";
import ExpandButton from "./ExpandButton";
import SimpleText from "./SimpleText";
import { cutName } from "../../utils/functions/Functions";
import LoaderMobile from "./LoaderMobile";

const Wrapper = styled(Box)`
  align-items: center;
  justify-content: space-between;
  height: 45px;
  width: 80%;
  max-width: 194px;
  background-color: #ffffff;
  border-radius: 14px;
  box-sizing: border-box;
  padding: 0 1rem;
`;

const Text = styled(SimpleText)`
  font-size: 14px;
  color: #000000;
`;

const LogouButton = (props) => {
  const [name, setName] = useState();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth.user.name) {
      setName(cutName(auth.user.name));
    }
  }, [auth.user.name]);

  return (
    <Wrapper>
      { name ?
        <Text>Oi, {`${name}`}</Text>
        :
        <LoaderMobile />
      }
      <ExpandButton onClick={() => props.onClick()} />
    </Wrapper>
  );
};

export default LogouButton;
