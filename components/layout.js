import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>The Grin Reaper</title>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="flex flex-1 flex-col min-h-full">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
