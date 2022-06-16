import React, { useState, useEffect } from 'react';
import { ThemeContext, themes } from './theme';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useState(themes.light);

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    const root = document.querySelector(':root')
    switch (theme) {
      case themes.light:
        root.style.setProperty('--background', ' hsl(0, 0, 98%)')
        root.style.setProperty('--details', ' hsl(0, 0%, 100%)')
        root.style.setProperty('--font-color', ' hsl(200, 15%, 8%)')
        root.style.setProperty('--filter', '  hsl(0, 0%, 100%)')
        break;
      case themes.dark:
      default:
        root.style.setProperty('--background', ' hsl(207, 26%, 17%)')
        root.style.setProperty('--details', ' hsl(209, 23%, 22%)')
        root.style.setProperty('--font-color', ' hsl(0, 0%, 100%)')
        root.style.setProperty('--filter', '  hsl(209, 23%, 22%)')
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}