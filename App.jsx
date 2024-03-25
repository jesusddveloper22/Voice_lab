import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Subscription from './Subscription';
import Profile from './Profile';
import Team from './Team';
import Voicecloning from './Voicecloning'; // Importa el componente VoiceCloning

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/team" element={<Team />} />
          <Route path="/voicecloning" element={<Voicecloning />} /> {/* Nueva ruta para VoiceCloning */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;




