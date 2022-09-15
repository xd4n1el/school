import styled from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AlertProvider } from "../context/alert-context";
import { AuthProvider } from "../context/auth-contenxt";
import { ModalProvider } from "styled-react-modal";
import SignUp from "../pages/SignUpForm";
import Login from "../pages/LoginForm";
import Alert from "../components/Alert";
import Home from "../pages/Home";
import Dependents from "../pages/Dependents";
import SchoolRegistry from "../pages/SchoolRegistry";

const MainContent = styled("main")({
  display: "flex",
  width: "100%",
  height: "100%",
});

const Main = () => {
  return (
    <>
      <AlertProvider>
        <AuthProvider>
          <BrowserRouter>
            <ModalProvider>
              <MainContent>
                <Alert />
                <Routes>
                  <Route path="/*" element={<p>not exists</p>} />
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/dependentes" element={<Dependents />} />
                  <Route path="/matriculas" element={<SchoolRegistry />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                </Routes>
              </MainContent>
            </ModalProvider>
          </BrowserRouter>
        </AuthProvider>
      </AlertProvider>
    </>
  );
};

export default Main;
