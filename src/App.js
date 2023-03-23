import './index.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./Nav";
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import MenuPage from './MenuPage';
import ReservationsPage from './ReservationsPage';
import OrderOnlinePage from './OrderOnlinePage';
import LoginPage from './LoginPage';
import Footer from './Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/about" element={<AboutPage />}/>
    <Route path="/menu" element={<MenuPage />}/>
    <Route path="/reservations" element={<ReservationsPage />}/>
    <Route path="/orderonline" element={<OrderOnlinePage />}/>
    <Route path="/login" element={<LoginPage />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
