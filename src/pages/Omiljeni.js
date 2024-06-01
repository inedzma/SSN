import React, {useState} from 'react';
import Layout from '../components/Layout';

export const Omiljeni = () => {
  const [omiljeniProizvodi, setOmiljeniProizvodi] = useState(JSON.parse(localStorage.getItem('omiljeniProizvodi')) || []);


  

  const removeFromFavorites = (id) => {
    const updatedProizvodi = omiljeniProizvodi.filter(product => product.id !== id);
    setOmiljeniProizvodi(updatedProizvodi);
    localStorage.setItem('omiljeniProizvodi', JSON.stringify(updatedProizvodi));
  };

  return (
    <Layout>

      <div className='sakrijNaTelefonu'>
       
        {omiljeniProizvodi.length === 0 ? (
            <>
            <div className="flex flex-col justify-center items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aaZ90iTCcCh_EvooQ0Xc__25bcuUNffRDOcwiLmglA&s"  alt="no-favorites" className="mt-32 h-64"/>
              <h1 className="mt-10 mb-10 text-textBoja text-center text-3xl font-bold">Još uvijek niste dodali ni jedan proizvod u omiljene</h1>
            <button onClick={() => window.history.back()} className="bg-Dugme hover:bg-customColor font-bold py-2 px-4 rounded-xl mb-20 text-white">
            Nazad
          </button>
           
            </div>
            
            </>
        ):(
          <>
           <div className=" flex justify-center flex-col items-center container mx-auto mt-8 mb-20">
          <table className=" text-left w-1/2">
            <thead>
    
                <tr className=" border-b borderB mb-5">
                <th className="text-textBoja py-2 pl-44">Proizvod</th>
                <th className="text-textBoja py-2">Cijena</th>
              </tr>
            </thead>
            <tbody>
            {omiljeniProizvodi.map((product) => (
              <tr key={product.id} className="border-b h-36 w-min-36 borderB">
                <td className="py-2 flex flex-row items-center text-textBoja text-lg font-bold" style={{fontWeight: 'bold'}}>
                  <img src={product.slikaSrc} className="h-36 mr-5 rounded-lg pl-5"/>
                  {product.ime}
                </td>
                <td className="text-textBoja py-2">{product.cijena ? product.cijena.toFixed(2) + ' KM' : 'N/A'}</td>
                <td>
                  <button onClick={() => removeFromFavorites(product.id)} className="ml-6 p-2 font-medium text-white rounded-lg bg-DugmeUkloni hover:text-red-500">
                    Ukloni
                  </button>
                </td>
              </tr>
            ))}

            </tbody>
          </table>
          
        <div className=' flex flex-row justify-center w-1/2' >
          
          <button onClick={() => window.history.back()} className=" bg-Dugme hover:bg-customColor text-white font-bold py-2 px-4 rounded-xl mt-10 ml-2 mr-4 mb-4 w-1/2" >
            Nazad
          </button>
          
         </div>
         </div>
         </>
        )}
          
        

      </div>
      <div className='sm:hidden'>
       
        {omiljeniProizvodi.length === 0 ? (
            <>
            <div className="flex flex-col justify-center items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aaZ90iTCcCh_EvooQ0Xc__25bcuUNffRDOcwiLmglA&s"  alt="no-favorites" className="mt-32 h-64"/>
              <h1 className="mt-10 mb-10 text-textBoja text-center text-3xl font-bold">Još uvijek niste dodali ni jedan proizvod u omiljene</h1>
            <button onClick={() => window.history.back()} className="font-bold py-2 px-4 rounded-xl mb-20  bg-Dugme hover:bg-customColor text-white">
            Nazad
          </button>
           
            </div>
            
            </>
        ):(
          <>
           <div className=" flex justify-center flex-col items-center container mx-auto mt-8 mb-20">
          <table className=" text-left">
            <thead>
            </thead>
            <tbody>
            {omiljeniProizvodi.map((product) => (
              <tr key={product.id} className="border-b h-36 w-min-36 borderB">
                <td className="py-2 flex flex-row items-center text-lg font-bold" style={{fontWeight: 'bold'}}>
                  <img src={product.slikaSrc} className="h-36 mr-5 rounded-lg pl-5"/>
                </td>
                <td className="py-2">
                  <div className='flex flex-col h-36 w-32 font-bold'>
                <div>{product.ime}</div>
                  <div className='mt-24'>{product.cijena ? product.cijena.toFixed(2) + ' KM' : 'N/A'}</div>
                  </div>
              </td>
                <td>
                  <button onClick={() => removeFromFavorites(product.id)} className="font-medium text-DugmeUkloni hover:text-red-500">
                    x
                  </button>
                </td>
              </tr>
            ))}

            </tbody>
          </table>
          
        <div className=' flex flex-row justify-center w-1/2' >
          
          <button onClick={() => window.history.back()} className="text-white font-bold py-2 px-4 rounded-xl mt-10 ml-2 mr-4  bg-Dugme hover:bg-customColor mb-4 w-1/2" >
            Nazad
          </button>
          
         </div>
         </div>
         </>
        )}
          
        

      </div>
    </Layout>
  );
}
