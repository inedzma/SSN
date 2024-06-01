import React, {useEffect, useRef} from "react";
import Layout from "../components/Layout";

export const Kontakt = () => {
    const emailRef = useRef(null);
    const predmetRef = useRef(null);
    const porukaRef = useRef(null);
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
            });
        }
        if (predmetRef.current) {
            predmetRef.current.setCustomValidity('Molim Vas unesite predmet poruke');
            predmetRef.current.addEventListener('input', () => {
                if (predmetRef.current.value === '') {
                    predmetRef.current.setCustomValidity('Molim Vas unesite predmet poruke');
                } else {
                    predmetRef.current.setCustomValidity('');
                }
            });
        }
        if (porukaRef.current) {
            porukaRef.current.setCustomValidity('Molim Vas unesite poruku');
            porukaRef.current.addEventListener('input', () => {
                if (porukaRef.current.value === '') {
                    porukaRef.current.setCustomValidity('Molim Vas unesite poruku');
                } else {
                    porukaRef.current.setCustomValidity('');
                }
            });
        }
    }, []);
        return (
                <Layout className="pt-30">
                    <div className="pls max-w-full">
                    </div>
                    <section className="bg-white dark:bg-gray-900">
                        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktirajte
                                nas</h2>
                            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Imate
                                tehnički problem, želite podijeliti povratne informacije ili saznati više o našim
                                poslovnim planovima? Tu smo za vas.</p>
                            <form action="#" className="space-y-8">
                                <div>
                                    <label htmlFor="email"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
                                    <input ref={emailRef} type="email" id="email"
                                           className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600"
                                           placeholder="imeprezime@gmail.com" required/>
                                </div>
                                <div>
                                    <label htmlFor="subject"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Predmet</label>
                                    <input ref={predmetRef} type="text" id="subject"
                                           className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600"
                                           placeholder="Kako Vam možemo pomoći?" required/>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message"
                                           className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Poruka</label>
                                    <textarea ref={porukaRef} id="message" rows="6"
                                              className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600"
                                              placeholder="Napišite poruku..."></textarea>
                                </div>
                                <button className="py-3 px-5 text-lg font-medium text-center rounded-lg dugme">Pošalji
                                </button>
                            </form>
                        </div>
                    </section>
                </Layout>
        );
    }