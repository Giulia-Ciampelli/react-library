import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Books from "./pages/Books";
import About from "./pages/About";
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>

        {/* le rotte vanno qui */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
