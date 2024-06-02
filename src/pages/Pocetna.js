import React, {useEffect, useRef} from 'react';
import Layout from "../components/Layout";


    
export const Pocetna = ({onSearch}) => {

    const emailRef = useRef(null);
    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.setCustomValidity('Molim Vas unesite ispravnu email adresu');
            emailRef.current.addEventListener('input', () => {
                    if (emailRef.current.value === '') {
                        emailRef.current.setCustomValidity('Molim Vas unesite ispravnu email adresu');
                    } else if (!emailRef.current.value.includes('@')) {
                        emailRef.current.setCustomValidity('Email mora sadržavati @');
                    } else {
                        emailRef.current.setCustomValidity('');
                    }
                }
            );
        }  }, []);

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
        {
            ime: 'Narukvice',
            opis: 'Daily commute essentials',
            slikaSrc: '/reklama2.png',
            slikaAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/Privjesci',
        },
        {
            ime: 'Naušnice',
            opis: 'Daily commute essentials',
            slikaSrc: '/reklama2.png',
            slikaAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/Privjesci',
        },
        {
            ime: 'Prstenje',
            opis: 'Daily commute essentials',
            slikaSrc: '/reklama2.png',
            slikaAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/Privjesci',
        },
    ];
    return (
        <Layout>
            <div className="bg-gradient-to-b from-customColor to-customColor4 bg-cover bg-center relative overflow-hidden">
                <div className="custom-padding-bottom pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
                    <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font-bold tracking-tight text-textBoja sm:text-6xl">
                                Ljetna kolekcija je stigla!
                            </h1>
                            <p className="mt-4 text-xl text-textBoja">
                                Otkrijte našu najnoviju kolekciju nakita inspirisanu ljetnim sjajem i prirodnim
                                ljepotama. Bez obzira na priliku, naši jedinstveni dizajni savršeno će upotpuniti vaš
                                stil!
                            </p>
                        </div>
                        <div>
                            <div className="mt-10">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                                >
                                    <div
                                        className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                                        <div className="flex items-center space-x-6 lg:space-x-8">
                                            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                                <div
                                                    className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
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
                    <div className="mx-auto max-w-2xl sm:py-24 lg:max-w-none lg:py-14">
                        <h1 className="text-3xl font-bold text-textBoja mt-4 pb-0 sm:pt-0">Kategorije</h1>
                        <div className=" mb-12 space-y-8 lg:grid lg:grid-cols-3 lg:gap-x-12 lg:space-y-0">
                            {kategorija.map((kategorija) => (
                                <div key={kategorija.ime} className="group relative">
                                    <div
                                        className="mt-24 relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            src={kategorija.slikaSrc}
                                            alt={kategorija.slikaAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <a href={kategorija.href}>
                                            <span className="absolute inset-0 my-10"/>
                                        </a>
                                    </h3>
                                    <p className="text-xl font-medium text-textBoja">{kategorija.ime}</p>
                                    <p className="text-base font-normal text-textBoja">{kategorija.opis}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative isolate overflow-hidden hover:bg-white py-16 mt-4 sm:py-24 lg:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        <div className="max-w-xl lg:max-w-lg">
                            <h2 className="text-3xl font-bold tracking-tight text-textBoja sm:text-4xl">Prijavi se
                                na naš
                                newsletter!</h2>
                            <p className="mt-4 text-lg leading-8 text-textBoja"> Budite uvijek u toku sa najnovijim
                                vijestima,
                                ekskluzivnim ponudama i posebnim događajima. Naš informativni bilten donosi vam redovne
                                ažuriranja direktno u vaš inbox, tako da nikada ne propustite važnu informaciju.
                            </p>
                            <div className="mt-6 flex max-w-md gap-x-4">
                                <label htmlFor="email-address" className="sr-only">
                                    Email addresa
                                </label>
                                <input
                                    ref={emailRef}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                                    placeholder="Unesite email adresu"
                                />
                                <button
                                    type="submit"
                                    className="flex-none rounded-md  bg-Dugme hover:bg-customColor  border px-3.5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                >
                                    Prijavi se!
                                </button>
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <img src="/discount.png" className="h-6 w-6 text-white" aria-hidden="true"/>
                                </div>
                                <dt className="mt-4 font-semibold text-textBoja">Ekskluzivne ponude!</dt>
                                <dd className="mt-2 leading-7 text-textBoja">
                                    Samo pretplatnici našeg newslettera imaju pristup posebnim popustima i promocijama
                                    koje nisu
                                    dostupne drugima.
                                </dd>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                    <img src="/privacy.png" className="h-6 w-6 text-white" aria-hidden="true"/>
                                </div>
                                <dt className="mt-4 font-semibold text-textBoja">Bez spama!</dt>
                                <dd className="mt-2 leading-7 text-textBoja">
                                    Obećavamo da ćemo vam slati samo kvalitetan sadržaj. Naš cilj je da vas informišemo,
                                    a ne da
                                    vas zatrpamo nepotrebnim porukama.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                    <div
                        className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-customColor to-customColor1 opacity-30"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </Layout>
    );
};


