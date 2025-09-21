import { LuArrowRight, LuUser } from "react-icons/lu";
import hero from "./assets/images/hero.webp";
import yogaPose from "./assets/images/yoga-pose.png";
import flexedMuscles from "./assets/images/muscles.png";
import health from "./assets/images/heart.png";
import instructor1 from "./assets/images/instructor1.webp";
import instructor2 from "./assets/images/instructor2.webp";
import instructor3 from "./assets/images/instructor3.webp";
import display1 from "./assets/images/display1.webp";
import display2 from "./assets/images/display2.webp";
import display3 from "./assets/images/display3.webp";
import display4 from "./assets/images/display4.webp";
import display5 from "./assets/images/display5.webp";
import Card from "./components/Card";
import type { serviceProps } from "./components/ReviewCard";
import ReviewCard from "./components/ReviewCard";
import { AiFillApple } from "react-icons/ai";
import playstore from "./assets/images/playstore.png";
import appSample from "./assets/images/app-sample.webp";
import type { PriceCardProps } from "./components/PriceCard";
import PriceCard from "./components/PriceCard";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const reviews: Array<serviceProps> = [
  {
    name: "Claire Branford",
    username: "@staking",
    review: "My brother, I can't thank you enough even if you say it's all me",
    date: "22/03/2021",
  },
  {
    name: "Jamie Kokot",
    username: "@staking",
    review: "I started going to the gym but had no idea what i was doing",
    date: "22/03/2021",
  },
  {
    name: "Claire Branford",
    username: "@staking",
    review: "My brother, I can't thank you enough even if you say it's all me",
    date: "22/03/2021",
  },

  {
    name: "Claire Branford",
    username: "@staking",
    review: "I started going to the gym but had no idea what i was doing",
    date: "22/03/2021",
  },
  {
    name: "Claire Branford",
    username: "@staking",
    review: "My brother, I can't thank you enough even if you say it's all me",
    date: "22/03/2021",
  },
];

const plans: Array<PriceCardProps> = [
  {
    title: "Starter plan",
    price: 14,
    features: [
      "8 yoga classes per month",
      "2 fitness training sessions per month",
      "Access to online resources",
      "Monthly wellness newsletter",
    ],
  },
  {
    title: "Basic plan",
    price: 29,
    features: [
      "Unlimited yoga classes",
      "4 fitness training sessions per month",
      "1 personalized coaching session per month",
      "Access to online resources",
      "Monthly wellness newsletter",
    ],
    active: true,
  },
  {
    title: "Premium plan",
    price: 139,
    features: [
      "4 personalized coaching sessions per month",
      "Customized fitness and yoga plans",
      "Access to online resources",
      "Monthly wellness newsletter",
    ],
  },
];

