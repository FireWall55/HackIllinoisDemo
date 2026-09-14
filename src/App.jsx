import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import JudgesPage from "./pages/JudgesPage.jsx";
import MentorsPage from "./pages/MentorsPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/mentors" element={<MentorsPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;