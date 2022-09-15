import { createContext, useContext, useEffect, useState } from "react";
import AlertContext from "./alert-context";
import axios from "axios";
import { FIREBASE_URL } from "../envs/env";
import { USER_NOT_FOUND } from "../utils/messages/Messages";

const AuthContext = createContext({
  isLogin: false,
  login: (email, password) => {},
  logout: () => {},
  user: {},
  error: {},
});

export const AuthProvider = (props) => {
  const alert = useContext(AlertContext);
  const [error, setError] = useState({});
  const [isLogin, setIsLogin] = useState();
  const [user, setUser] = useState({});

  useEffect(() => {
    const online = localStorage.getItem("isLogin");

    if (online === "1") {
      const profile = localStorage.getItem("profile");

      setUser(JSON.parse(profile));
      return setIsLogin(true);
    }

    setUser({});
    setIsLogin(false);
  }, []);

  const login = async (values) => {
    setError({});
    const { email: typedEmail, password: typedPassword } = values;

    try {
      const response = await axios.get(
        `${FIREBASE_URL}/users.json?&orderBy="email"&equalTo="${typedEmail}"`
      );
      const data = response.data;

      const userData = Object.values(data);

      if (userData.length === 0) {
        throw new Error("EMAIL");
      }

      const user = Object.keys(data);
      const id = user[0];

      const { password, name, isAdmin } = userData[0];

      if (password !== typedPassword) {
        throw new Error("PASSWORD");
      }

      const profile = {
        id,
        name,
        isAdmin,
      };

      localStorage.setItem("isLogin", "1");
      localStorage.setItem("profile", JSON.stringify(profile));

      setIsLogin(true);
    } catch (err) {
      if (err.message === "EMAIL") {
        return setError({ email: true });
      } else if (err.message === "PASSWORD") {
        return setError({ password: true });
      }
      return alert.create("ERROR", USER_NOT_FOUND);
    }
  };

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
    setUser({});
  };

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        login,
        logout,
        user,
        error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
