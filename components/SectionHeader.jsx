import React from 'react';

const SectionHeader = ({ header, hr, align}) => {
   return (
      <div className={`flex items-center mt-3 mb-10 w-full ${ align === 'center' ? "justify-center" : null}`}>         
         <h3 className="whitespace-nowrap font-bold text-2xl md:text-4xl tracking-tight text-black dark:text-white mr-5">{header}</h3>
         {hr === 'none' ? null : <hr className="hr border-1 border-gray-200 dark:border-gray-800" />}
      </div>
   );
};

export default SectionHeader;
