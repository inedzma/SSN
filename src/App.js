import './App.css';

import {BrowserRouter, Route, Routes, ScrollRestoration} from "react-router-dom";
import {Pocetna} from "./pages/Pocetna";
import {Prijava} from "./pages/Prijava";
import {Registracija} from "./pages/Registracija";
import {ZaboravljenaSifra} from './pages/ZaboravljenaSifra';
import {ONama} from "./pages/O nama";
import {Proizvod} from "./pages/Proizvod";
import {Kategorija} from "./pages/Kategorija";



function App() {
  return (
          <BrowserRouter>
              <Routes>

                      <Route index element={<Pocetna />} />
                      <Route path="prijava" element={<Prijava />} />
                      <Route path="registracija" element={<Registracija />} />
                      <Route path="zaboravljena-sifra" element={<ZaboravljenaSifra />} />
                      <Route path="/:kategorijaIzRute" element={<Kategorija />} />
                      <Route path="onama" element={<ONama />} />
                      <Route path="/:kategorija/:id" element={<Proizvod />} />

                  {/*<Route path="*" element={<NoPage />} />*/}
              </Routes>
          </BrowserRouter>

  );
}

export default App;
