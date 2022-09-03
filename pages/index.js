import Image from "next/image";

import logo from "../public/GrinReaper.png";
import Abstract4 from "../public/Abstract4.JPG";

export default function Home() {
  return (
    <>
      <div className="py-10 flex justify-center bg-gradient-to-r from-gradientOrange to-gradientPurple">
        <Image
          loading="eager"
          alt="Grin Reaper Logo"
          src={logo}
          width={346}
          height={469}
          priority
        />
      </div>
      <div className="bg-tan grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-black text-2xl font-serif pt-24 font-medium">
          T<span className="italic">he </span>G
          <span className="italic">rin </span>R
          <span className="italic">eaper</span>
        </h1>
        <span className="text-3xl py-10">&mdash;</span>
        <p className="text-center text-brownDark w-1/2 font-extralight pb-4">
          The Grin Reaper is a growing collective that promotes cathartic
          exploration and radical self-acceptance. It&apos;s spearheaded by
          Sasha Pincus, a Death Doula and Creative Healer based in Long Beach,
          NY.
        </p>
      </div>
      <div
        className="hidden sm:grid grid-cols-2 h-96"
        style={{ height: "890px" }}
      >
        <div className="h-full w-full max-h-full max-w-full relative flex justify-center items-center">
          <Image
            loading="eager"
            alt="Abstract art"
            src={Abstract4}
            layout="fill"
            quality={100}
          />
          <span className="text-white text-3xl font-serif relative">
            See you there.
          </span>
        </div>
        <div className="h-full w-full bg-tanDark p-10">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23AD1457&ctz=America%2FNew_York&showTitle=1&title=Event%20Calendar&showDate=1&showPrint=0&showTabs=1&showCalendars=0&src=YWc0bDBydTdtOGs2ZWd2MGdqbXU3YnFoZGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%238E24AA"
            style={{ border: "solid 1px #777" }}
            scrolling="no"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
      <div
        className="sm:hidden grid grid-cols-1 h-96"
        style={{ height: "100px" }}
      >
        <div className="h-full w-full max-h-full max-w-full relative flex justify-center items-center">
          <Image
            loading="eager"
            alt="Abstract art"
            src={Abstract4}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <span className="text-white text-3xl font-serif relative">
            See you there.
          </span>
        </div>
      </div>
    </>
  );
}