function App() {
  return (
    <main className="bg-pale-green">
      {/* NAVBAR */}
      <nav className="px-14 py-4 flex justify-between items-center mb-8">
        <div className="flex items-center justify-between space-x-10">
          <h1 className="text-4xl font-bold font-title">
            Fitness <sup className="text-sm align-top">TM</sup>
          </h1>

          <ul className="hidden md:flex justify-between items-center space-x-6">
            <li>
              <a href="/">Trainers</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Plans</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between border-2 border-accent rounded-3xl p-2 bg-green-200 active-scale">
          <LuUser className="mr-2 text-3xl p-1 rounded-full bg-green-200 border-2 border-accent" />
          <p className="font-semibold">Log in</p>
        </div>
      </nav>

      {/* HERO SECTION*/}
      <section className="flex flex-col md:flex-row justify-between items-center h-[calc(100lvh-120px)] max-h-[600px] px-14 mb-8">
        <div className="flex items-center justify-between h-full flex-1">
          <div className="px-6">
            <h1 className="text-7xl">
              Transform{" "}
              <span className="italic font-cursive text-8xl">Your Body</span>{" "}
              and Mind
            </h1>
            <div className="w-2/3 space-y-4 mt-6">
              <p>
                Join us in transforming your body and mind through our
                comprehensive yoga and fitness programs.
              </p>

              <div className="flex space-x-4 items-center px-1">
                <button className="bg-accent text-white font-semibold px-4 py-2 rounded-full w-52 active-scale">
                  Become a member
                </button>
                <button className="border-2 border-accent bg-green-200 font-semibold px-4 py-2 rounded-full w-52 active-scale">
                  Start for free
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-1">
          <img
            src={hero}
            alt="Image of woman doing yoga"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="bg-accent p-14 mb-4">
        <div className="flex items-center">
          <div className="flex items-center justify-evenly w-2/3">
            <div>
              <p className="text-white text-7xl">
                3.2<span className="text-lime-200 text-3xl">K</span>
              </p>
              <p className="text-white/80">World champions</p>
            </div>
            <div className="w-px h-[5rem] bg-white/90" />
            <div>
              <p className="text-white text-7xl">
                1.8<span className="text-lime-200 text-3xl">%</span>
              </p>
              <p className="text-white/80">Runner up champions</p>
            </div>
            <div className="w-px h-[5rem] bg-white/90" />
            <div>
              <p className="text-white text-7xl">
                4.5<span className="text-lime-200 text-3xl">M</span>
              </p>
              <p className="text-white/80">Sea games participation</p>
            </div>
          </div>
          <div className="w-1/3">
            <p className="text-white">
              Once we recieve your consult request, we match you up with a
              trainer. This is to ensure that your unique goals, needs and
              personalities align.
            </p>
            <a href="/" className="text-lime-200 mt-2 block">
              Become a member now
            </a>
          </div>
        </div>
      </section>

      {/*SERVICES SECTION*/}
      <section className="p-14">
        <p className="uppercase">Our services</p>
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-5xl mb-2">Our Services</h1>
            <p>
              Whether you're a beginner or an advanced practioner, our offerings
              are designed to inspire support you on your wellness journey.
            </p>
          </div>

          <button className="rounded-full bg-accent text-white p-4 font-semibold active-scale">
            Explore the services
          </button>
        </div>
        <div className="mt-10 flex md:flex-row flex-col items-center justify-between space-x-10">
          <Card
            icon={yogaPose}
            heading="Yoga Classes"
            text="Classes for all levels, from beginners to advanced. Enjoy various styles like Sutra, Virasana, and Yin yoga."
          />

          <Card
            icon={flexedMuscles}
            heading="Fitness Training"
            text="Our expert trainers offer customized workouts and ongoing support for weight loss, muscle building and overall health."
          />

          <Card
            icon={health}
            heading="Wellness workshops"
            text="Worshops on mindfullness, stress management and holistic health. Gain valuable insights and practical tools to enhance your physical and mental wellbeing"
          />
        </div>
      </section>

      {/* OUR TEAM*/}
      <section className="p-14">
        <p className="uppercase">Our team</p>
        <h1 className="text-5xl mb-2">Meet Our Team</h1>

        <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 py-8 grid-rows-1 auto-rows-max">
          <div className=" flex flex-col justify-between items-start bg-accent p-8 rounded-3xl xl:min-h-[30rem] md:min-h-96">
            <div className="space-y-2">
              <p className="uppercase text-white/70">Join the team</p>
              <h1 className="text-3xl text-white">Personalized Coaching</h1>
              <p className="text-white">
                One-on-one sessions with our fitness and yoga experts. Get
                personalized guidance and enchouragement to reach your specific
                goals.
              </p>
            </div>
            <button className="bg-green-200 text-accent font-semibold px-4 py-2 rounded-full active-scale">
              View more
            </button>
          </div>
          <div>
            <img
              src={instructor1}
              alt=""
              className="object-cover rounded-3xl h-full"
            />
            <div className="flex justify-between items-center mt-2">
              <p>Clarke Brunet</p>
              <p className="font-semibold active-scale">
                View more <LuArrowRight className="inline" />
              </p>
            </div>
          </div>

          <div>
            <img
              src={instructor2}
              alt=""
              className="object-cover rounded-3xl h-full"
            />
            <div className="flex justify-between items-center mt-2">
              <p>Emily Sky</p>
              <p className="font-semibold active-scale">
                View more <LuArrowRight className="inline" />
              </p>
            </div>
          </div>

          <div>
            <img
              src={instructor3}
              alt=""
              className="object-cover rounded-3xl h-full"
            />
            <div className="flex justify-between items-center mt-2">
              <p>Chelsea Desque</p>
              <p className="font-semibold active-scale">
                View more <LuArrowRight className="inline" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*REVIEWS SECTION*/}
      <section className="p-14">
        <div className="mb-6">
          <h1 className="text-5xl w-1/2 mx-auto text-center">
            Over 200+ reviews from our clients
          </h1>
        </div>
        <div className="grid md:grid-cols-4 xl:grid-cols-5 gap-4">
          {reviews.map((item, index) => (
            <ReviewCard {...item} key={index} />
          ))}
        </div>
      </section>

      {/*DOWNLOAD SECTION*/}
      <section className="p-14">
        <div className="bg-gradient-to-br from-green-500 to-green-300 flex items-center rounded-3xl p-8 h-[28rem]">
          <div className="xl:w-1/3 md:w-1/2 h-full flex flex-col justify-between px-4 py-8">
            <div className="space-y-4">
              <h1 className="text-5xl">
                Clearmind, <span className="font-cursive">your partner</span> in
                mental wellness.
              </h1>
              <p>
                Find and bookyour favourite yoga classes from anywhere with our
                yog app.
              </p>
            </div>
            <div className="xl:mt-16 md:mt-8 flex items-center space-x-4">
              {/*DOWNLOAD FROM APP AND PLAY STORE btns*/}
              <div className="bg-black rounded-2xl p-2 w-max flex px-4 active-scale">
                <AiFillApple fill="white" size={36} />
                <div className="flex flex-col">
                  <p className=" text-white/90 text-sm">Donwload on the</p>
                  <p className="font-semibold text-white text-lg">App Store</p>
                </div>
              </div>
              <div className="bg-black rounded-2xl p-2 w-max flex px-4 space-x-2 active-scale">
                <img src={playstore} alt="playstore icon" className="w-12" />
                <div className="flex flex-col">
                  <p className=" text-white/90 text-sm">Donwload on the</p>
                  <p className="font-semibold text-white text-lg">PlayStore</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex-1">
            <img
              src={appSample}
              alt=""
              className="absolute w-[36rem] h-[36rem] object-contain inset-0 m-auto z-10"
            />
          </div>
        </div>
      </section>

      {/*PRICING*/}
      <section className="p-14">
        <div className="w-1/2  mx-auto">
          <h1 className="text-center text-6xl">
            Community <span className="font-cursive text-8xl">sweat</span>{" "}
            classes
          </h1>
          <p>
            If you're looking to supplement your current fitness routine with
            small group training or just want to join a few classes a month then
            take a look a our class pass options below.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {plans.map((item, index) => (
            <PriceCard {...item} key={index} />
          ))}
        </div>
      </section>

      {/*CONTACTS SECTION*/}
      <section className="p-14 flex items-center space-x-4">
        {/*Images*/}
        <div className="flex-1 flex items-center">
          <img
            src={display1}
            alt=""
            className="rounded-full object-cover xl:w-96 xl:h-96 md:w-52 md:h-52"
          />
          <div className="grid grid-cols-2 gap-4">
            {/*Yeah, they don't have the same width and height, but i like it like that weirdly*/}
            <img src={display2} alt="" className="rounded-full object-cover" />
            <img src={display3} alt="" className="rounded-full object-cover" />
            <img src={display4} alt="" className="rounded-full object-cover" />
            <img src={display5} alt="" className="rounded-full object-cover" />
          </div>
        </div>

        <div className="w-1/3 space-y-4 px-2">
          <h1 className="text-5xl">Get in touch.</h1>
          <p>
            I want to help you overcome all your mental and physical hurdles in
            your everyday life. 6 years ago i was electrocuted with 777 volts
            {/*No idea why was this was included in the design and i think it's funny*/}
            .
          </p>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2">
              Email (required)
            </label>
            <input
              type="email"
              placeholder="username@email.com"
              className="mb-4 p-2 focus:outline-none focus:border-b focus:border-accent"
            />
            <label htmlFor="message" className="mb-2">
              Message (required)
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="enter message here"
              className="mb-4 p-2 focus:outline-none focus:border-b focus:border-accent bg-green-200"
            ></textarea>
            <button className="bg-accent text-white font-semibold px-2 py-4 rounded-full w-40">
              Send
            </button>
          </div>
        </div>
      </section>

      {/*FAQ SECTION*/}
      <section className="p-14 bg-accent"></section>
      {/*Footer SECTION*/}
      <footer className="p-14 flex items-center justify-between">
        <div className="flex md:flex-col space-y-6 justify-between w-1/3">
          <h1 className="font-title text-5xl">
            Fitness<sup className="text-[0.5rem] align-top">TM</sup>
          </h1>
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col">
            <label htmlFor="email">Enter your email</label>
            <div className="flex w-full space-x-4">
              <input
                type="email"
                placeholder="user@email.com"
                className="focus:outline-none border-b border-accent flex-1"
              />
              <button className="bg-accent text-white font-semibold rounded-full px-4 py-2">
                Subscribe
              </button>
            </div>
          </div>
          <p className="text-sm">
            By subscribing you agree with our Privacy policy and provide consent
            to recieve updates from our company.
          </p>
          <p>
            &copy; {new Date().getFullYear().toString()} Template by Produlis
          </p>
        </div>
        <div className="w-1/3 space-y-8 flex md:flex-col">
          <div className="flex items-center space-x-10">
            <div className="space-y-4 flex flex-col">
              <h1 className="text-3xl font-semibold">Our services</h1>
              <a href="/">Yoga classes</a>
              <a href="/">Fitness training</a>
              <a href="/">Wellness workshops</a>
              <a href="/">Personalized coaching</a>
            </div>
            <div className="space-y-4 flex flex-col ">
              <h1 className="text-3xl font-semibold">Follow us</h1>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-2xl" />
                <p className=""> facebook</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-2xl" />
                <p className=""> instagram</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaTwitter className="text-2xl" />
                <p className=""> X</p>
              </div>

              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-2xl" />
                <p className=""> LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-4">
            <p>Licensing</p>
            <p>Style Guide</p>
            <p
              className="active-scale"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to top
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
