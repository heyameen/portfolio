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
            <SectionHeader header="Where I've worked" hr="true" align="center" />
            <div className="flex justify-between tiny:flex-col xs:flex-row">
                <div className="flex xs:flex-col xs:justify-center tiny:justify-start tiny:mb-8 tab tiny:flex-row">
                    <button
                        className={`tablinks borders h-11 px-5 py-1 text-gray-600 dark:text-gray-200 hover:text-yellow-300 font-mono active`}
                        onClick={(e) => openJobs(e, 'Bellhop')}
                    >
                        Bellhop
                    </button>
                    <button
                        className={`tablinks borders h-11 px-5 py-1 text-gray-600 dark:text-gray-200 hover:text-yellow-300 font-mono`}
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
                    <div
                        id="Bellhop"
                        className={`tabcontent text-gray-600 dark:text-gray-200 ${defaultTab ? `block` : null}`}
                    >
                        <h3 className="font-medium text-xl">
                            <span>Front-End Engineer (Contract)</span>
                            <span className="text-yellow-300">
                                &nbsp;@&nbsp;
                                <a
                                    href="https://www.getbellhops.com/"
                                    className="inline-link"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Bellhop
                                </a>
                            </span>
                        </h3>
                        <p className="mt-2 mb-6 font-mono">May 2022 - Nov 2022</p>

                        <ul>
                            <li className="text-sm list-disc mb-2.5">
                                Implemented A/B testing on the marketing site to help the business make careful changes
                                to their user experiences while collecting data on the impact it makes on leads
                                generation.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Developed and implemented a labor check-in system utilizing QR scanning technology,
                                resulting in enhanced customer dashboards and improved efficiency.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Achieved SEO improvements and enhanced user experience by redesigning the marketing
                                landing page. Implemented new dynamic pages and created backlinks to existing pages
                                resulting in increased website traffic and improved search engine rankings.
                            </li>
                        </ul>
                    </div>
                    <div id="VGG" className={`tabcontent text-gray-600 dark:text-gray-200`}>
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
                        <p className="mt-2 mb-6 font-mono">November 2018 - May 2022</p>

                        <ul>
                            <li className="text-sm list-disc mb-2.5">
                                Developed a secure solution that empowered the business to securely monitor and manage
                                vast transaction volumes, resulting in significantly improved operational efficiency.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Revolutionized the development process of the company by coding more than 4 critical
                                front-end components, boosting the speed and agility of development, resulting in
                                significant time and cost savings.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Collaborated with cross-functional agile teams to prioritize and scope high-impact
                                feature requests, ensuring that the most valuable tasks were worked on first, resulting
                                in improved efficiency and productivity.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Successfully mentored and trained a team of interns, guiding them through complex tasks
                                and providing constructive feedback to help them develop their skills and grow as
                                professionals.
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
                                Collaborated with the Engineering Management team to spearhead and oversee the
                                advancement of crucial engineering projects, ensuring timely completion and successful
                                implementation within the organization.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Collaborated with the Deputy Chief Operations Officer (DCOO) to lead and streamline all
                                engineering-related operations, including managing both personnel and systems, to ensure
                                smooth functioning and optimal productivity within the organization.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Compiled and presented comprehensive engineering reports to management, providing
                                valuable insights and data-driven recommendations for informed decision-making.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Managed and streamlined the coordination and management of engineering documents,
                                ensuring that all critical information was accurately captured, organized and easily
                                accessible to team members.
                            </li>
                        </ul>
                    </div>

                    <div id="Starlabel" className="tabcontent text-gray-600 dark:text-gray-200">
                        <h3 className="font-medium text-xl">
                            <span>Associate Web Developer</span>
                            <span className="text-yellow-300">
                                &nbsp;@&nbsp;
                                <a
                                    href="https://starlabel.co/"
                                    className="inline-link"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Star Label
                                </a>
                            </span>
                        </h3>
                        <p className="mt-2 mb-6 font-mono">August 2016 - December 2017</p>

                        <ul>
                            <li className="text-sm list-disc mb-2.5">
                                Successfully adapted to a fast-paced tech team environment and demonstrated the ability
                                to work on multiple projects, meet tight deadlines, and execute tasks with minimal
                                supervision.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Acquired expertise in Git and its various workflows, and enhanced my proficiency in
                                diverse technologies, applying them to align with the team's objectives.
                            </li>
                            <li className="text-sm list-disc mb-2.5">
                                Resolved website issues to ensure optimal performance and user experience, while keeping
                                up-to-date with the latest web technologies to continuously enhance website.
                                functionality
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;
