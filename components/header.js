import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Creative Healing", url: "/creative-healing" },
    { title: "Death Doula Services", url: "/doula-services" },
    { title: "Contact", url: "/contact" },
    { title: "Groups List", url: "/groups" },
    { title: "Members", url: "/members" },
  ];

  const router = useRouter();

  return (
    <>
      <header className="bg-tan z-50">
        <h1 className="text-center text-black text-2xl font-serif tracking-widest pt-24 pb-20 font-medium">
          T<span className="italic">he </span>G
          <span className="italic">rin </span>R
          <span className="italic">eaper</span>
        </h1>
        <div
          className={`hidden md:flex flex-row justify-center text-base ${
            router.asPath === "/" ? "mb-28" : "mb-4"
          }`}
        >
          {pages.map((page) => (
            <Link key={page.title} href={page.url}>
              <a
                className={`px-4 text-sm hover:text-orange ${
                  router.asPath === page.url
                    ? "text-orangeDark"
                    : "text-brownLight"
                }`}
              >
                {page.title}
              </a>
            </Link>
          ))}
        </div>
      </header>
    </>
  );
}
