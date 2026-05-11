import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import ScrollToTop from './components/ScrollToTop'
import { Home, About, Contact, Gallary, Services, Detailservice, PageNotFound } from './pages'
import LoadingPage from './pages/LoadingPage'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let loaded = false

    const onLoad = () => {
      if (loaded) return
      loaded = true
      // small delay so loading splash is visible briefly
      setTimeout(() => setLoading(false), 600)
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      // fallback timeout in case load event doesn't fire quickly
      const t = setTimeout(onLoad, 1200)
      return () => {
        window.removeEventListener('load', onLoad)
        clearTimeout(t)
      }
    }
  }, [])

  if (loading) return <LoadingPage />

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallary' element={<Gallary />} />
          <Route path='/services' element={<Services />} />
          <Route path='/detailservice/:id' element={<Detailservice />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App