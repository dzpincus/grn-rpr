import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header></Header>
        <main class="flex-1">{children}</main>
        <footer class="bg-purple h-36 w-full"></footer>
      </div>
    </>
  );
}
