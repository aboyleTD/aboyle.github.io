import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Main from './components/Main'
import Publications from './components/PublicationsPage/publications'
import CvPage from './components/cvPage/cvPage'

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/cv" element={<CvPage />} />
          </Routes>
      </HashRouter>
  );

}
export default App
