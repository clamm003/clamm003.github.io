import { StrictMode }          from 'react';
import { createRoot }           from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Layout   from './components/Layout';
import Home     from './pages/Home';
import Projects from './pages/Projects';
import Skills   from './pages/Skills'
import CVPage   from './pages/CV';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/"         element={<Home     />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills"   element={<Skills   />} />
          <Route path="/cv"       element={<CVPage   />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);