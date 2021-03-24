
import React, {fragment}from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return ( <fragment> <Component {...pageProps} /> </fragment>);
}

export default MyApp
