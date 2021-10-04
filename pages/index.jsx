import About from '../components/About';
import BlogPostCard from '../components/BlogPostCard';
import Container from '../components/Container';
import Link from 'next/link';
import Project from '../components/Project';
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Work from '../components/Work';
import project from '../data/Project';

const Home = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-4xl mx-auto mb-16 w-full">
                <div className="flex mb-16 w-full flex-col justify-center height">
                    <div className="flex justify-center items-start flex-col tiny:mt-24 xs:mt-0">
                        <h1 className="font-bold tiny:font-semibold xs:text-10xl tiny:text-2sm  tracking-tight mb-4 text-black dark:text-white">
                            Ameen <br></br>
                            Alade.
                        </h1>
                    </div>
                    <div className="flex justify-start items-start flex-col w-full">
                        <h1 className="font-bold tiny:font-semibold xs:text-10x tiny:text-5xl text-yellow-300 dark:text-gray-400 tracking-tighter leading-normal mt-4 mb-8">
                            {/* User Interface Engineer, Developer and Creator. */}
                            The web is where my magic happens.
                        </h1>
                        <p className="text-black dark:text-gray-200 lg:w-2/4 tiny:w-full">
                            I am a software Engineer who specializes in building remarkable digital experiences. You've
                            found me on the World Wide Web, how about you drop me a message while you're here.
                        </p>
                    </div>
                    <div className="flex justify-between w-24 mt-8 h-auto">
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
                <div className="w-full" id="about">
                    <About />
                </div>
                <div className="w-full" id="work">
                    <Work />
                </div>
                <div className="w-full">
                    <SectionHeader header="Some Things I've Built" hr="true" align="left" />
                    <Project work={project} />
                </div>
                <div className="w-full py-32">
                    <SectionHeader header="Featured Post" hr="none" align="center" />
                    <div className="flex gap-6 flex-col md:flex-row">
                        <BlogPostCard
                            title="Understanding Space and Time Complexity in Data Structures & Algorithm"
                            slug="space-and-time-complexity"
                            gradient="from-purple-400 via-pink-500 to-red-500"
                        />
                        <BlogPostCard
                            title="Past, Present, and Future of React State Management"
                            slug="react-state-management"
                            gradient="from-green-400 via-indigo-500 to-blue-300"
                        />
                        <BlogPostCard
                            title="Which Back End Should I Use As A Front-End Developer?"
                            slug="backend"
                            gradient="from-yellow-400 via-green-300 to-blue-100"
                        />
                    </div>
                </div>
                <div className="w-full py-32 flex flex-col justify-center items-center">
                    <SectionHeader header="Get In Touch" hr="none" align="center" />
                    <p className="text-black dark:text-gray-200 text-center max-w-md">
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether
                        you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                    <a className="email-link" href="mailto:ameenalade@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
                </div>
            </div>
        </Container>
    );
};

export default Home;
