import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import FryersPage from './pages/FryersPage'
import PotatoChipsLinePage from './pages/PotatoChipsLinePage'
import TofuLinePage from './pages/TofuLinePage'
import CompleteSolutionsPage from './pages/CompleteSolutionsPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fryers" element={<FryersPage />} />
          <Route path="/potato-chips-line" element={<PotatoChipsLinePage />} />
          <Route path="/tofu-line" element={<TofuLinePage />} />
          <Route path="/complete-solutions" element={<CompleteSolutionsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
