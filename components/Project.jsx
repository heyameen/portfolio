import Image from 'next/image';
import React from 'react';
import SectionHeader from './SectionHeader';

const Project = ({ work }) => {
   console.log('work', work);
   return (
      <div>
         <ul className="list-none m-0 p-0">
            {work.map((project) => (
               <li className="project list mb-24">
                  <div className="project-content">
                     <div>
                        <p className="project-overline text-yellow-300 font-normal font-mono">Featured Project</p>
                        <h3 className="project-title font-bold text-2xl tracking-tight text-black dark:text-white">
                           <a href={project.url} rel="noopener noreferrer" target="_blank">
                              {project.name}
                           </a>
                        </h3>
                        <div className="project-description">
                           <p className="text-gray-600 dark:text-gray-200">{project.description}</p>
                        </div>
                        <ul className="project-tech-list text-gray-600 dark:text-gray-200 font-mono">
                           {project.technologies.map((tech) => (
                              <li>{tech}</li>
                           ))}
                        </ul>
                        <div className="project-links text-gray-600     dark:text-gray-200">
                           <a
                              href={project.github}
                              aria-label="GitHub Link"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 role="img"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-github"
                              >
                                 <title>GitHub</title>
                                 <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                              </svg>
                           </a>
                           <a
                              href={project.url}
                              aria-label="External Link"
                              className="external"
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 role="img"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 strokeWidth="2"
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="feather feather-external-link"
                              >
                                 <title>External Link</title>
                                 <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                 <polyline points="15 3 21 3 21 9"></polyline>
                                 <line x1="10" y1="14" x2="21" y2="3"></line>
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="project-image">
                     <a href={project.url} rel="noopener noreferrer" target="_blank">
                        <div className="img image-wrapper image-wrapper-constrained">
                           {/* <div className="divImage"> */}
                           <Image
                              className="project-sizing"
                              src={`/static/images/${project.img}`}
                              alt="Picture of the author"
                              layout="fill"
                           />
                           {/* </div> */}
                        </div>
                     </a>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default Project;
