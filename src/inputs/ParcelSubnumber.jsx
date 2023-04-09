import React, { useContext } from 'react';
import { LanguageContext } from "../context/context";

const ParcelSubnumber = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className="relative w-3/6">
        <input type="text" name='Podbroj parcele' class="input block rounded-lg px-2.5 py-3 w-full text-sm outline-none border-none focus:outline-none focus:ring-0 " placeholder={language === 'cir' ? 'Подброј парцеле:' : 'Podbroj parcele:'} />
      {/* <label for="floating_filled_parcel_subnumber" class="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">{language === 'cir' ? 'Подброј парцеле' : 'Podbroj parcele'}</label> */}
    </div>
  )
}

export default ParcelSubnumber