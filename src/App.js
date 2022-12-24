import React, { useState } from "react";
import { Footer } from "./components/styles/Footer.styled";
import { GlobalStyles } from "./components/styles/Global";
import { Header } from "./components/styles/Header.styled";
import Quotes from "./components/Quotes";
import {
  ThemeContainer,
  ThemeButton,
} from "./components/styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import {
  light,
  dark,
  blue,
  green,
  brown,
  pink,
} from "./components/styles/Theme.styled";

function App() {
  // theme state
  const [selectedTheme, setSelectedTheme] = useState(light);
  // function to handle user theme selection on click and save it to local storage
  const HandleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };
  return (
    <ThemeProvider theme={selectedTheme}>
      <div className="App">
        <GlobalStyles />
        <Header>Game of Thrones Quotes</Header>

        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => HandleThemeChange(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => HandleThemeChange(dark)}
          ></ThemeButton>
          <ThemeButton
            className={`blue ${selectedTheme === blue ? "active" : ""}`}
            onClick={() => HandleThemeChange(blue)}
          ></ThemeButton>
          <ThemeButton
            className={`green ${selectedTheme === green ? "active" : ""}`}
            onClick={() => HandleThemeChange(green)}
          ></ThemeButton>
          <ThemeButton
            className={`brown ${selectedTheme === brown ? "active" : ""}`}
            onClick={() => HandleThemeChange(brown)}
          ></ThemeButton>
          <ThemeButton
            className={`pink ${selectedTheme === pink ? "active" : ""}`}
            onClick={() => HandleThemeChange(pink)}
          ></ThemeButton>
        </ThemeContainer>

        <Quotes />

        <Footer>
          <p>Created by Ian!</p>
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
