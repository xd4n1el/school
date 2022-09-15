import styled from "styled-components";
import Box from "../components/ui-kit/Box";
import HomeFlag from "../components/ui-kit/HomeFlag";
import SimpleText from "../components/ui-kit/SimpleText";
import { breakpoints } from "../utils/screen/Breakpoints";

const Wrapper = styled(Box)`
  flex-direction: column;
  width: 90%;
  height: 85%;
  margin: 3rem 0 0 0;

  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
    align-items: center;
  }
`;

const Content = styled(Box)`
  min-height: 40%;
  max-height: 95%;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;

  & > span {
    margin: 1rem;
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    justify-content: center;
  }
  @media screen and (min-width: ${breakpoints.tablet}) {
    box-sizing: border-box;
    padding: 0 1rem;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: initial;
  }
`;

const Title = styled(SimpleText)`
  font-size: 24px;

  @media screen and (max-width: ${breakpoints.desktop}) {
    margin: 0 5%;
  }
`;

const Welcome = () => {
  return (
    <Wrapper>
      <Title>
        Ano letivo <b>2022</b>
      </Title>
      <Content>
        <HomeFlag
          endDate="ATÉ 23/02"
          title="Rematrículas"
          description="Clique aqui para realizar a matrícula de alunos veteranos."
        />
        <HomeFlag
          endDate="ATÉ 23/02"
          title="Matrículas"
          description="Clique aqui para realizar
          a matrícula de alunos novos."
        />
      </Content>
    </Wrapper>
  );
};

export default Welcome;
