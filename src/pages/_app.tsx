import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
import {ThemeProvider} from 'next-themes'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class">

      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
    </>
  );
}
