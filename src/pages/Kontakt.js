import React from "react";
import Layout from "../components/Layout";

export const Kontakt = () => {
  return (
    <>
    <Layout className="pt-30">
    <div className="pls max-w-full">
    </div>
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktirajte nas</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">E-mail</label>
              <input type="email" id="email" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Predmet</label>
              <input type="text" id="subject" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600" placeholder="Kako Vam možemo pomoći?" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Poruka</label>
              <textarea id="message" rows="6" className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 dark:bg-gray-700 dark:ring-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-600" placeholder="Napišite poruku..."></textarea>
          </div>
          <button className="py-3 px-5 text-lg font-medium text-center rounded-lg dugme">Pošalji</button>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4008.4319846024578!2d104.90963508577306!3d11.588733789197796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095362d82280bf%3A0xa3fbb989cb2c069c!2sSSN%20JewelryStore!5e0!3m2!1shr!2sba!4v1716801458515!5m2!1shr!2sba"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="karta"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </form>
  </div>
</section>
</Layout>
    </>
  )
}