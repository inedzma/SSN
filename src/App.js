import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Pocetna } from "./pages/Pocetna";
import { Prijava } from "./pages/Prijava";
import { Registracija } from "./pages/Registracija";
import { ZaboravljenaSifra } from './pages/ZaboravljenaSifra';
import { ONama } from "./pages/O nama";
import { Proizvod } from "./pages/Proizvod";
import { Kategorija } from "./pages/Kategorija";
import { Kontakt } from './pages/Kontakt';
import { Korpa } from "./pages/Korpa";
import { Omiljeni } from "./pages/Omiljeni";
import { TrazeniProizvod } from "./pages/TrazeniProizvod";
import { useState } from 'react';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Pocetna onSearch={handleSearch} />} />
                <Route path="prijava" element={<Prijava onSearch={handleSearch} />} />
                <Route path="registracija" element={<Registracija onSearch={handleSearch} />} />
                <Route path="zaboravljena-sifra" element={<ZaboravljenaSifra onSearch={handleSearch} />} />
                <Route path="/:kategorijaIzRute" element={<Kategorija onSearch={handleSearch} />} />
                <Route path="onama" element={<ONama onSearch={handleSearch} />} />
                <Route path="/:kategorija/:id" element={<Proizvod onSearch={handleSearch} />} />
                <Route path="kontakt" element={<Kontakt onSearch={handleSearch} />} />
                <Route path="korpa" element={<Korpa onSearch={handleSearch} />} />
                <Route path="omiljeni" element={<Omiljeni onSearch={handleSearch} />} />
                <Route path="trazeniproizvod" element={<TrazeniProizvod searchTerm={searchTerm} onSearch={handleSearch} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
