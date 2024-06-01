import React, {useEffect, useRef } from "react";
import Layout from "../components/Layout";


export const Prijava = () => {
    const emailRef = useRef(null);
    const sifraRef = useRef(null);
    useEffect(() => {
        if (emailRef.current) {
            emailRef.current.setCustomValidity('Molim Vas unesite ispravnu email adresu');
            emailRef.current.addEventListener('input', () => {
                if (emailRef.current.value === '') {
                    emailRef.current.setCustomValidity('Molim Vas unesite ispravnu email adresu');
                } else if(!emailRef.current.value.includes('@')) {
                        emailRef.current.setCustomValidity('Email mora sadržavati @');
                } else {
                    emailRef.current.setCustomValidity('');
                }
            });
        }
        if (sifraRef.current) {
            sifraRef.current.setCustomValidity('Molim Vas unesite šifru');
            sifraRef.current.addEventListener('input', () => {
                if (sifraRef.current.value === '') {
                    sifraRef.current.setCustomValidity('Molim Vas unesite šifru');
                } else {
                    sifraRef.current.setCustomValidity('');
                }
            });
        }
    }, []);
    return (
        <Layout>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-36 w-auto"
                        src="/ssn-logo.png"
                        alt="SSN shop logo"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-textBoja">
                        Prijavite se!
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="/">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-textBoja">
                                Email adresa
                            </label>
                            <div className="mt-2">
                                <input
                                    ref={emailRef}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-textBoja shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-textBoja">
                                    Šifra
                                </label>
                            </div>

                            <div className="mt-2">
                                <input
                                    ref={sifraRef}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-textBoja shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-textBoja focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>
                        <div className="text-sm flex justify-end items-center ">
                            <a href="/zaboravljena-sifra" className="font-semibold text-textBoja hover:text-indigo-500 pr-3" >
                                Zaboravili ste šifru?
                            </a>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-Dugme px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-customColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Prijavi se
                            </button>
                        </div>
                         <div className="flex justify-center items-center text-sm ">
                            <a href="/Registracija" className="font-semibold text-textBoja hover:text-indigo-500">
                                Registrujte se
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
);
}