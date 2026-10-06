import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
      </Routes>
    </BrowserRouter>
  )
}

export default App
