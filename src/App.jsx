import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToHash from "./components/ScrollToHash";
import useReveal from "./components/hooks/useReveal";
export default function App() {
  useReveal();
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
}
