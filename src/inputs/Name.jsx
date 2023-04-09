import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const Name = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-full my-4 z-0 group">
      <input type="text" name='Ime' id='floating_filled_name' class="input rounded-lg px-2.5 py-3 w-full text-sm outline-none border-none focus:outline-none focus:ring-0 peer block" placeholder=" " />
      <label for="floating_filled_name" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-9 -translate-x-1 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:translate-x-0 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:-translate-x-1">{language === 'cir' ? 'Име' : 'Ime'}</label>
    </div>
    

  )
}

export default Name;