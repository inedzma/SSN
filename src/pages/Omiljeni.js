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

      <div>
       
        {omiljeniProizvodi.length === 0 ? (
            <>
            <div className="flex flex-col justify-center items-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aaZ90iTCcCh_EvooQ0Xc__25bcuUNffRDOcwiLmglA&s"  alt="no-favorites" className="mt-32 h-64"/>
              <h1 className="mt-10 mb-10 text-center text-3xl font-bold">Još uvijek niste dodali ni jedan proizvod u omiljene</h1>
            <button onClick={() => window.history.back()} className=" font-bold py-2 px-4 rounded-xl mb-20 bg-customColor3  text-white">
            Nazad
          </button>
           
            </div>
            
            </>
        ):(
          <>
           <div className="container pl-40 mx-auto mt-8 mb-20">
          <table className=" text-left" style={{width: '900px'}}>
            <thead>
              <tr className=" border-b borderB mb-5">
                <th className="py-2 pl-44">Proizvod</th>
                <th className="py-2">Cijena</th>
              </tr>
            </thead>
            <tbody>
            {omiljeniProizvodi.map((product) => (
              <tr key={product.id} className="border-b h-36 w-min-36 borderB">
                <td className="py-2 flex flex-row items-center text-lg font-bold" style={{fontWeight: 'bold'}}>
                  <img src={product.imageSrc} className="h-36 mr-5 rounded-lg pl-5"/>
                  {product.name}
                </td>
                <td className="py-2">{product.price ? product.price.toFixed(2) + ' KM' : 'N/A'}</td>
                <td>
                  <button onClick={() => removeFromFavorites(product.id)} className="font-medium text-red-600 hover:text-red-500">
                    Ukloni
                  </button>
                </td>
              </tr>
            ))}

            </tbody>
          </table>
          
        <div className=' flex flex-row' style={{width: '500px'}}>
          
          <button onClick={() => window.history.back()} className="text-white font-bold py-2 px-4 rounded-xl mt-10 ml-2 mr-4 bg-customColor3 mb-4 w-1/2" >
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
