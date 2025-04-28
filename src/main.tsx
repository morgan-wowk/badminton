import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import SocialMixerPage from './pages/SocialMixerPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/activities/social-mixer" element={<SocialMixerPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
