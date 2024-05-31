import React from "react";
import Layout from "../components/Layout";

export const ONama = () => {
    return (
        <Layout>
            <div className="overflow-hidden bg-white py-10 sm:py-18">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-2xl font-bold tracking-tight text-customColor2 sm:text-3xl">
                                    Dobro došli na SSN
                                </p>
                                <p className="mt-6 text-base leading-7 text-gray-600">
                                    Vaša destinacija za elegantan i moderan nakit koji naglašava vašu jedinstvenu
                                    ljepotu. Naša online prodavnica specijalizirana je za pružanje visokokvalitetnog,
                                    elegantnog nakita dizajniranog za žene koje cijene stil, sofisticiranost i
                                    individualnost.
                                </p>
                                <ul className="mt-4 space-y-4 text-base leading-7 text-gray-600">
                                    <li className="relative pl-6">
                                        <span className="font-semibold text-customColor2 text-[1rem]">Naša misija</span>{' '}
                                        <br/>
                                        <span className="inline-block">Naša misija je da vam ponudimo nakit koji nije samo modni dodatak, već izražaj vaše ličnosti. Svaki komad iz naše kolekcije pažljivo je odabran i dizajniran da bude savršeni dodatak vašem svakodnevnom stilu ili posebnim prilikama. Vjerujemo da nakit ima moć da promijeni način na koji se osjećate, dodajući dašak luksuza i elegancije vašem izgledu.
                                        </span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="font-semibold text-customColor2 text-[1rem]">Naša vizija</span>{' '}
                                        <br/>
                                        <span className="inline-block">Težimo da postanemo što bolji tim u izradi nakita, poznatog po svojoj kvaliteti, jedinstvenim dizajnima i izvrsnoj korisničkoj podršci. Cilj nam je izgraditi zajednicu zadovoljnih kupaca koji će nas preporučivati zbog naše predanosti kvaliteti i kupcima.</span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="font-semibold text-customColor2 text-[1rem]">Naš asortiman</span>{' '}
                                        <br/>
                                        <span className="inline-block">U našoj kolekciji možete pronaći različite vrste nakita:
                                            <ul className="list-disc ml-4">
                                                <li>Ogrlice: Od suptilnih i minimalističkih do odvažnih i upečatljivih dizajna.</li>
                                                <li>Narukvice: Elegantne narukvice koje mogu biti savršen dodatak svakom outfitu.</li>
                                                <li>Naušnice: Raznoliki stilovi koji će dodati sjaj vašem licu i upotpuniti vaš look.</li>
                                                <li>Prstenje: Prstenje za sve prigode, od svakodnevnog nošenja do posebnih trenutaka.</li>
                                            </ul>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="hidden sm:flex justify-center items-start mt-10 lg:mt-40 sm:py-0">
                            <img
                                src="/reklama2.png"
                                alt="Product screenshot"
                                className="rounded-xl shadow-xl"
                                style={{maxWidth: '55rem', width: '100%', height: 'auto'}}
                                width={2432}
                                height={1442}
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className="py-12 flex justify-center items-center flex-col font-semibold text-customColor2 text-[1rem] sm:text-[1.2rem] mb-8 sm:mb-10 mx-4 sm:mx-auto max-w-[800px] sm:max-w-none">
                <h2 className="mb-8">Naša Lokacija</h2>
                <div className="w-full max-w-[800px] sm:max-w-none px-4 sm:px-8 lg:px-8">
                    <div className="aspect-w-16 aspect-h-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.4319846024578!2d104.90963508577306!3d11.588733789197796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095362d82280bf%3A0xa3fbb989cb2c069c!2sSSN%20JewelryStore!5e0!3m2!1shr!2sba!4v1716801458515!5m2!1shr!2sba"
                            width="100%"
                            height="450"
                            className="rounded-2xl"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            title="karta"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


