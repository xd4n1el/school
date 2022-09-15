import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/auth-contenxt";
import styled from "styled-components";
import Background from "../components/ui-kit/Background";
import Box from "../components/ui-kit/Box";
import Form from "../components/ui-kit/Form";
import Title from "../components/ui-kit/Title";
import InputShape from "../components/InputShape";
import Button from "../components/ui-kit/Button";
import FormFooter from "../components/ui-kit/FormFooter";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as yup from "yup";
import { breakpoints } from "../utils/screen/Breakpoints";
import {
  INVALID_EMAIL,
  EMPTY_EMAIL,
  EMPTY_PASSWORD,
  PASSWORD_TOO_SHORT,
  USER_NOT_FOUND,
  WRONG_PASSWORD,
} from "../utils/messages/Messages";

const Wrapper = styled(Background)`
  height: 900px;
`;

const InputsBox = styled(Box)`
  flex-direction: column;
  justify-content: space-between;
  min-width: 170px;
  width: 98%;
  height: 40%;
  max-width: 325px;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 460px;
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    align-items: initial;
    height: 40%;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  height: 22px;
  font-size: 16px;
  font-weight: 600;
  color: #003576;
  cursor: pointer;
`;

const schema = yup.object({
  email: yup.string().email(INVALID_EMAIL).required(EMPTY_EMAIL),
  password: yup.string().min(6, PASSWORD_TOO_SHORT).required(EMPTY_PASSWORD),
});

const LoginForm = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [authError, setAuthError] = useState({});

  useEffect(() => {
    if (auth.error.email) {
      return setAuthError({ email: true });
    } else if (auth.error.password) {
      return setAuthError({ password: true });
    }
    setAuthError({});
  }, [auth.error]);

  useEffect(() => {
    if (auth.isLogin) {
      navigate("/home");
    }
    // eslint-disable-next-line
  }, [auth.isLogin]);

  return (
    <>
      {auth.isLogin ? (
        <Navigate to="/home" />
      ) : (
        <Wrapper contentHeight="70%">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={(values) => {
              auth.login(values);
            }}
          >
            {({
              errors,
              touched,
              values,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <Form
                height="550px"
                desktopHeight="650px"
                onSubmit={handleSubmit}
              >
                <Title>
                  Bem-vindo(a) ao <br />
                  <b>portal dos pais</b>
                </Title>
                <InputsBox>
                  <InputShape
                    id="email"
                    label="Email"
                    showError={
                      (errors.email && touched.email) || authError.email
                    }
                    errorMessage={
                      errors.email && touched.email
                        ? errors.email
                        : USER_NOT_FOUND
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    onFocus={() => {
                      if (authError.email) {
                        setAuthError({});
                      }
                    }}
                  />
                  <InputShape
                    type="password"
                    id="password"
                    label="Senha"
                    showError={
                      (errors.password && touched.password) ||
                      authError.password
                    }
                    errorMessage={
                      errors.password && touched.password
                        ? errors.password
                        : WRONG_PASSWORD
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    onFocus={() => {
                      if (authError.password) {
                        setAuthError({});
                      }
                    }}
                  />
                  <Link to="/">Esqueci minha senha</Link>
                </InputsBox>
                <Button type="submit">Entrar</Button>
                <FormFooter
                  text="Ainda não tem cadastro?"
                  link="Criar conta"
                  navigate="/signup"
                />
              </Form>
            )}
          </Formik>
        </Wrapper>
      )}
    </>
  );
};

export default LoginForm;
