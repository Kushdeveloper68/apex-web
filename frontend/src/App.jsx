import './App.css'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import Layout from './Layout'
import {Home, About, Contact, Gallary, Services, Detailservice} from "./pages"
function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallary' element={<Gallary/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/detailservice' element={<Detailservice/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
