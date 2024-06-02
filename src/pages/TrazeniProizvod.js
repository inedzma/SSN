import React from "react";
import { sviProizvodi } from "../sviProizvodi"; // Import your products list
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";

export const TrazeniProizvod = ({ onSearch }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    const filteredProizvod = sviProizvodi.filter(proizvod =>
        proizvod.ime.toLowerCase().includes(searchTerm.toLowerCase()) // Ensure property name matches
    );

    return (
        <Layout onSearch={onSearch}>  
            <h1 className="mx-auto max-w-2xl px-4 pt-10 sm:px-6  lg:max-w-7xl lg:px-8 font-bold text-2xl  mb-6 tracking-tight text-textBoja ">Rezultati pretrage za: "{searchTerm}"</h1>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                    {filteredProizvod.length > 0 ? (
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {filteredProizvod.map((proizvod) => (
                                <a key={proizvod.id} href={`/${proizvod.kategorija}/${proizvod.id}`} className="group">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={proizvod.slikaSrc}
                                            alt={proizvod.slikaAlt}
                                            className="h-80 w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{proizvod.ime}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{proizvod.cijena.toFixed(2)}</p>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <>
                        <div className="flex justify-center items-center flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="" className=" stroke-DugmeUkloni mb-5 size-40 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                          </svg>
                        <h2 className="font-bold text-2xl text-textBoja">
                          Nema pronađenih proizvoda</h2>
                          </div>
                          </>
                    )}
                </div>
            </div>
        </Layout>
    );
};
