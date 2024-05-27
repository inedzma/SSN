import './App.css';

import {BrowserRouter, Route, Routes, ScrollRestoration} from "react-router-dom";
import Layout from "./components/Layout";
import {Pocetna} from "./pages/Pocetna";
import {Kategorije} from "./pages/Kategorije";
import {Prijava} from "./pages/Prijava";
import {Registracija} from "./pages/Registracija";
import {ZaboravljenaSifra} from './pages/ZaboravljenaSifra';  
import { Kontakt } from './pages/Kontakt';



function App() {
  return (
          <BrowserRouter>
              <Routes>

                      <Route index element={<Pocetna />} />
                      <Route path="product-list" element={<Kategorije />} />
                      <Route path="prijava" element={<Prijava />} />
                      <Route path="registracija" element={<Registracija />} />
                      <Route path="zaboravljena-sifra" element={<ZaboravljenaSifra />} />
                      <Route path="kontakt" element={<Kontakt />} />
                      {/*<Route path="*" element={<NoPage />} />*/}
              </Routes>
          </BrowserRouter>

  );
}

export default App;
