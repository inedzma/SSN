import React from "react";
import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
import {sviProizvodi} from "../sviProizvodi";
import {useState} from "react";

export const Kategorija = () => {
    const params = useParams()
    const kategorijaIzRute = params.kategorijaIzRute
    const [currentPage, setCurrentPage] = useState(1);
    const ProizvodiPoStranici = 8;

    const filtriraniProizvodi = sviProizvodi.filter(proizvod => proizvod.kategorija === kategorijaIzRute);

    const PrviIndeks = (currentPage - 1) * ProizvodiPoStranici;
    const zadnjiIndeks = PrviIndeks + ProizvodiPoStranici;
    const trenutniProizvodi = filtriraniProizvodi.slice(PrviIndeks, zadnjiIndeks);

    const ukupnoStranica = Math.ceil(filtriraniProizvodi.length / ProizvodiPoStranici);

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
            <Layout>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl pl-5 mb-6 font-bold tracking-tight text-textBoja">{kategorijaIzRute}</h2>

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
                                    <h3 className="mt-4 text-sm text-textBoja">{proizvod.ime}</h3>
                                    <p className="mt-1 text-lg font-medium text-textBoja">{proizvod.cijena.toFixed(2)}<span> KM</span></p>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4 flex items-center gap-4 justify-center">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </Layout>
        );
};