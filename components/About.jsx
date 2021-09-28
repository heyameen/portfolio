import Image from 'next/image';
import React from 'react';
import SectionHeader from './SectionHeader';

const About = () => {
   return (
      <div className="flex items-center justify-between mb-8 tiny:flex-col md:flex-row py-28">
         <div className="md:w-3/5 tiny:w-full">
            <SectionHeader header="About Me" align="center" hr="true"/>
            <div className="mb-8 leading-6 text-gray-600 dark:text-gray-200">
               <p>
                  Hi! I'm Ameen. I'm a developer, writer and a UX enthusiast with over 3 years of experience building
                  and designing simple human interfaces. I currently work at&nbsp;
                  <a href="https://venturegardengroup.com" target="_blank" rel="noopener noreferrer">
                     Venture Garden Group
                  </a>
                  &nbsp; as a Front End Engineer.
               </p>
               <p className="mt-6">
                  My Interest in web development started back in 2015, when I took my first ever programming course in
                  Uni. My journey to becoming a professional has been interesting so far, I've had the opportunity to
                  work on projects that has widened my scope of knowledge. This has trained me to be more user
                  conscious.
               </p>

               <p className="mt-6">Here are a few technologies I've been working with recently:</p>
               <ul className="grid grid-cols-2 grid-rows-3 w-full">
                  <li className="list-disc mt-2">JavaScript</li>
                  <li className="list-disc mt-2">React</li>
                  <li className="list-disc mt-2">Angular</li>
                  <li className="list-disc mt-2">Next js</li>
                  <li className="list-disc mt-2">Node.js</li>
               </ul>
            </div>
         </div>
         <div className="profile-img relative rounded bg-yellow-300 hover:bg-transparent z-20 hover:mix-blend-normal">
            <Image
               className="rounded mix-blend-multiply overflow-hidden z-10"
               src="/static/images/ameen2.jpg"
               alt="Picture of the author"
               width={300}
               height={300}
               quality={100}
            />
            {/* <div className="relative -top-8 img"> */}
               <div className="absolute -right-5 -bottom-3 rounded border-yellow-300 border-2 w-full h-full"></div>
            {/* </div> */}
         </div>
      </div>
   );
};

export default About;
