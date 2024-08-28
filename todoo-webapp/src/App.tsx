import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/ReusableComponents/Header.tsx';
import Footer from './components/ReusableComponents/Footer.tsx';
import About from './components/About/About.tsx';
import Categories from './components/Categories/Categories.tsx';
import Contact from './components/Contact/Contact.tsx';
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
        <Route path="/kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
