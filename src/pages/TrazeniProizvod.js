import React, {useState} from "react";
import { sviProizvodi } from "../sviProizvodi";
import Layout from "../components/Layout";
import { useLocation } from "react-router-dom";

export const TrazeniProizvod = ({ onSearch }) => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';

    const filteredProizvod = sviProizvodi.filter(proizvod =>
        proizvod.ime.toLowerCase().includes(searchTerm.toLowerCase()) // Ensure property name matches
    );
    const [currentPage, setCurrentPage] = useState(1);
    const ProizvodiPoStranici = 8;



    const PrviIndeks = (currentPage - 1) * ProizvodiPoStranici;
    const zadnjiIndeks = PrviIndeks + ProizvodiPoStranici;
    const trenutniProizvodi = filteredProizvod.slice(PrviIndeks, zadnjiIndeks);

    const ukupnoStranica = Math.ceil(filteredProizvod.length / ProizvodiPoStranici);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < ukupnoStranica) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (
        <Layout onSearch={onSearch}>  
            <h1 className="mx-auto max-w-2xl px-4 pt-10 sm:px-6  lg:max-w-7xl lg:px-8 font-bold text-2xl  mb-6 tracking-tight text-textBoja ">Rezultati pretrage za: "{searchTerm}"</h1>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                    {filteredProizvod.length > 0 ? (
                        <div
                            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {trenutniProizvodi.map((proizvod) => (
                                <a key={proizvod.id} href={`/${proizvod.kategorija}/${proizvod.id}`} className="group">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={proizvod.slikaSrc}
                                            alt={proizvod.slikaAlt}
                                            className="h-80 w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-gray-700">{proizvod.ime}</h3>
                                    <p className="mt-1 text-lg font-medium text-gray-900">{proizvod.cijena.toFixed(2)}<span> KM</span></p>
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
                    {filteredProizvod.length > 0 && (
                        <div className="mt-4 mb-4 flex items-center gap-4 justify-center">
                        <button
                        onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Prethodna
                </button>
                <div className="flex items-center gap-2">
                    {[...Array(ukupnoStranica).keys()].map((page) => (
                        <button
                            key={page + 1}
                            onClick={() => setCurrentPage(page + 1)}
                            className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase ${currentPage === page + 1 ? 'bg-gray-900 text-textBoja' : 'text-gray-900'} transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
                            type="button"
                        >
                                <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                                    {page + 1}
                                </span>
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleNextPage}
                    disabled={currentPage === ukupnoStranica}
                    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Sljedeća
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                         stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                </button>
            </div>
            )}
                </div>
            </div>
        </Layout>
    );
};
