import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main className="grow">{children}</main>
        <footer className="bg-purple h-36 w-full"></footer>
      </div>
    </>
  );
}
