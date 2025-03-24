import React from 'react';
import Navbar from './assets/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Hero from './assets/head';
import Feature from './assets/feature';
import Footer from './assets/footer';
import SignIn from './assets/signIn';
import Faq from './assets/faq';

const App: React.FC = () => {
  return (
      <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<><Hero /><Feature /> </> } />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes */}
          </Routes>
        <Footer />
    </Router>
      </div>
  );
};

export default App;
