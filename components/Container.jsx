import { useEffect, useState } from 'react';

import Footer from '../components/Footer';
import Head from 'next/head';
import MobileMenu from '../components/MobileMenu';
import NextLink from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';

function NavItem({ href, text }) {
   const router = useRouter();
   const isActive = router.asPath === href;
 
   return (
     <NextLink href={href}>
       <a
         className={cn(
           isActive
             ? 'font-semibold text-gray-800 dark:text-yellow-300'
             : 'font-normal text-gray-600 dark:text-gray-400',
           'hidden md:inline-flex p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all'
         )}
       >
         {text}
       </a>
     </NextLink>
   );
 }

export default function Container(props) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { children, ...customMeta } = props;
    const router = useRouter();
    const meta = {
        title: 'Ameen Alade – Developer, writer, creator.',
        description: `Front-end developer, JavaScript enthusiast, and UX maniac.`,
        image: 'https://ameenalade.dev/static/images/banner.png',
        type: 'website',
        ...customMeta,
    };
    const activeLink = 'p-1 text-gray-900 sm:p-4 dark:text-yellow-300 font-bold';
    const inActiveLink = 'p-1 text-gray-900 sm:p-4 dark:text-gray-100';

    return (
        <div className="w-full bg-white dark:bg-dark">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index" />
                <meta content={meta.description} name="description" />
                <meta property="og:url" content={`https://ameenalade.dev/${router.asPath}`} />
                <link rel="canonical" href={`https://ameenalade.dev/${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Ameen Alade" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@hey_ameen_" />
                <meta name="twitter:title" content={meta.title} />
                <meta name="twitter:description" content={meta.description} />
                <meta name="twitter:image" content={meta.image} />
                {meta.date && <meta property="article:published_time" content={meta.date} />}
            </Head>
            <nav className="flex items-center justify-between w-full max-w-4xl p-8 mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-dark bg-opacity-60 dark:text-gray-100">
                {/* <a href="#skip" className="skip-nav">
          Skip to content
        </a> */}
                <div className="ml-[-0.60rem]">
                    <MobileMenu />
                    <NavItem href="/" text="Home" />
                    <NavItem href="/#about" text="About" />
                    <NavItem href="/#work" text="Works" />
                    <NavItem href="/blog" text="Blog" />
                </div>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                    {mounted && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-4 h-4 text-grey-800 dark:text-gray-200"
                        >
                            {resolvedTheme === 'dark' ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            )}
                        </svg>
                    )}
                </button>
                {/* <div>
                    <NextLink href="/">
                        <a className={router.pathname === '/' ? activeLink : inActiveLink}>Home</a>
                    </NextLink>
                    <NextLink href="/#about">
                        <a className={router.pathname === '/#about' ? activeLink : inActiveLink}>About</a>
                    </NextLink>
                    <NextLink href="/#work">
                        <a className={router.pathname === '/#work' ? activeLink : inActiveLink}>Works</a>
                    </NextLink>
                    <NextLink href="/blog">
                        <a className={router.pathname === '/blog' ? activeLink : inActiveLink}>Blog</a>
                    </NextLink>
                </div> */}
            </nav>
            <main id="skip" className="flex flex-col w-full px-8 bg-white dark:bg-dark">
                {children}
                <Footer />
            </main>
        </div>
    );
}
