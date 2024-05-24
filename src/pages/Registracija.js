import React from "react";
import Layout from "../components/Layout";

export const Registracija = () => {
    return (
        <Layout className="pt-30">

<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-36 w-auto"
                        src="ssn-logo.png"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Registracija
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                    <div>
                            <label htmlFor="ime" className="block text-sm font-medium leading-6 text-gray-900">
                                Ime
                            </label>
                            <div className="mt-2">
                                <input
                                    id="ime"
                                    name="ime"
                                    type="name"
                                    autoComplete="name"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="prezime" className="block text-sm font-medium leading-6 text-gray-900">
                                Prezime
                            </label>
                            <div className="mt-2">
                                <input
                                    id="prezime"
                                    name="prezime"
                                    type="prezime"
                                    autoComplete="prezime"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email adresa
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Šifra
                                </label>
                            </div>

                            

                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="repeat-password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Potvrdite šifru
                                </label>
                            </div>

                            

                            <div className="mt-2">
                                <input
                                    id="repeat-password"
                                    name="repeat-password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>

                        </div>
                        
                        <form className="max-w-sm mx-auto">
                              <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Izaberite državu</label>
                              <select id="countries" className="bg-gray-50 border-0 text-gray-900 text-sm rounded-lg ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 block w-full p-2.5 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600">
                                <option>Bosna i Hercegovina</option>
                                <option>Hrvatska</option>
                                <option>Srbija</option>
                                <option>Crna Gora</option>
                              </select>
                            </form>

                        <div className="flex items-start mb-5">
                          <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                          </div>
                          <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Slažem se sa <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">uslovima</a></label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-customColor2 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-customColor3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Registrujte se
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            
        </Layout>
    )
}