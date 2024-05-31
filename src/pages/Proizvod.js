import React, { useEffect, useState, useRef } from "react";
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { sviProizvodi } from "../sviProizvodi";

const Popover = ({ targetId, message }) => {
    const [visible, setVisible] = useState(false);
    const popoverRef = useRef(null);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const targetElement = document.getElementById(targetId);

        const showPopover = () => {
            setVisible(true);
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setVisible(false);
            }, 4000);
        };

        if (targetElement) {
            targetElement.addEventListener('click', showPopover);

            return () => {
                targetElement.removeEventListener('click', showPopover);
                clearTimeout(timeoutRef.current);
            };
        }
    }, [targetId]);

    return (
        <div className="w-full flex justify-center items-center">
            <div
                ref={popoverRef}
                className={`p-2 absolute z-10 w-2/5 m-2 text-sm text-gray-500 transition-opacity duration-300 bg-customColor6 rounded-lg shadow-sm dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800 ${
                    visible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                style={{ top: '75px' }} // Adjust position as needed
            >
                <div className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
                    <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-500">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                        <h3 className="pl-3 font-semibold text-gray-900 dark:text-white">
                            {message}
                        </h3>
                    </div>
                    <a href={targetId === "popoverKorpa" ? "/korpa" : "/omiljeni"}>
                        <button className="bg-customColor text-white font-bold py-2 px-3 rounded-lg hover:bg-blue-600">
                            {targetId === "popoverKorpa" ? "Vidi korpu" : "Vidi omiljene"}
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

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
            <div className="proizvod flex justify-center items-center max-w-6xl mx-auto mt-16 mb-24 my-4">
                <div className="flex-none p-4">
                    <div className="mb-4 max-w-md">
                        <img src={proizvod.slikaSrc} alt={proizvod.slikaAlt} className="rounded max-w-full h-auto" />
                    </div>
                </div>
                <div className="opis pl-10 flex-2 mt-16 justify-center align-center">
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
                    <div className="">
                        <div className="flex mt-12">
                            <FiShoppingCart className="ml-12 size-6 mr-3 text-gray-500" style={{ pointerEvents: 'none' }} />
                            <FiHeart className="size-6 ml-40 mr-2 text-gray-500" style={{ pointerEvents: 'none' }} />
                        </div>
                        <div className="flex items-center mt-4">
                            <button data-popover id="popoverKorpa" onClick={handleAddToCart}
                                className="bg-customColor2 font-bold rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u korpu
                            </button>
                            <button data-popover id="popoverOmiljeni" onClick={handleAddToFavorites}
                                className="ml-12 bg-customColor2 font-bold rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u
                                omiljene
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Popover targetId="popoverKorpa" message="Proizvod dodan u korpu" />
            <Popover targetId="popoverOmiljeni" message="Proizvod dodan u omiljene" />
        </Layout>
    );
};
