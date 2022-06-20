import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="py-10 flex justify-center bg-gradient-to-r from-gradientOrange to-gradientPurple">
        <Image
          alt="Grin Reaper Logo"
          src="/GrinReaper.png"
          width={346}
          height={469}
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
        className="hidden sm:grid grid-cols-1 h-96"
        style={{ height: "890px" }}
      >
        <div className="h-full w-full max-h-full max-w-full relative flex justify-center items-center">
          <Image
            alt="Abstract art"
            src="/Abstract4.JPG"
            layout="fill"
            quality={100}
          />
          <span className="text-white text-3xl font-serif relative">
            See you there.
          </span>
        </div>
      </div>
      <div
        className="sm:hidden grid grid-cols-1 h-96"
        style={{ height: "100px" }}
      >
        <div className="h-full w-full max-h-full max-w-full relative flex justify-center items-center">
          <Image
            alt="Abstract art"
            src="/Abstract4.JPG"
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
