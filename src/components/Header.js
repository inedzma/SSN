import React from "react";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

export const Header = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate =useNavigate();

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        if (onSearch) {
            onSearch(term);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`/trazeniproizvod?search=${searchTerm}`);
        }
    };

    function handleOnClick() {
        let megaMenu = document.getElementById('mega-menu-full-dropdown');
        megaMenu.classList.toggle("sakrij");
       
    }

    function handleOnClick2() {
        let sidebar = document.getElementById('default-sidebar');
        sidebar.classList.toggle("sakrij");
    }
    function handleOnClick3(){
        let kategorije = document.getElementById("kategorije");
        kategorije.classList.toggle("sakrij");
    }
    function handleOnClick4(){
        let search = document.getElementById("search-mobile");
        search.classList.toggle("sakrij");
    }
    return (
        <>
            <nav className="bg-customColor border-gray-200 relative">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <button onClick={handleOnClick2} data-collapse-toggle="default-sidebar" type="button"
                                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 17 14">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                        <button onClick={handleOnClick4} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                                aria-expanded="false"
                                className="md:hidden text-gray-500 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 20 20">
                                <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"
                                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div id="search-mobile" className="sakrij overflow-y-auto   absolute top-20 w-4/5" >
                        <input type="text" id="search-navbar" value={searchTerm} onChange={handleSearch}
                                      onKeyPress={handleKeyPress}
                                   className="block w-full p-2 ps-10 text-sm text-gray-900 border  border-customColor  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search..."/>
                        </div>
                        <div className="logo">
                    <a className="flex items-center space-x-3 rtl:space-x-reverse" href="/">
                        <img src="/ssn-logo.png" className="h-11" alt="Logo"/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">SSN shop</span>
                    </a>
                    </div>
                    <div className="flex md:order-2 ">
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-white dark:white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="rgb(176 156 137)" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" value={searchTerm} onChange={handleSearch}
                                      onKeyPress={handleKeyPress}
                                   className="block w-full p-2 ps-10 text-sm text-gray-900 border-customColor border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search..."/>
                        </div>
                        
                        <button type="button" className="pl-5 pr-5 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <a href="/korpa"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-6">
                                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                            </svg>


                            <span className="sr-only">Cart</span>
                            </a>
                        </button>
                        <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <a href="/omiljeni"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>


                            <span className="sr-only">heart</span>
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
                 className="sakrij absolute inset-x-0 z-50 grid-cols-3 gap-5 border-white shadow-sm bg-gray-50 md:bg-customColor border-y dark:bg-gray-800 dark:border-gray-600" style={{top: '75px'}}>
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
            <aside id="default-sidebar" className="sakrij lg:hidden fixed top-16 bg-customColor left-0 z-40 w-64 h-screen transition-transform  sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li className="hoover">
            <a href="/" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>

               <span className="ms-3">Početna</span>
            </a>
         </li>
         <li className="hoover">
            <button onClick={handleOnClick3} className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clipRule="evenodd" />
                </svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Kategorije</span>
               <span className="inline-flex items-center justify-center pl-16 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                </svg>

               </span>
            </button>
         </li>
         <div id="kategorije" className="sakrij h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li className="hoover">
            <a href="/Ogrlice" className=" flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           

               <span className="flex-1 ms-3 whitespace-nowrap">Ogrlice</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/Narukvice" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
           
               <span className="flex-1 ms-3 whitespace-nowrap">Narukvice</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/Nausnice" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         

               <span className="flex-1 ms-3 whitespace-nowrap">Naušnice</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/Privjesci" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">

               <span className="flex-1 ms-3 whitespace-nowrap">Privjesci</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/Prstenje" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ms-3 whitespace-nowrap">Prstenje</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/Pokloni" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <span className="flex-1 ms-3 whitespace-nowrap">Pokloni</span>
            </a>
         </li>
      </ul>
   </div>
         <li className="hoover">
            <a href="/onama" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">O nama</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/kontakt" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                </svg>

               <span className="flex-1 ms-3 whitespace-nowrap">Kontakt</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/prijava" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Prijava</span>
            </a>
         </li>
         <li className="hoover">
            <a href="/registracija" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
               </svg>
               <span className="flex-1 ms-3 whitespace-nowrap">Registracija</span>
            </a>
         </li>
      </ul>
   </div>
</aside>
        </>
    );
}