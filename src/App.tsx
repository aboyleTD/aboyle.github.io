import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Main from './components/Main'
import AboutPage from './components/AboutPage/aboutPage'
import Publications from './components/PublicationsPage/publications'
import CvPage from './components/cvPage/cvPage'

function App() {
  return (
      <HashRouter>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/cv" element={<CvPage />} />
          </Routes>
      </HashRouter>
  );

}
export default App
