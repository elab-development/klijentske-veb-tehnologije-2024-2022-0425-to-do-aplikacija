import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/ReusableComponents/Footer';
import Header from './components/ReusableComponents/Header';
import { User } from './types.ts';
import { useState } from 'react';

function App(){
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return (
    <Router>
      <Header user ={currentUser} setUser={setCurrentUser}/>
      <Footer />
    </Router>
  );
};

export default App;
