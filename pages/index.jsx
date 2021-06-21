import React from 'react';
import Link from 'next/link';
import Container from '../components/Container';
import Image from 'next/image';
import Ameen from '../public/static/images/ameen.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
   return (
      <Container>
         <div className="flex md:justify-between  md:flex-row max-w-4xl mx-auto mb-16 w-full tiny:flex-col tiny:justify-center">
            <div className="flex justify-center items-start flex-col">
               <h1 className="font-bold xs:text-10xl tiny:text-2sm  tracking-tight mb-4 text-black dark:text-white">
                  Ameen <br></br>
                  Alade.
               </h1>
               <div className="flex justify-between w-24 mt-16 h-auto">
                  <span className="text-gray-900 dark:text-yellow-300 hover:text-yellow-300 dark:hover:text-white text-2xl cursor-pointer">
                     <i className="ri-linkedin-fill"></i>
                  </span>
                  <span className="text-gray-900 dark:text-yellow-300 hover:text-yellow-300 dark:hover:text-white text-2xl cursor-pointer">
                     <i className="ri-github-fill"></i>
                  </span>
                  <span className="text-gray-900 dark:text-yellow-300 hover:text-yellow-300 dark:hover:text-white text-2xl cursor-pointer">
                     <i className="ri-twitter-fill"></i>
                  </span>
               </div>
            </div>
            <div className="flex justify-center items-start flex-col w-80 md:w-64">
               <h2 className="font-medium text-2xl text-black dark:text-white tracking-tighter leading-normal mb-8">
                  User Interface Engineer, Developer and Creator, based in Lagos, Nigeria.
               </h2>
               <p className="text-black dark:text-white text-sm">I work as a Front-end Engineer at Venture Garden Group (VGG). You've found me on the World Wide Web, how about you drop me a message while you're here.</p>
            </div>
         </div>
      </Container>
   );
};

export default Home;
