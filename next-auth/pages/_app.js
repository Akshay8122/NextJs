import "../styles/globals.css";
import Navbar from "../components/Navbar";
import "../components/Navbar.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider>
        <Navbar />
      </SessionProvider>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
