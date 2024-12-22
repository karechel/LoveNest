import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import MyAppBar from './reusableComponents/appbar';
import IndexContent from './Pages/indexContent';
import AboutPage from './Pages/AboutPage';
import ColorChangeOnScroll from './Pages/ColorChangeOnScroll'; // Assuming ColorChangeOnScroll is in the same directory

function App() {
  return (
    <BrowserRouter>
      <div> 
    <MyAppBar />
    <Routes>       
    <Route path="/" element={<IndexContent />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/test" element={<ColorChangeOnScroll />} />
    </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
