import React from "react";
import Layout from "../components/Layout";

export const ONama = () => {
    return (
        <Layout>
            <div className="overflow-hidden bg-white py-24 sm:py-18">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <p className="mt-2 text-3xl font-bold tracking-tight text-customColor2 sm:text-4xl">
                                    Dobro došli na SSN
                                </p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Vaša destinacija za elegantan i moderan nakit koji naglašava vašu jedinstvenu ljepotu. Naša online prodavnica specijalizirana je za pružanje visokokvalitetnog, elegantnog nakita dizajniranog za žene koje cijene stil, sofisticiranost i individualnost.
                                </p>
                                <ul className="mt-4 space-y-8 text-base leading-7 text-gray-600">
                                    <li className="relative pl-6 mt-7">
                                        <span className="font-semibold text-customColor2 text-[1.2rem]">Naša misija</span>{' '}
                                        <br/>
                                        <span className="inline">Naša misija je da vam ponudimo nakit koji nije samo modni dodatak, već izražaj vaše ličnosti. Svaki komad iz naše kolekcije pažljivo je odabran i dizajniran da bude savršeni dodatak vašem svakodnevnom stilu ili posebnim prilikama. Vjerujemo da nakit ima moć da promijeni način na koji se osjećate, dodajući dašak luksuza i elegancije vašem izgledu.

                                        </span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="font-semibold text-customColor2 text-[1.2rem]">Naša vizija</span>{' '}
                                        <br/>
                                        <span className="inline">Težimo da postanemo što bolji tim u izradi nakita, poznatog po svojoj kvaliteti, jedinstvenim dizajnima i izvrsnoj korisničkoj podršci. Cilj nam je izgraditi zajednicu zadovoljnih kupaca koji će nas preporučivati zbog naše predanosti kvaliteti i kupcima.</span>
                                    </li>
                                    <li className="relative pl-6">
                                        <span className="font-semibold text-customColor2 text-[1.2rem]">Naš asortiman</span>{' '}
                                        <br/>
                                        <span className="inline">U našoj kolekciji možete pronaći različite vrste nakita:
                                            <ol>
                                                <li><i className="font-medium"> Ogrlice:</i> Od suptilnih i minimalističkih do odvažnih i upečatljivih dizajna.</li>
                                                <li><i className="font-medium"> Narukvice:</i>  Elegantne narukvice koje mogu biti savršen dodatak svakom outfitu.</li>
                                                <li><i className="font-medium"> Naušnice:</i>  Raznoliki stilovi koji će dodati sjaj vašem licu i upotpuniti vaš look.</li>
                                                <li><i className="font-medium"> Prstenje:</i> Prstenje za sve prigode, od svakodnevnog nošenja do posebnih trenutaka.</li>
                                            </ol>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex justify-center items-start py-36">
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
                <div className="flex justify-center items-center flex-col font-semibold text-customColor2 text-[1.2rem]  ">
                    Naša Lokacija
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.4319846024578!2d104.90963508577306!3d11.588733789197796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095362d82280bf%3A0xa3fbb989cb2c069c!2sSSN%20JewelryStore!5e0!3m2!1shr!2sba!4v1716801458515!5m2!1shr!2sba"
                    width="600"
                    height="450"
                    className="rounded-2xl"
                    style={{ border: 0, margin: 20 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="karta"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
                
        </Layout>
    )
}


