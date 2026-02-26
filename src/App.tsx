import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RepoPage from './pages/RepoPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:owner/:repo" element={<RepoPage />} />
    </Routes>
  )
}
