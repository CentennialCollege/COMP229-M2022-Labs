import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Common Components
import Header from './components/header';
import Footer from './components/footer';

// Content Components
import Home from './content/home';
import About from './content/about';
import Projects from './content/projects';
import Services from './content/services';
import Contact from './content/contact';
import PageNotFound from './content/PageNotFound';

// Authentication Components
import Login from './authentication/login';
import Register from './authentication/register';
import Logout from './authentication/logout';

// Styles and Fonts
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css';


function App() {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>

      {/* Client-Side Routing */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
