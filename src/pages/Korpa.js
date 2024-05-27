import React, {useState} from 'react';
import Layout from '../components/Layout';

export const Korpa = () => {
  const [korpaProizvodi, setKorpaProizvodi] = useState(JSON.parse(localStorage.getItem('korpa')) || []);

  // Ukupna cijena korpe
  const ukupnaCijena = korpaProizvodi.reduce((total, product) => {
    return total + (parseFloat(product.price) * product.quantity);
  }, 0);

  const removeFromCart = (id) => {
    const updatedProizvodi = korpaProizvodi.filter(product => product.id !== id);
    setKorpaProizvodi(updatedProizvodi);
    localStorage.setItem('korpa', JSON.stringify(updatedProizvodi));
  };

  return (
    <Layout>

      <div>
       
        {korpaProizvodi.length === 0 ? (
            <>
            <div className="flex flex-col justify-center items-center">
              <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"  alt="empty-cart" className="mt-32 h-64"/>
              <h1 className="mt-10 mb-10 text-center text-3xl font-bold">Vaša korpa je prazna</h1>
            <button onClick={() => window.history.back()} className=" font-bold py-2 px-4 rounded-xl mb-20 bg-customColor3  text-white">
            Nastavi s kupovinom
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
                <th className="py-2">Količina</th>
                <th className="py-2">Ukupno</th>
              </tr>
            </thead>
            <tbody>
              {korpaProizvodi.map((product) => (
                <tr key={product.id} className="border-b h-36 w-min-36 borderB">
                  <td className="py-2 flex flex-row items-center text-lg " style={{fontWeight: 'bold'}}>
                    <img src={product.imageSrc} className="h-36 mr-5 rounded-lg pl-5"/>
                    {product.name}</td>
                  <td className="py-2">{product.price.toFixed(2)} KM</td>
                  <td className="py-2 pl-6">{product.quantity}</td>
                  <td className="py-2">
                    {(parseFloat(product.price) * product.quantity).toFixed(2)} KM
                  </td>
                  <td>
                    <button onClick={() => removeFromCart(product.id)}
                      className="font-medium text-red-600 hover:text-red-500">
                      Ukloni
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
          <table style={{width: '500px'}}>
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
                <td className='text-xl font-bold'>
                  Ukupno sa dostavom:
                </td>
                <td className='text-right pr-3'>
                  {(ukupnaCijena + 10).toFixed(2)} KM
                </td>
              </tr>
            </tbody>

          </table>
        </div>
        <div className=' flex flex-row' style={{width: '500px'}}>
          
          <button onClick={() => window.history.back()} className=" font-bold py-2 px-4 rounded-xl mt-4 ml-2 mr-4 border border-black mb-4 w-1/2" style={{borderWidth: '3px'}}>
            Nastavi s kupovinom
          </button>
          <button className=" font-bold py-2 px-4 rounded-xl m-4 mr-2 w-1/2 text-white  bg-customColor w-full ">
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
