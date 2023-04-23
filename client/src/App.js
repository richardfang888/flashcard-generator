import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import LoginPage from "./scenes/loginPage/loginPage";
import HomePage from "./scenes/homepage/homePage"
import StudyPage from "./scenes/studySetPage/studySetPage"
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from 'react-redux';

function App() {
  const theme = createTheme(themeSettings())
  const user = useSelector(state => state.user)
  return (
    <div className = 'app'>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path={`/users/${user}`} element={<HomePage />}/>
              <Route path="/:" element={<StudyPage />}/>
            </Routes>
        </CssBaseline>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
