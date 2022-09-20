import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { titleItalics } from "../utils/text";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const pages = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Forum", url: "/forum" },
  ];

  const router = useRouter();

  function mobilMenuOnClick(route) {
    setMenuActive(false);
    router.push(route);
  }

  return (
    <>
      <header className="bg-base-200 z-50">
        <a
          onClick={() => setMenuActive((menuActive) => !menuActive)}
          className="fixed sm:hidden top-5 right-5 z-60 text-secondary"
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </a>

        <h1 className="text-center text-2xl font-serif tracking-widest font-medium pt-24 pb-20">
          {titleItalics("The Grin Reaper")}
          <br />
        </h1>
        <div
          className={`hidden md:flex flex-row justify-center text-base ${
            router.asPath === "/" ? "mb-28" : "mb-4"
          }`}
        >
          {pages.map((page) => (
            <Link key={page.title} href={page.url}>
              <a
                className={`px-4 text-sm hover:text-secondary-focus ${
                  router.asPath === page.url ? "text-secondary" : "text-info"
                }`}
              >
                {page.title}
              </a>
            </Link>
          ))}
        </div>

        <Transition
          show={menuActive}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-700"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed sm:hidden top-0 left-0 w-full h-full bg-base-200">
            <a
              onClick={() => setMenuActive((menuActive) => !menuActive)}
              className="fixed sm:hidden top-5 right-5 z-60 text-secondary"
            >
              <FontAwesomeIcon icon={faXmark} size="2x" />
            </a>
            <div
              className={`flex flex-col mt-36 gap-6 text-center text-base ${
                router.asPath === "/" ? "mb-28" : "mb-4"
              }`}
            >
              {pages.map((page) => (
                <a
                  onClick={() => mobilMenuOnClick(page.url)}
                  key={page.title}
                  className={`px-4 text-sm hover:text-secondary-focus ${
                    router.asPath === page.url ? "text-secondary" : "text-info"
                  }`}
                >
                  {page.title}
                </a>
              ))}
            </div>
          </div>
        </Transition>
      </header>
    </>
  );
}
