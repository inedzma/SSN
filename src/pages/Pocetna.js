import React from 'react';
import Layout from "../components/Layout";


export const Pocetna = ({onSearch}) => {
    const kategorija = [
        {
            ime: 'Ogrlice',
            opis: 'Work from home accessories',
            slikaSrc: '/ogrlica1.jpeg',
            slikaAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '/Ogrlice',
        },
        {
            ime: 'Pokloni',
            opis: 'Journals and note-taking',
            slikaSrc: '/slika-slide1.png',
            slikaAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '/Pokloni',
        },
        {
            ime: 'Privjesci',
            opis: 'Daily commute essentials',
            slikaSrc: '/reklama2.png',
            slikaAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/Privjesci',
        },
    ];


    return (
        <Layout onSearch={onSearch}>
            <div className="bg-customColor5 relative overflow-hidden bg-white">
            <div className="mt-56 pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-black"> Uživajte u novoj kolekciji!
            </h1>
            <p className="mt-4 text-xl text-gray-500">
           Ova kolekcija je...
            </p>
            </div>
            <div>
            <div className="mt-10">
            <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="h-64 w-44 overflow-hidden rounded-lg">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"
                                    alt=""
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
</div>
</div>
            </div>
    <div className="bg-gray-100 ">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-24">
                        <h2 className="text-2xl font-bold text-gray-900">Kategorije</h2>
                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {kategorija.map((kategorija) => (
                                <div key={kategorija.ime} className="group relative">
                                    <div
                                        className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={kategorija.slikaSrc}
                                            alt={kategorija.slikaAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={kategorija.href}>
                                            <span className="absolute inset-0"/>
                                        </a>
                                    </h3>
                                    <p className="text-xl font-medium text-gray-900" >{kategorija.ime}</p>
                                    <p className="text-base font-normal text-gray-900">{kategorija.opis}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};