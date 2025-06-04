import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Features from '../pages/Features'
import Pricing from '../pages/Pricing'
import Blog from '../pages/Blog'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      
    </Routes>
  )
}
