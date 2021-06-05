import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "react-css-theme-switcher";
import sunIcon from '../assets/icons/sun-icon.svg';

export default function ThemeSwitcher() {
  const theme = window.localStorage.getItem("theme");
  const [isDarkMode, setIsDarkMode] = useState(!theme || theme === "dark");
  const { switcher, currentTheme, status, themes } = useThemeSwitcher();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = isChecked => {
    setIsDarkMode(isChecked);
    switcher({ theme: isChecked ? themes.dark : themes.light });
  };

  // Avoid theme change flicker
  // if (status === "loading") {
  //   return null;
  // }

  return (
    <div className="main fade-in" style={{ display: 'inline' }}>
      {/*<span style={{ padding: 8 }}>{currentTheme === "light" ? "☀️" : "🌜"}</span>*/}
      {/*<Switch checked={isDarkMode} onChange={toggleTheme} />*/}
      <button
        className="btn btn-dark btn-overwrite-primer m-2 theme-switcher-btn"
        href="#"
        title="Change Theme" onClick={toggleTheme}>
        <img src={sunIcon} />
    </button>
    </div>

  );
}
