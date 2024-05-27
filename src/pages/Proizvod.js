import React from "react";
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import Layout from "../components/Layout";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { sviProizvodi } from "../sviProizvodi";

export const Proizvod = () => {
    const params = useParams();
    const kategorijaIzRute = params.kategorija;
    const idIzRute = params.id;

    const proizvod = sviProizvodi.find(proizvod => proizvod.kategorija === kategorijaIzRute && proizvod.id === parseInt(idIzRute));

    const [kolicina, setQuantity] = useState(1);

    const handleAddToFavorites = () => {
        const newItem = {
            id: proizvod.id,
            ime: proizvod.ime,
            cijena: proizvod.cijena, 
            slikaSrc: proizvod.slikaSrc
        };
        const currentFavorites = JSON.parse(localStorage.getItem('omiljeniProizvodi')) || [];
        const productIndex = currentFavorites.findIndex((item) => item.id === proizvod.id);

        if (productIndex === -1) {
            currentFavorites.push(newItem);
        } else {
            window.alert('Proizvod je već dodan u omiljene');
        }

        localStorage.setItem('omiljeniProizvodi', JSON.stringify(currentFavorites));
        console.log(`${proizvod.ime} dodan u omiljene`);
    };

    const handleAddToCart = () => {
        const newItem = {
            id: proizvod.id,
            ime: proizvod.ime,
            cijena: proizvod.cijena, 
            quantity: kolicina,
            slikaSrc: proizvod.slikaSrc
        };
        const currentCart = JSON.parse(localStorage.getItem('korpa')) || [];
        const productIndex = currentCart.findIndex((item) => item.id === proizvod.id);

        if (productIndex !== -1) {
            currentCart[productIndex].quantity += kolicina;
        } else {
            currentCart.push(newItem);
        }
        localStorage.setItem('korpa', JSON.stringify(currentCart));
        console.log(`${proizvod.ime} dodan u korpu. Količina: ${kolicina}`);
    };

    if (!proizvod) {
        return <p>Proizvod nije pronađen</p>;
    }

    return (
        <Layout>
            <div className="flex max-w-6xl mx-auto mt-24 mb-24 my-4 pl-20">
                <div className="flex-none p-4">
                    <div className="mb-4 max-w-md">
                        <img src={proizvod.slikaSrc} alt={proizvod.slikaAlt} className="rounded max-w-full h-auto" />
                    </div>
                </div>
                <div className="flex-2 pl-16 mt-16">
                    <h1 className="text-3xl mb-2">{proizvod.ime}</h1>
                    <p className="mb-4">{proizvod.opis}</p>
                    <div className="flex items-center mt-2">
                        <span className="mt-5 text-gray-500 mr-2">Cijena:</span>
                        <span className="mt-5 text-red-600 font-bold">{(parseFloat(proizvod.cijena)).toFixed(2)} KM</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <label htmlFor="kolicina" className="mr-2 text-gray-500">Količina:</label>
                        <input
                            type="number"
                            id="kolicina"
                            name="kolicina"
                            value={kolicina}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            min="1"
                            className="border rounded p-1 w-14 text-center"
                        />
                    </div>
                    <div className="flex mt-12">
                        <FiShoppingCart className="ml-12 size-6 mr-3 text-gray-500" style={{ pointerEvents: 'none' }} />
                        <FiHeart className="size-6 ml-40 mr-2 text-gray-500" style={{ pointerEvents: 'none' }} />
                    </div>
                    <div className="flex items-center mt-4">
                        <button onClick={handleAddToCart}
                                className="bg-customColor2 rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u korpu
                        </button>
                        <button onClick={handleAddToFavorites}
                                className="ml-12 bg-customColor2 rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u
                            omiljene
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};
