import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Testimonials from './components/Testimonials.jsx'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import FAQ from './components/Faq.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home></Home>} ></Route>
           <Route path='/من-نحن' element={<About></About>} ></Route>
           <Route path='/خدماتنا' element={<Services></Services>} ></Route>
           <Route path='/اتصل-بنا' element={<Contact></Contact>} ></Route>
           <Route path='/المدونة' element={<Blog></Blog>} ></Route>
           <Route path='/المدونة/:slug' element={<BlogDetail></BlogDetail>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
