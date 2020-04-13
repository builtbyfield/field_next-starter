import { Layout } from "components";

function CustomApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CustomApp;
