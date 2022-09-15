import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "../styles/globals.css";
import Layout from "../components/layout";

import { UserProvider } from "@auth0/nextjs-auth0";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  const defaultLayout = function (page) {
    return <Layout>{page}</Layout>;
  };

  const getLayout = Component.getLayout || defaultLayout;

  return (
    <ThemeProvider defaultTheme="mytheme">
      <UserProvider>{getLayout(<Component {...pageProps} />)}</UserProvider>
    </ThemeProvider>
  );
}

export default MyApp;
