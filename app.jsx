import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error from './pages/Error';

function App() {
  const basename = import.meta.env.MODE === 'production' ? '/kasa' : '';

  return (
    <Router basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location/:id" element={<Location />}