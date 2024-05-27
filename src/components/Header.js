import React from "react";
import {useState} from "react";

export const Header = () => {
    function handleOnClick() {
        let megaMenu = document.getElementById('mega-menu-full-dropdown');
        megaMenu.classList.toggle("sakrij");
    }
    return (
        <>
            <nav className="bg-customColor border-gray-200 ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/ssn-logo.png" className="h-11" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SSN shop</span>
                    </a>
                    <div className="flex md:order-2 ">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="rgb(176 156 137)" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar"
                                   className="block w-full p-2 ps-10 text-sm text-gray-900 border-customColor border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search..."/>
                        </div>
                        <button onClick={handleOnClick} data-collapse-toggle="navbar-search" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <button type="button" className="ml-10 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>


                            <span className="sr-only">Cart</span>
                        </button>
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <a href="/korpa"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" class="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                            <span className="sr-only"></span>
                            </a>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="text" id="search-navbar"
                                   className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search..."/>

                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/"
                                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                   aria-current="page">Početna</a>
                            </li>
                            <li>
                                <button onClick={handleOnClick} id="mega-menu-full-dropdown-button"
                                        data-collapse-toggle="mega-menu-full-dropdown"
                                        className="flex items-center justify-between w-full py-2 px-3 text-white rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Kategorije<svg
                                    className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"/>
                                </svg>
                                </button>
                            </li>
                            <li>
                                <a href="/ONama"
                                   className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">O
                                    nama</a>
                            </li>
                            <li>
                                <a href="/Kontakt"
                                   className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Kontakt</a>
                            </li>
                            <li>
                                <a href="/Prijava"
                                   className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Prijava</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id="mega-menu-full-dropdown"
                 className="sakrij grid-cols-3 gap-5 border-white shadow-sm bg-gray-50 md:bg-customColor border-y dark:bg-gray-800 dark:border-gray-600">
                <div
                    className="grid max-w-screen-lg px-4 py-5 mx-auto text-gray-900 dark:text-white grid-cols-2 lg:grid-cols-3 md:px-6 bg-customColor">
                    <ul>
                        <li>
                            <a href="/Ogrlice"
                               className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Ogrlice</div>
                            </a>
                        </li>
                        <li>
                            <a href="/Narukvice"
                               className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Narukvice</div>
                            </a>
                        </li>
                        <li>
                            <a href="/Prstenje" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Prstenje</div>
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="/Nausnice"
                               className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Naušnice</div>
                            </a>
                        </li>
                        <li>
                            <a href="/Privjesci" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Privjesci</div>
                            </a>
                        </li>
                        <li>
                            <a href="/Pokloni" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                <div className="font-semibold text-white hover:text-customColor4">Pokloni</div>
                            </a>
                        </li>
                    </ul>
                    <ul className="hidden lg:block">
                        <li>
                            <img src="/nakit.webp" className="h-140"></img>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    );
}