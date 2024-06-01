import React from "react";
import Layout from "../components/Layout";
import {useParams} from "react-router-dom";
import {sviProizvodi} from "../sviProizvodi";

export const Kategorija = () => {
    const params = useParams()
    const kategorijaIzRute = params.kategorijaIzRute

    const filtriraniProizvodi = sviProizvodi.filter(proizvod => proizvod.kategorija === kategorijaIzRute);

        return (
            <Layout>
                <div className="bg-white">
                    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <h2 className="text-2xl pl-5 mb-6 font-bold tracking-tight text-textBoja">{kategorijaIzRute}</h2>

                        <div
                            className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            {filtriraniProizvodi.map((proizvod) => (
                                <a key={proizvod.id} href={`/${proizvod.kategorija}/${proizvod.id}`} className="group">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                        <img
                                            src={proizvod.slikaSrc}
                                            alt={proizvod.slikaAlt}
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-sm text-textBoja">{proizvod.ime}</h3>
                                    <p className="mt-1 text-lg font-medium text-textBoja">{proizvod.cijena}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }



