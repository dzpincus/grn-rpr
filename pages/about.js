import Image from "next/image";
import headshot from "../public/Headshot1.jpg";
import signature from "../public/Signature.jpg";
import abstract2 from "../public/Abstract2.jpg";

export default function About() {
  return (
    <>
      <div className="sm:h-screen sm:mb-1">
        <div className="flex flex-col sm:grid sm:grid-cols-10 sm:grid-rows-2 h-full">
          <div className="flex sm:hidden relative" style={{ height: "250px" }}>
            <Image
              loading="eager"
              alt="Headshot"
              src={headshot}
              objectFit="cover"
              objectPosition="50% 25%"
              layout="fill"
              priority
            />
          </div>
          <div className="hidden sm:block row-start-1 col-start-1 col-span-full self-center relative h-full contrast-150">
            <Image
              loading="eager"
              alt="Abstract art"
              src={abstract2}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="z-30 sm:self-end sm:row-span-full sm:col-start-3 sm:col-end-9 bg-white flex flex-row">
            <div className="relative hidden sm:block sm:w-1/2">
              <Image
                loading="eager"
                className="col-span-1"
                alt="Headshot"
                src={headshot}
                objectFit="cover"
                layout="fill"
                priority
              />
            </div>
            <div className="sm:w-1/2 bg-white px-4 sm:px-10 py-12">
              <h1 className="text-3xl font-serif">Hi there!</h1>
              <p>
                <br />
                My name is Sasha.
                <br />​<br />
                I&apos;m a certified Death Doula and a Creative Healer.
                <br />
                I&apos;m also just a lady who sincerely wants to talk about your
                feelings.
                <br />
                That might be hard to believe, but I&apos;ve ruined enough
                parties to say with absolute certainty that it&apos;s true.
                <br />
                <br />I earned my Doula certification from the University of
                Vermont during the summer of 2020. I can&apos;t bake bread to
                save my life so I decided to learn a lot about death instead.
                <br />​<br />I will complete my Master&apos;s in Creative Arts
                Therapy this August.
                <br />​<br />
                If you&apos;re wondering why you should trust a baby bird to
                help your heart, please know that I am thirty. I have a young
                face and took the scenic route to the start of my career, but
                for that I am all the wiser (and much more good humored).
                <br />​<br />
                Looking forward to meeting you,
              </p>
              <div className="flex sm:justify-center">
                <Image
                  loading="eager"
                  alt="Signature"
                  src={signature}
                  width={178}
                  height={119}
                />
              </div>
            </div>
          </div>

          <div
            className="block sm:hidden relative contrast-150 w-full"
            style={{ height: "200px" }}
          >
            <Image
              loading="eager"
              alt="Abstract art"
              src={abstract2}
              objectFit="cover"
              layout="fill"
              quality={100}
            />
          </div>
        </div>
      </div>
    </>
  );
}
