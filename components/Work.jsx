import React, { useEffect, useState } from 'react';

import SectionHeader from './SectionHeader';

const Work = () => {
   const [defaultTab, setDefaultTab] = useState(true);

   function openJobs(evt, jobName) {
      // Declare all variables
      var i, tabcontent, tablinks;

      setDefaultTab(false);

      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName('tabcontent');
      for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = 'none';
      }

      // Get all elements with class="tablinks" and remove the class "active"
      tablinks = document.getElementsByClassName('tablinks');
      for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(' active', '');
      }

      // Show the current tab, and add an "active" class to the button that opened the tab
      document.getElementById(jobName).style.display = 'block';
      evt.currentTarget.className += ' active';
   }

   return (
      <div className="max-w-2xl mx-auto py-52">
         <SectionHeader header="Where I've worked" hr="true" align="center"/>
         <div className="flex justify-between tiny:flex-col xs:flex-row">
            <div className="flex xs:flex-col xs:justify-center tiny:justify-start tiny:mb-8 tab tiny:flex-row">
               <button
                  className={`tablinks borders h-11 px-5 py-1 text-gray-600 dark:text-gray-200 hover:text-yellow-300 font-mono active`}
                  onClick={(e) => openJobs(e, 'VGG')}
               >
                  VGG
               </button>
               <button
                  className="tablinks borders h-11 px-5 py-1 text-gray-600 dark:text-gray-200 font-mono"
                  onClick={(e) => openJobs(e, 'Venture')}
               >
                  VGG
               </button>
               <button
                  className="tablinks borders h-11 px-5 py-1 text-gray-600 dark:text-gray-200 font-mono"
                  onClick={(e) => openJobs(e, 'Starlabel')}
               >
                  Starlabel
               </button>
            </div>
            <div className="xs:w-3/4 tiny:w-full">
               <div id="VGG" className={`tabcontent text-gray-600 dark:text-gray-200 ${defaultTab ? `block` : null}`}>
                  <h3 className="font-medium text-xl">
                     <span>Front-End Engineer</span>
                     <span className="text-yellow-300">
                        &nbsp;@&nbsp;
                        <a
                           href="https://venturegardengroup.com/"
                           className="inline-link"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           Venture Garden Group
                        </a>
                     </span>
                  </h3>
                  <p className="mt-2 mb-6 font-mono">November 2018 - present</p>

                  <ul>
                     <li className="text-sm list-disc mb-2.5">
                        Communicate with multi-disciplinary teams of engineers, designers, producers, and product
                        managers on a daily basis
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Write modern, performant, maintainable code for a diverse array of client and internal projects
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Contribute to the in-house UI library to create reusable components that would save hours of
                        development time
                     </li>
                  </ul>
               </div>

               <div id="Venture" className="tabcontent text-gray-600 dark:text-gray-200">
                  <h3 className="font-medium text-xl">
                     <span>IT Support Operations Officer (intern)</span>
                     <span className="text-yellow-300">
                        &nbsp;@&nbsp;
                        <a
                           href="https://venturegardengroup.com/"
                           className="inline-link"
                           rel="noopener noreferrer"
                           target="_blank"
                        >
                           Venture Garden Group
                        </a>
                     </span>
                  </h3>
                  <p className="mt-2 mb-6 font-mono">May 2018 - November 2018</p>

                  <ul>
                     <li className="text-sm list-disc mb-2.5">
                        Worked with the Engineering Management team to drive and monitor progress of engineering
                        initiatives within the company
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Worked with the Deputy Chief Operations Officer (DCOO) to manage all engineering related
                        operations within the company (i.e. both people and systems)
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Worked with the Deputy Chief Technology Officers to develop policies and organize internal
                        audits for all systems built by the company
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Organized engineering trainings, presentations, and demos
                     </li>
                  </ul>
               </div>

               <div id="Starlabel" className="tabcontent text-gray-600 dark:text-gray-200">
                  <h3 className="font-medium text-xl">
                     <span>Associate Front-End Developer</span>
                     <span className="text-yellow-300">
                        &nbsp;@&nbsp;
                        <a href="https://starlabel.co/" className="inline-link" rel="noopener noreferrer" target="_blank">
                           Star Label
                        </a>
                     </span>
                  </h3>
                  <p className="mt-2 mb-6 font-mono">August 2016 - December 2017</p>

                  <ul>
                     <li className="text-sm list-disc mb-2.5">
                        Developed and maintained code for in-house and client websites primarily using HTML, CSS,
                        JavaScript and sometimes wordpress
                     </li>
                     <li className="text-sm list-disc mb-2.5">
                        Learnt to use Git, various workflows, advanced my knowledge in multiple technologies while
                        adopting them to the teams goal
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Work;
