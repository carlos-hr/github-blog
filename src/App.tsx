import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { IssuesProvider } from "./contexts/IssuesContext";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <IssuesProvider>
          <Router />
        </IssuesProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
