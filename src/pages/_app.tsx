import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
