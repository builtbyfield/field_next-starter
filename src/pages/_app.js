import { DevTools } from "src/components";
import "src/styles/css/index.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <DevTools />
    </>
  );
}

export default MyApp;
