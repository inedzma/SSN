import './App.css';

import {BrowserRouter, Route, Routes, ScrollRestoration} from "react-router-dom";
import Layout from "./components/Layout";
import {Pocetna} from "./pages/Pocetna";
import {Kategorije} from "./pages/Kategorije";
import {Prijava} from "./pages/Prijava";
import {Registracija} from "./pages/Registracija";
import {Ogrlice} from "./pages/Ogrlice";



function App() {
  return (
          <BrowserRouter>
              <Routes>

                      <Route index element={<Pocetna />} />
                      <Route path="product-list" element={<Kategorije />} />
                      <Route path="prijava" element={<Prijava />} />
                      <Route path="registracija" element={<Registracija />} />
                       <Route path="ogrlice" element={<Ogrlice />} />
                      {/*<Route path="*" element={<NoPage />} />*/}
              </Routes>
          </BrowserRouter>

  );
}

export default App;
