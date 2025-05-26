import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './pages/Layout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Newsletter from './pages/Newsletter'
import NoPage from './pages/NoPage'
import BlogPost from './pages/BlogPost'
import './App.css'
import './index.css'

function App() {

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="blog" element={<Blog />}/>
        <Route path="blog/:slug" element={<BlogPost />}/>
        <Route path="about" element={<About />}/>
        <Route path="newsletter" element={<Newsletter />}/>
        <Route path="*" element={<NoPage />}/>
      </Route>
    </Routes>
   </BrowserRouter>
  )
} 

export default App
