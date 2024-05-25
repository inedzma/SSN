import React from "react";
import Layout from "../components/Layout";

export const ONama = () => {
    return (
        <Layout>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Dobro došli na SSN
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Vaša destinacija za elegantan i moderan nakit koji naglašava vašu jedinstvenu ljepotu. Naša online prodavnica specijalizirana je za pružanje visokokvalitetnog, elegantnog nakita dizajniranog za žene koje cijene stil, sofisticiranost i individualnost.
                                </p>
                                <ul className="mt-10 space-y-8 text-base leading-7 text-gray-600">
                                    <li className="relative pl-9">
                                        <span className="font-semibold text-gray-900">Naša misija</span>{' '}
                                        <span className="inline">Opis opcije 1</span>
                                    </li>
                                    <li className="relative pl-9">
                                        <span className="font-semibold text-gray-900">Naša vizija</span>{' '}
                                        <span className="inline">Opis opcije 2</span>
                                    </li>
                                    <li className="relative pl-9">
                                        <span className="font-semibold text-gray-900">Ime Opcije 3</span>{' '}
                                        <span className="inline">Opis opcije 3</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src="reklama2.png"
                                alt="Product screenshot"
                                className="rounded-xl shadow-xl"
                                style={{ maxWidth: '55rem', width: '100%', height: 'auto' }}
                                width={2432}
                                height={1442}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


