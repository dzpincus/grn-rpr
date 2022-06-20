import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="grow">{children}</main>
        <Footer></Footer>
      </div>
    </>
  );
}
