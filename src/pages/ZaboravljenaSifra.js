import React from "react";
import Layout from "../components/Layout";

export const ZaboravljenaSifra = () => {
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
                              Promijeni šifru
                          </h2>
                      </div>
      
                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                          <form className="space-y-6" action="#" method="POST">
                          
                            
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
                                          Nova šifra
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
                                          className="mb-10 pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      />
                                  </div>
      
                              </div>
                              <div>
                                  <button
                                      type="submit"
                                      className="flex w-full justify-center rounded-md bg-customColor2 px-3 py-1.5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-customColor3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                  >
                                      Resetuj šifru
                                  </button>
                              </div>
                          </form>
                      </div>
                  </div>
                  
              </Layout>
    )
}