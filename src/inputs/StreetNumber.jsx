import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const StreetNumber = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative w-4/12">
        <input type="text" name='Kućni broj' class="input block rounded-lg px-2.5 py-3 w-full text-sm outline-none border-none focus:outline-none focus:ring-0 " placeholder={language === 'cir' ? 'Kućni broj:' : 'Кућни број:'} />
      {/* <label for="floating_filled_street_number" class="absolute text-sm text-gray-500  duration-300 transform+ -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Кућни број' : 'Kućni broj'}</label> */}
    </div>
  )
}

export default StreetNumber;