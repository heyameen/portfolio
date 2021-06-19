import react from 'react';
import '../styles/globals.css'


export default function App({ Component, pageProps }) {
   return (
       <div className="min-h-screen bg-dark p-10 sm:p-0">

           <Component {...pageProps} />
       </div>
   );
}
