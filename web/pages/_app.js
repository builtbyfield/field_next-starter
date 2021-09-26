// import { DevTools } from "@/components";
import "@/styles/css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* <DevTools /> */}
    </>
  );
}

export default MyApp;
