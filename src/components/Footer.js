import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-customColor dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="ssn-logo.png" className="h-36 me-3"
                                 alt="FlowBite Logo"/>
                            <span
                                className="self-center text-4xl font-semibold whitespace-nowrap text-white">SSN shop</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Resources</h2>
                            <ul className="text-white dark:text-white font-medium">
                                <li className="mb-4">
                                    <a className="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Zaprati nas</h2>
                            <ul className="text-white dark:text-white font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/themesberg/flowbite"
                                       className="hover:underline ">Facebook</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-lg font-semibold text-white uppercase dark:text-white">Legal</h2>
                            <ul className="text-white dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Politika privatnosti</a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">Odredbe &amp; Uslovi</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-white sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a
              className="hover:underline">SSN shop™</a>. Sva prava zadržana.
          </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd"
                                      d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 17">
                                <path fillRule="evenodd"
                                      d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M7.75 2C5.679 2 4 3.68 4 5.75V18.25C4 20.32 5.68 22 7.75 22H16.25C18.32 22 20 20.32 20 18.25V5.75C20 3.68 18.32 2 16.25 2H7.75ZM16.25 20.5H7.75C6.231 20.5 5 19.269 5 17.75V6.25C5 4.731 6.231 3.5 7.75 3.5H16.25C17.769 3.5 19 4.731 19 6.25V17.75C19 19.269 17.769 20.5 16.25 20.5ZM12 8.5C10.07 8.5 8.5 10.07 8.5 12"
                                clipRule="evenodd"/>
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    )
}