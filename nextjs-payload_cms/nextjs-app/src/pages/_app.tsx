import "@/styles/globals.css";
import type { AppProps } from "next/app";
import axios from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = 'applicaiton/json';
axios.defaults.headers.patch["Content-Type"] = "applicaiton/json";
axios.defaults.withCredentials = true;


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
