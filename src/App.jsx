import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import FiturHarga from './pages/FiturHarga'
import TentangKontak from './pages/TentangKontak'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="fitur-harga" element={<FiturHarga />} />
          <Route path="tentang-kontak" element={<TentangKontak />} />
        </Route>
        {/* Unknown URLs rendered an empty page; send them home instead. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
