import React from "react";
import { FiShoppingCart, FiHeart } from 'react-icons/fi'
import Layout from "../components/Layout";
import {useState} from "react";
import {useParams} from "react-router-dom";
import {sviProizvodi} from "../sviProizvodi";


export const Proizvod = () => {
    const params = useParams()
    const kategorijaIzRute = params.kategorija
    const idIzRute = params.id

    const proizvod = sviProizvodi.find(product => product.kategorija === kategorijaIzRute && product.id === parseInt(idIzRute));

    const [kolicina, setQuantity] = useState(1);
    const handleAddToFavorites = () => {
        console.log(` ${proizvod.name} dodan u omiljene.`);
    };
    const handleAddToCart = () => {
        console.log(` ${proizvod.name} dodan u korpu. Kolicina ${kolicina}`);
    };

    return  (
        <Layout>
            <div className="flex max-w-6xl mx-auto mt-24 mb-24 my-4 pl-20">
                <div className="flex-none p-4">
                    <div className="mb-4 max-w-md">
                        <img src={proizvod.imageSrc} alt={proizvod.name} className="rounded max-w-full h-auto"/>
                    </div>
                </div>
                <div className="flex-2 pl-16 mt-16">
                    <h1 className="text-3xl mb-2">{proizvod.name}</h1>
                    <p className="mb-4">{proizvod.description}</p>
                    <div className="flex items-center mt-2">
                        <span className="text-gray-500 mr-2">Cijena:</span>
                        <span className="text-red-600">{(parseFloat(proizvod.price)*kolicina).toFixed(2)} KM</span>
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
                        <FiShoppingCart className="ml-12 size-6 mr-3 text-gray-500" style={{ pointerEvents: 'none' }}/>
                        <FiHeart className="size-6 ml-40 mr-2 text-gray-500 " style={{ pointerEvents: 'none' }}/>
                    </div>
                    <div className="flex items-center mt-4 ">
                        <button onClick={handleAddToCart}
                                className="bg-customColor2 rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u korpu
                        </button>
                        <button onClick={handleAddToFavorites}
                                className="ml-12 bg-customColor2 rounded text-white py-2 px-4 mt-4 hover:bg-customColor">Dodaj u
                            omiiljene
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

