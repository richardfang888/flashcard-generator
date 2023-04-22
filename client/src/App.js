import Flash from './scenes/studySetPage/studySetPage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/studyset" element={<Flash/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
