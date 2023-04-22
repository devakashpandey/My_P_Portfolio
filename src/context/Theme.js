import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext(); // creating a context

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const toggeltheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeContext.Provider value={[{ theme, toggeltheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
