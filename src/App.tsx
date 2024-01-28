import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Contato from "./components/Contato";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        <Routes>
          <Route index element={<Home />} />

          <Route path="/midia" element={<>bbbbbb</>} />
        </Routes>
        <Contato />
        <Footer />
      </main>
    </>
  );
}

export default App;
