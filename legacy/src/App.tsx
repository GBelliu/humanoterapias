import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
