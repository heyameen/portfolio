import Link from 'next/link';

// import NowPlaying from '@/components/NowPlaying';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-black dark:text-gray-100 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-4xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      {/* <NowPlaying /> */}
      <div className="w-full max-w-12xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-black dark:text-gray-100 hover:text-gray-600 transition">Home</a>
          </Link>        
          {/* <Link href="/">
            <a className="text-black dark:text-gray-100 hover:text-gray-600 transition">
              Newsletter
            </a>
          </Link> */}
        </div>
        <div className="flex flex-col space-y-4">          
          <Link href="/about">
            <a className="text-black dark:text-gray-100 hover:text-gray-600 transition">
              About
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/hey_ameen_">
            Twitter
          </ExternalLink>
        </div>
        <div className="flex flex-col space-y-4">          
          <ExternalLink href="https://github.com/heyameen">GitHub</ExternalLink>          
        </div>
        {/* <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-black dark:text-gray-100 hover:text-gray-600 transition">Uses</a>
          </Link>
          
          <Link href="/">
            <a className="text-black dark:text-gray-100 hover:text-gray-600 transition">
              Tweets
            </a>
          </Link>
        </div> */}
      </div>
    </footer>
  );
}
