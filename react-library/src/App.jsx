// #region variabili d'importazione
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pagine
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Books from "./pages/Books";
import About from "./pages/About";

// layout
import DefaultLayout from "./pages/DefaultLayout";

// stile
import './App.css';
// #endregion variabili d'importazione

function App() {

  return (
    <BrowserRouter>

      {/* le rotte vanno qui */}
      <Routes>

        {/* come si mettono i componenti? Con outlet, ATTENZIONE AI TAG DI CHIUSURA! */}
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
