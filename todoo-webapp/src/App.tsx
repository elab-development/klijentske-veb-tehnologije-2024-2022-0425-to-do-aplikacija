import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/ReusableComponents/Header.tsx';
import Footer from './components/ReusableComponents/Footer.tsx';
import Categories from './components/Categories/Categories.tsx';
import Pricing from './components/Pricing/Pricing.tsx';
import Contact from './components/Contact/Contact.tsx';
import SignIn from './components/SignIn/SignIn.tsx';
import About from './components/About/About.tsx';
import Daily from './components/Daily/Daily.tsx';
import Travel from './components/Travel/Travel.tsx';
import Register from './components/SignIn/Register.tsx';
import Profile from './components/Profil/Profile.tsx'
import { User } from './types.ts';
import { useState } from 'react';


function App(){
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <Router>
      <Header user ={currentUser} setUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/kategorije" element={<Categories />} />
        <Route path="/cenovnik" element={<Pricing />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/prijavi-se" element={<SignIn setUser={setCurrentUser} />} />
        <Route path="/daily" element={<Daily user ={currentUser} setUser={setCurrentUser}/>} />
        <Route path="/travel" element={<Travel user ={currentUser} setUser={setCurrentUser}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/profil" element={<Profile user ={currentUser} setUser={setCurrentUser} />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
