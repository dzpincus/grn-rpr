import Image from "next/image";
import Link from "next/link";

export default function CreativeHealing() {
  return (
    <>
      <div className="bg-tanLight sm:pt-24 mb-10">
        <div className="pb-24 sm:container mx-4 sm:mx-auto flex flex-col sm:grid sm:grid-cols-9 sm:grid-rows-7 place-content-center">
          <div className="sm:col-start-3 sm:col-span-2 text-brown">
            <div className="text-5xl font-serif mb-12">
              <h1 className="mb-4">
                C<span className="italic">reative</span>
              </h1>
              <h1>
                H<span className="italic">ealing</span>
              </h1>
            </div>
            <p className="text-sm">
              When put together, two familiar words have vague implications.
              Let&APOS;s clear that up a bit.
              <br /> <br />
              Creative healing uses evidence-based practices to amplify
              experiential learning.
              <br /> <br />
              Still too jargony?
              <br /> <br />
              Think of it like this:
              <br /> <br />
              It&APOS;s the method and the madness. It&APOS;s the process of
              confronting assumptions about how the world should be, so you can
              accept how it truly is—for better and for worse. It&APOS;s finding
              that same grace for yourself, too.
              <br /> <br />
              Creative healing helps to:
              <br /> <br />
              <ul className="list-disc list-inside" role="list">
                <li>Clarify personal values</li>
                <li>Restore curiosity</li>
                <li>Prioritize obligations</li>
                <li>Strengthen decision-making skills</li>
                <li>Establish sustainable self-care practices</li>
              </ul>
              <br />
              <br />
              It can be a one-on-one thing, or a group effort.
              <br />
              Creative healing can be explored by anyone.
            </p>
          </div>
          <div className="w-full mt-4 sm:mt-0 sm:ml-10 sm:col-start-5 sm:col-span-4 flex place-content-center">
            <div className="flex items-center relative sm:h-full sm:w-full h-72 w-72">
              <Image
                alt="Unsplash"
                src="/Unsplash 3.jpg"
                layout="fill"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 h-fit text-brownDark">
          <div className="relative h-64 sm:h-96 sm:py-80">
            <Image
              className="sepia contrast-100"
              objectFit="fill"
              alt="Figures 1"
              src="/Individual Sessions.jpg"
              layout="fill"
            />
            <div className="h-52 w-80 py-4 px-6 bg-peach opacity-80 absolute bottom-4 right-7 sm:bottom-24 sm:right-12 rounded-tl-3xl rounded-br-3xl">
              <h2 className="font-serif text-3xl pb-2">Individual Sessions</h2>
              <span className="text-sm">
                An individual session can look like a coffee date or a walk by
                the water. If you&APOS;re feeling creative, it can also include
                the use of art, music, and movement to express what&APOS;s not
                so easily put into words.
              </span>
            </div>
          </div>
          <div className="relative">
            <Image
              className="sepia contrast-100"
              objectFit="fill"
              alt="Figures 2"
              src="/Group Sessions.jpg"
              layout="fill"
            />
            <div className="h-52 w-80 py-4 px-6 bg-peach opacity-80 absolute bottom-4 right-7 sm:bottom-24 sm:right-12 rounded-tl-3xl rounded-br-3xl">
              <h2 className="font-serif text-3xl pb-2">Group Sessions</h2>
              <span className="text-sm">
                Group work is incredibly powerful. There&APOS;s a lot to be
                learned from mindfully interacting with others, whether you know
                them already or not!
              </span>
            </div>
          </div>
          <div className="relative">
            <Image
              className="sepia contrast-100"
              objectFit="fill"
              alt="Figures 3"
              src="/Events.jpg"
              layout="fill"
            />
            <div className="h-52 w-80 py-4 px-6 bg-peach opacity-80 absolute bottom-4 right-7 sm:bottom-24 sm:right-12 rounded-tl-3xl rounded-br-3xl">
              <h2 className="font-serif text-3xl pb-2">Events</h2>
              <span className="text-sm">
                Events The Grin Reaper hosts public events that encourage people
                to indulge in some spontaneity, and make new connections. <br />
                <br />
                We also curate private events.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-items-center text-center bg-tanLight py-16">
        <h1 className="text-5xl text-black font-serif pb-12">
          Let&APOS;s get started!
        </h1>
        <p className="text-sm text-brown w-3/4 sm:w-1/2 place-self-center pb-12">
          I offer services on a sliding scale to make sure cost is never a
          barrier for folks in need. Whether you&APOS;re looking to start an
          independent journey, explore a group setting, or curate a unique
          experience, get in touch.
        </p>
        <Link href="/contact">
          <button
            className="w-32 py-1 
                       place-self-center font-normal 
                       text-xl text-white rounded-2xl 
                       bg-gradient-to-tl from-buttonGradient1 
                       to-buttonGradient2 hover:from-buttonGradient2 
                       hover:to-buttonGradient1"
            type="button"
          >
            Contact
          </button>
        </Link>
      </div>
    </>
  );
}
