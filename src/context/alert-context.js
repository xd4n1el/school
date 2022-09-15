import { useState, createContext } from "react";

const AlertContext = createContext({
  alert: {},
  create: (type, message, timeout) => {},
});

export const AlertProvider = (props) => {
  const [showAlert, setShowAlert] = useState({});

  const createAlert = (type, message, timeout) => {
    if (showAlert.show) {
      return;
    }
    setShowAlert({
      show: true,
      type,
      message,
    });

    setTimeout(
      () => {
        setShowAlert({
          show: false,
          type: "",
          message: "",
        });
      },
      timeout ? timeout : 5000
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: showAlert,
        create: createAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
