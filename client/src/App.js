import Flash from './scenes/studySetPage/studySetPage'
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import LoginPage from "./scenes/loginPage/loginPage";
import HomePage from "./scenes/homepage/homePage"
import { useSelector, Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const isAuth = Boolean(useSelector((state) => state.token));
  const theme = createTheme(themeSettings())
  return (
    <div className = 'app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />}/> {/* {isAuth ? <homePage /> : <Navigate to="/" />} */}
              <Route path="/studyset/:userId" element={<Flash/>}/>
            </Routes>
        </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
