import { useState, useContext } from "react";
import AlertContext from "../context/alert-context";
import { useNavigate } from "react-router-dom";
import useBreakpoints from "../hooks/use-breakpoints";
import axios from "axios";
import styled from "styled-components";
import Background from "../components/ui-kit/Background";
import Box from "../components/ui-kit/Box";
import Form from "../components/ui-kit/Form";
import Title from "../components/ui-kit/Title";
import InputShape from "../components/InputShape";
import ReactInputMask from "react-input-mask";
import Button from "../components/ui-kit/Button";
import Checkbox from "../components/ui-kit/Checkbox";
import FormFooter from "../components/ui-kit/FormFooter";
import Input from "../components/ui-kit/Input";
import { Formik } from "formik";
import * as yup from "yup";
import { breakpoints } from "../utils/screen/Breakpoints";
import {
  EMPTY_EMAIL,
  EMPTY_NAME,
  EMPTY_PASSWORD,
  EMPTY_TEL,
  INVALID_EMAIL,
  INVALID_NAME,
  INVALID_TEL,
  PASSWORD_NOT_MATCH,
  STANDARD_ERROR,
  UNIQUE_EMAIL,
  USER_REGISTERED,
} from "../utils/messages/Messages";
import { VALIDATE_FULLNAME } from "../utils/regex/Regex";
import { FIREBASE_URL } from "../envs/env";
import { formatName } from "../utils/functions/Functions";

const BgWrapper = styled(Background)`
  height: 1250px;
`;

const Wrapper = styled(Box)`
  flex-direction: ${(props) => props.flexDir};
  height: ${(props) => props.height};
  align-items: center;
  max-width: 320px;

  & input {
    margin: 0 1rem 0 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: 460px;
  }
`;

const InputsBox = styled(Box)`
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
  min-width: 170px;
  width: 98%;
  max-width: 325px;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 460px;
    align-items: center;
  }

  @media (min-width: ${breakpoints.desktop}) {
    align-items: initial;
  }
`;

const Text = styled("p")`
  font-size: 15px;
  width: 90%;
  margin: 0;
  color: ${(props) => (props.showError ? "#d90404" : null)};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

const schema = yup.object({
  name: yup
    .string()
    .matches(VALIDATE_FULLNAME, INVALID_NAME)
    .required(EMPTY_NAME),
  tel: yup.string().min(15, INVALID_TEL).required(EMPTY_TEL),
  email: yup.string().email(INVALID_EMAIL).required(EMPTY_EMAIL),
  password: yup.string().required(EMPTY_PASSWORD),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], PASSWORD_NOT_MATCH)
    .required(EMPTY_PASSWORD),
  terms: yup.bool().oneOf([true]),
  receiveEmails: yup.bool().notRequired(),
});

const SignUpForm = () => {
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const breakpoint = useBreakpoints();
  const alert = useContext(AlertContext);
  const navigate = useNavigate();

  const register = async (values) => {
    setError({});
    setIsLoading({ button: true });
    const { name, tel, email, password, terms, receiveEmails } = values;

    try {
      const response = await axios.get(
        `${FIREBASE_URL}/users.json?&orderBy="email"&equalTo="${email}"`
      );
      const data = response.data;

      if (Object.keys(data).length > 0) {
        throw new Error("UNIQUE_EMAIL");
      }

      return alert.create("SUCCESS", USER_REGISTERED);
    } catch (err) {
      setIsLoading({ button: false });
      if (err.message === "UNIQUE_EMAIL") {
        return setError({ email: true });
      }

      alert.create("ERROR", STANDARD_ERROR);
    }

    try {
      const user = {
        name: formatName(name),
        tel,
        email,
        password,
        terms,
        receiveEmails,
        isAdmin: false,
      };

      await axios.post(`${FIREBASE_URL}/users.json`, JSON.stringify(user));
    } catch {
      setIsLoading({ button: false });
      return alert.create("ERROR", STANDARD_ERROR);
    }

    setIsLoading({ button: false });
    return navigate("/login");
  };

  return (
    <BgWrapper contentHeight="80%">
      <Formik
        initialValues={{
          name: "",
          tel: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
          receiveEmails: false,
        }}
        validationSchema={schema}
        onSubmit={(values) => {
          register(values);
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
          <Form onSubmit={handleSubmit} height="900px" desktopHeight="980px">
            <Title>
              Cadastro de <b>responsável</b>
            </Title>
            <InputsBox>
              <InputShape
                id="name"
                label="Nome Completo"
                showError={errors.name && touched.name}
                errorMessage={errors.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <InputShape
                label="Telefone"
                showError={errors.tel && touched.tel}
                errorMessage={errors.tel}
              >
                <Input
                  id="tel"
                  as={ReactInputMask}
                  mask="(99) 9 9999-9999"
                  maskPlaceholder={null}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tel}
                  variant={errors.tel && touched.tel ? "error" : null}
                  placeholder={breakpoint !== "desktop" ? "Telefone" : null}
                />
              </InputShape>
              <InputShape
                id="email"
                label="Email"
                showError={(errors.email && touched.email) || error.email}
                errorMessage={
                  errors.email && touched.email ? errors.email : UNIQUE_EMAIL
                }
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <InputShape
                type="password"
                id="password"
                label="Senha"
                showError={errors.password && touched.password}
                errorMessage={errors.password}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <InputShape
                type="password"
                id="confirmPassword"
                label="Confirmar Senha"
                showError={errors.confirmPassword && touched.confirmPassword}
                errorMessage={errors.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
            </InputsBox>
            <Button type="submit" disabled={isLoading.button} showDisable={true}>
              Continuar
            </Button>
            <Wrapper flexDir="column" height="100px">
              <Wrapper height="35%">
                <Checkbox
                  id="terms"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.terms}
                  variant={errors.terms && touched.terms ? "error" : null}
                />
                <Text showError={errors.terms && touched.terms}>
                  Termos e condições de uso.
                </Text>
              </Wrapper>
              <Wrapper height="65%">
                <Checkbox
                  id="receiveEmails"
                  onChange={handleChange}
                  value={values.receiveEmails}
                />
                <Text>
                  Aceito receber ocasionalmente informações e novidades da
                  escola por email.
                </Text>
              </Wrapper>
            </Wrapper>
            <FormFooter
              text="Já tem cadastro?"
              link="Entrar"
              navigate="/login"
            />
          </Form>
        )}
      </Formik>
    </BgWrapper>
  );
};

export default SignUpForm;
