import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Psychospiritual Support",
    icon: "/psycho.svg",
    description:
      "Removing the stigma from death does not mean removing emotion. It&APOS;s normal to experience a lot of conflicting feelings when one is approaching the end of life. Psychospiritual support is the process of holding space, and finding a way to make peace with this last rite of passage. ",
  },
  {
    title: "Companioning",
    icon: "/companioning.svg",
    description:
      "Company. It&APOS;s a simple but powerful offering for anyone, including those approaching death. Whether we&APOS;re reading together, listening to music, sharing stories, or simply enjoying a comfortable silence, companioning is a way to be present for another&APOS;s journey. ",
  },
  {
    title: "Project Management",
    icon: "/project management.svg",
    description:
      "It may sound a bit cold, but there are lots of logistical bits that emerge when someone is approaching death. A Death Doula helps to schedule visits, make phone calls, gather information, and support both the client and their caregivers.",
  },
  {
    title: "Legacy Work",
    icon: "/legacy work.svg",
    description:
      "Towards the end of life, folks often find there are things that need to be said, or letters that need to be written. Pulling from my creative services, I offer legacy work as a way to create meaningful work that can serve as precious keepsakes for the loved ones who will carry your memories. ",
  },
  {
    title: "Last Rites",
    icon: "/legacy work.svg",
    description:
      "When a person is approaching the end of life, I work to ensure their final days are comfortable and meaningful. For some folks, that might mean hosting a Living Funeral so they can say goodbye and reflect on impactful relationships. For others, it might include considerations for a traditional funeral. Making these arrangements ahead of time promotes closure, and gives caregivers a chance to focus on their grieving process once their loved one has passed. ",
  },
];

export default function DeathDoulaServices() {
  return (
    <>
      <div className="h-96 flex flex-col mb-36 w-full">
        <div className="flex flex-col sm:block relative sm:h-full sm:w-full">
          <div className="h-56 w-56">
            <Image
              alt="Abstract art"
              src="/Abstract5.JPG"
              layout="fill"
              objectFit="cover"
              objectPosition="50% 0%"
              quality={100}
            />
          </div>
          <div className="pt-10 pb-8 z-50 sm:w-1/2 sm:absolute sm:left-1/4 sm:-bottom-32 sm:text-center bg-tan text-brown px-10">
            <h1 className="text-5xl font-serif pb-12">
              D<span className="italic">eath </span>D
              <span className="italic">oula </span>S
              <span className="italic">ervices</span>
            </h1>
            <p className="text-justify text-sm">
              For many people, death is tragic, terrifying, taboo, or
              intolerably isolating. It doesn&APOS;t have to be.
              <br /> <br />
              As a Death Doula, I work with people who are approaching the end
              of life. I offer psycho-spiritual support, and help make necessary
              arrangements. I also work with family, friends, and loved ones as
              they prepare for the transition and navigate the grieving process.
              <br /> <br />
              If you or someone you love is preparing for this last rite of
              passage, reach out. I curate services to meet the exact needs of
              individual clients, and offer a sliding scale to accommodate
              different financial realities.
            </p>
            <hr className="border-1 border-brownLight mt-8" />
          </div>
        </div>
      </div>
      <div className="bg-yellow pt-72 sm:pt-0 h-full flex flex-col sm:flex-row sm:place-content-center sm:px-60">
        <div className="w-full sm:w-3/4 sm:px-16 sm:pt-20 mb-40 grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-20 text-black">
          {sections.map((section, index) => {
            return (
              <div
                key={section.title}
                className="grid grid-cols-7 col-span-1 h-fit"
              >
                <div className="h-full col-span-1">
                  <img
                    className="align-top fill-purple"
                    height="50px"
                    width="50px"
                    alt={section.title}
                    src={section.icon}
                  />
                </div>
                <div className="pl-2 col-start-2 col-span-6">
                  <h2 className="font-serif text-3xl pb-6">{section.title}</h2>
                  <span className="text-sm text-justify">
                    {section.description}
                  </span>
                </div>
              </div>
            );
          })}
          <div className="flex flex-col col-span-1 h-96 w-96 place-self-center rounded-full bg-orangeLight text-white text-center">
            <h3 className="text-2xl pt-12">
              How to get
              <br />
              <span className="italic">started</span>
            </h3>
            <p className="mx-4 py-10 text-sm">
              I work with each individual client to determine which services are
              right for them. I also use a sliding scale to make sure cost is
              never a barrier for folks in need. <br />
              For more information get in touch.
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
        </div>
      </div>
    </>
  );
}
