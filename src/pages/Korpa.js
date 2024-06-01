import React, {useState} from 'react';
import Layout from '../components/Layout';

export const Korpa = () => {
  const [korpaProizvodi, setKorpaProizvodi] = useState(JSON.parse(localStorage.getItem('korpa')) || []);

  // Ukupna cijena korpe
  const ukupnaCijena = korpaProizvodi.reduce((total, product) => {
    return total + (parseFloat(product.cijena) * product.quantity);
  }, 0);

  const removeFromCart = (id) => {
    const updatedProizvodi = korpaProizvodi.filter(product => product.id !== id);
    setKorpaProizvodi(updatedProizvodi);
    localStorage.setItem('korpa', JSON.stringify(updatedProizvodi));
  };

  return (
    <Layout>

      <div className='sakrijNaTelefonu'>
       
        {korpaProizvodi.length === 0 ? (
            <>
            <div className="flex flex-col justify-center items-center">
              <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"  alt="empty-cart" className="mt-32 h-64"/>
              <h1 className="mt-10 mb-10 text-center text-textBoja text-3xl font-bold">Vaša korpa je prazna</h1>
            <button onClick={() => window.history.back()} className=" font-bold py-2 px-4 rounded-xl mb-20 bg-Dugme hover:bg-customColor text-white">
            Nastavi s kupovinom
          </button>
           
            </div>
            
            </>
        ):(
          <>
           <div className=" flex justify-center flex-col items-center container mx-auto mt-8 mb-20">
          <table className=" text-left " >
            <thead>
              <tr className=" border-b borderB mb-5">
                <th className="p-3 text-textBoja pl-44">Proizvod</th>
                <th className="p-3 text-textBoja text-center">Cijena</th>
                <th className="p-3 text-textBoja text-center">Količina</th>
                <th className="p-3 text-textBoja text-center">Ukupno</th>
              </tr>
            </thead>
            <tbody>
              {korpaProizvodi.map((product) => (
                <tr key={product.id} className="border-b h-36 w-min-36 borderB">
                  <td className="p-3 flex flex-row items-center text-textBoja text-lg " style={{fontWeight: 'bold'}}>
                    <img src={product.slikaSrc} className="h-36 mr-5 rounded-lg pl-5"/>
                    {product.ime}</td>
                  <td className="p-3 text-textBoja text-center">{product.cijena ? product.cijena.toFixed(2) + ' KM' : 'N/A'}</td>
                  <td className="p-3 text-textBoja text-center">{product.quantity}</td>
                  <td className="p-3 text-textBoja text-center">
                    {(parseFloat(product.cijena) * product.quantity).toFixed(2)} KM
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(product.id)}
                      className="ml-6 p-2 font-medium text-white rounded-lg bg-DugmeUkloni hover:text-red-500">
                      Ukloni
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
          <table className=' my-10'>
            <tbody>
              <tr className="h-20 border-b borderB">
                <td className='text-textBoja text-xl font-bold'>
                  Ukupno: 
                </td>
                <td className='text-textBoja text-right pr-3'>
                  {ukupnaCijena.toFixed(2)} KM
                </td>
              </tr>
              <tr className="h-20 border-b borderB">
                <td className='text-textBoja text-xl font-bold'>
                  Dostava:
                </td>
                <td className='text-textBoja text-right pr-3'>
                  10 KM
                </td>
              </tr>
              <tr className="h-20 border-b borderB">
                <td className='text-textBoja text-xl font-bold'>
                  Ukupno sa dostavom:
                </td>
                <td className='text-textBoja text-right pr-3'>
                  {(ukupnaCijena + 10).toFixed(2)} KM
                </td>
              </tr>
            </tbody>

          </table>
        </div>
        <div className=' flex flex-row ' style={{width: '500px'}}>
          
          <button onClick={() => window.history.back()} className="text-white bg-Dugme hover:bg-customColor font-bold py-2 px-4 rounded-xl mt-4 ml-2 mr-4 border border-black mb-4 w-1/2" style={{borderWidth: '3px'}}>
            Nastavi s kupovinom
          </button>
          <button className=" font-bold py-2 px-4 rounded-xl m-4 mr-2 w-1/2 text-white bg-Dugme hover:bg-customColor ">
            NARUČI
          </button>
         </div>
         </div>
         </>
        )}
          
        

      </div>
      <div className='sm:hidden'>
       
       {korpaProizvodi.length === 0 ? (
           <>
           <div className="flex flex-col justify-center items-center">
             <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"  alt="empty-cart" className="mt-32 h-64"/>
             <h1 className="mt-10 mb-10 text-center text-3xl font-bold">Vaša korpa je prazna</h1>
           <button onClick={() => window.history.back()} className=" font-bold py-2 px-4 rounded-xl mb-20  bg-Dugme hover:bg-customColor text-white">
           Nastavi s kupovinom
         </button>
          
           </div>
           
           </>
       ):(
         <>
          <div className=" flex justify-center flex-col items-center container mx-auto mt-8 mb-20">
         <table className=" text-left " >
           <thead>
           </thead>
           <tbody>
             {korpaProizvodi.map((product) => (
               <tr key={product.id} className="border-b h-20 w-min-36 borderB">
                 <td className="p-3 flex flex-row items-center text-lg " style={{fontWeight: 'bold'}}>
                   <img src={product.slikaSrc} className="h-20  rounded-lg pl-5"/>
                   </td>
                 <td className="p-3 pr-5 text-left font-bold">
                 {product.ime}
                 <div className='mt-5'>Kol:{product.quantity}</div>
                  </td>
                 <td className="py-3 text-left">
                 {product.cijena ? product.cijena.toFixed(2) + ' KM' : 'N/A'}
                  <div className='mt-5'> {(parseFloat(product.cijena) * product.quantity).toFixed(2)} KM</div>
                 </td>
                 <td>
                   <button onClick={() => removeFromCart(product.id)}
                     className="hover:bg-customColor rounded-lg p-2 font-medium text-DugmeUkloni hover:text-red-500">
                      X
                   </button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
         <div>
         <table className='w-72 my-10'>
           <tbody>
             <tr className="h-20 border-b borderB">
               <td className='text-xl font-bold'>
                 Ukupno: 
               </td>
               <td className='text-right pr-3'>
                 {ukupnaCijena.toFixed(2)} KM
               </td>
             </tr>
             <tr className="h-20 border-b borderB">
               <td className='text-xl font-bold'>
                 Dostava:
               </td>
               <td className='text-right pr-3'>
                 10 KM
               </td>
             </tr>
             <tr className="h-20 border-b borderB">
               <td className='text-xl font-bold pr-3'>
                 Ukupno sa dostavom:
               </td>
               <td className='text-right pr-3'>
                 {(ukupnaCijena + 10).toFixed(2)} KM
               </td>
             </tr>
           </tbody>

         </table>
       </div>
       <div className=' flex flex-row'>
         
         <button onClick={() => window.history.back()} className=" bg-Dugme hover:bg-customColor text-white font-bold py-2 px-4 rounded-xl mt-4 ml-2 mr-4 border border-black mb-4 w-1/2" style={{borderWidth: '3px'}}>
           Nastavi s kupovinom
         </button>
         <button className=" bg-Dugme hover:bg-customColor font-bold py-2 px-4 rounded-xl m-4 mr-2 w-1/2 text-white">
           NARUČI
         </button>
        </div>
        </div>
        </>
       )}
         
       

     </div>
    </Layout>
  );
}
