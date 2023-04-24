import Image from 'next/image';
import React from 'react';
import SectionHeader from './SectionHeader';

const About = () => {
    return (
        <div className="flex items-center justify-between mb-8 tiny:flex-col md:flex-row py-28">
            <div className="md:w-3/5 tiny:w-full">
                <SectionHeader header="About Me" align="center" hr="true" />
                <div className="mb-8 leading-6 text-gray-600 dark:text-gray-200">
                    <p>
                        Hi! I'm Ameen. I'm a developer, writer and a UX enthusiast with over 5 years of experience
                        building and designing simple human interfaces. I am currently seeking new opportunities to make
                        an impact. Although, I must disclose that my availability at the moment is limited to part-time
                        work.
                    </p>
                    <p className="mt-6">
                        My passion for web development sparked back in 2015, when I embarked on my first programming
                        course in Uni. Since then, my journey towards becoming a professional developer has been nothing
                        short of exhilarating! I've worked on several exciting projects that have broadened my knowledge
                        and sharpened my skills, allowing me to become more user-focused and intuitive in my approach.
                    </p>

                    <p className="mt-6">Here are a few technologies I've been working with recently:</p>
                    <ul className="grid grid-cols-2 grid-rows-3 w-full">
                        <li className="list-disc mt-2">JavaScript</li>
                        <li className="list-disc mt-2">React</li>
                        <li className="list-disc mt-2">Typescript</li>
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
