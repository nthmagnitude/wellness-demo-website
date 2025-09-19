import { LuUser } from "react-icons/lu";
import hero from "./assets/images/hero.webp";
import yogaPose from "./assets/images/yoga-pose.png";
import flexedMuscles from "./assets/images/muscles.png";
import health from "./assets/images/heart.png";
import Card from "./components/Card";

function App() {
  return (
    <main className="bg-pale-green">
      {/* NAVBAR */}
      <nav className="px-14 py-4 flex justify-between items-center mb-8">
        <div className="flex items-center justify-between space-x-10">
          <h1 className="text-4xl font-bold font-title">
            Fitness <sup className="text-sm align-top">TM</sup>
          </h1>

          <ul className="flex justify-between items-center space-x-6">
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

      {/*TEAM SECTION*/}
      <section className="p-14">
        <p className="uppercase">Our team</p>
        <h1 className="text-5xl">Meet Our Team</h1>
      </section>
    </main>
  );
}

export default App;
