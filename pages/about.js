import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="sm:h-screen sm:mb-1">
        <div class="flex flex-col sm:grid sm:grid-cols-10 sm:grid-rows-2 h-full">
          <div className="flex sm:hidden relative" style={{ height: "250px" }}>
            <Image
              alt="Headshot"
              src="/Headshot1.png"
              objectFit="cover"
              objectPosition="50% 25%"
              layout="fill"
            />
          </div>
          <div class="hidden sm:block row-start-1 col-start-1 col-span-full self-center relative h-full contrast-150">
            <Image
              alt="Abstract art"
              src="/Abstract2.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div class="z-30 sm:self-end sm:row-span-full sm:col-start-3 sm:col-end-9 bg-white flex flex-row">
            <div className="relative hidden sm:block sm:w-1/2">
              <Image
                className="col-span-1"
                alt="Headshot"
                src="/Headshot1.png"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="sm:w-1/2 bg-white text-brownDark font-serif px-4 sm:px-10 py-12">
              <h1 className="text-3xl">Hi there!</h1>
              <p>
                <br />
                My name is Sasha.
                <br />​<br />
                I'm a certified Death Doula and a Creative Healer.
                <br />
                I'm also just a lady who sincerely wants to talk about your
                feelings.
                <br />
                That might be hard to believe, but I've ruined enough parties to
                say with absolute certainty that it's true.
                <br />
                <br />I earned my Doula certification from the University of
                Vermont during the summer of 2020. I can't bake bread to save my
                life so I decided to learn a lot about death instead.
                <br />​<br />I will complete my Master's in Creative Arts
                Therapy this August.
                <br />​<br />
                If you're wondering why you should trust a baby bird to help
                your heart, please know that I am thirty. I have a young face
                and took the scenic route to the start of my career, but for
                that I am all the wiser (and much more good humored).
                <br />​<br />
                Looking forward to meeting you,
              </p>
              <div className="flex sm:justify-center">
                <Image
                  alt="Signature"
                  src="/Signature.png"
                  width={178}
                  height={119}
                />
              </div>
            </div>
          </div>

          <div
            class="block sm:hidden relative contrast-150 w-full"
            style={{ height: "200px" }}
          >
            <Image
              alt="Abstract art"
              src="/Abstract2.jpg"
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
