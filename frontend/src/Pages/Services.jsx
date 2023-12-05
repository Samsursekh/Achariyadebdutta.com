import React, { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import feature1 from "../images/alldebdatta-images/feature1.jpg";
import feature2 from "../images/alldebdatta-images/feature2.jpg";
import feature3 from "../images/alldebdatta-images/feature3.jpg";
import feature4 from "../images/alldebdatta-images/feature4.jpg";
import feature5 from "../images/alldebdatta-images/feature5.jpg";
import feature6 from "../images/alldebdatta-images/feature6.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  const imageArray = [
    {
      id: 1,
      image: feature1,
      HeadText: "Astro Birth Chart Reformation",
      paragraph1:
        "Discover the mysteries of your life's path with a profound examination of your birth chart.",
      paragraph2:
        "“In the complex tapestry of life, challenges can burn like a relentless wildfire. Yet, astrological remedies emerge as a soothing river, bringing fruitful serenity amidst the blaze of adversity.”",
      paragraph3:
        "Embark on a celestial journey, unraveling the cosmic choreography of your birth chart—a mystic script inscribed in the stars. This astrological expedition unveils the cosmic influences sculpting your path, an intricate dance of planets shaping your story.",
      paragraph4:
        "Decode the celestial cipher embedded in your birth moment, revealing the clandestine orchestrations of fate—both benevolent and challenging. Astrology, a cosmic storyteller, illuminates the strengths bestowed by astral energies, fostering clarity for mindful decisions.",
      paragraph5:
        "Life's tempest may rage unabated, but within the folds of astral remedies lies a resilient haven. As you weather the storm, these remedies stand as a cosmic umbrella, safeguarding your well-being. In personalized consultations, your horoscope becomes a narrative, a bespoke cosmic dialogue where concerns find expression, and hope becomes an enduring companion.",
      paragraph6:
        "In this cosmic odyssey, transcend the ordinary and discover profound revelations etched in the celestial tapestry. The astral tableau is not just a chart; it's a living narrative, a cosmic whisper guiding you. Uncover the secrets within, for in their revelation lies the key to understanding, resilience, and a connection with the cosmos. ",
    },
    {
      id: 2,
      image: feature2,
      HeadText: "Astro Vastu Consultancy",
      paragraph1:
        "Dance through life's energies—immerse yourself in the vibrant hues of happiness.",
      paragraph2:
        "“Craft your space, paint with purpose. Your palette, your floor – energy architects. Choose shades, sculpt growth. Vastu aligns, energy defines.”",
      paragraph3:
        "In the dance of energies within your living or working space, the fusion of Astrology and Vastu Shastra creates a tapestry of optimal support. Elevate your surroundings with a personalized Astro Vastu session, aligning forces that nurture robust health, enrich relationships, usher in success, and foster peace and prosperity",
      paragraph4:
        "Let your habitat resonate with harmonious vibrations, cultivating an environment where bliss and growth effortlessly intertwine.",
      paragraph5:
        "Experience the synergy of celestial wisdom and spatial prudence for a thriving and prosperous abode.",
      paragraph6: "",
    },
    {
      id: 3,
      image: feature3,
      HeadText: "Life Coach and Success Guru",
      paragraph1:
        "Elevate your essence with a coaching journey: sculpt your style, infuse substance, and claim the trio of Power, Peace, and Prosperity.",
      paragraph2:
        "“Spark your brilliance, own your journey. I guide, you conquer. Transformative success, step into radiance. Embrace your power, thrive in fulfillment.”",
      paragraph3:
        ", seize your power. Transformative guidance for unstoppable success. Your journey to radiance and fulfillment begins today!",
      paragraph4:
        "Just as a dormant seed holds the potential for a vibrant bloom, the reservoir of understanding and wisdom resides within. Nurturing this internal garden requires a guide, someone to accompany you on the journey inward and unearth the treasures of innate power and knowledge. Picture each coaching session as a tailored compass, steering you towards blossoming in both personal and professional realms. ",
      paragraph5:
        "Unlock your inner potential and wisdom with a seasoned guide on a transformative journey. In each coaching session, we tailor a path for your personal and professional flourishing. Drawing from two decades of experience, I aim to harmonize your life for holistic well-being. Together, we navigate towards claiming your might, seizing control of endeavors, and fostering growth.",
      paragraph6:
        "Let the spark of knowledge illuminate your mental space, paving the way for a purposeful and successful life. Join me on this enriching journey to radiance and fulfillment.",
    },
    {
      id: 4,
      image: feature4,
      HeadText: "Palmistry",
      paragraph1:
        "Trace the echoes of your destiny in the lines of your hands; let the journey begin towards a future woven with blissful possibilities.",
      paragraph2:
        "“In the rhythm of your workplace, your hand is the brushstroke crafting success”",
      paragraph3:
        "In the heart of your kitchen, it orchestrates the symphony of flavors.",
      paragraph4:
        "On the road, it steers your adventure. On your Mobile Screen, it dances with digital dreams. Yet, within its lines, your hand cradles the script of your being and future.",
      paragraph5:
        "Unearth the connection; let Palmistry reveal the whispers of your life's symphony.",
      paragraph6:
        "Interpreting the physical nuances of hands, palmistry is an art that decodes personality traits and foretells future trajectories. Within this mystic practice, each hand resonates with an elemental archetype: earth, air, fire, or water. By scrutinizing the intricacies of your hand, we unveil latent potential—a toolkit for self-discovery and empowerment. This esoteric journey guides you toward a future characterized by profound fulfillment, harnessing the unique energies imprinted in the palms of your hands.",
    },
    {
      id: 5,
      image: feature5,
      HeadText: "Numerology",
      paragraph1:
        "When questions linger, Numerology brings answers, leading you from uncertainty to tranquillity.",
      paragraph2:
        "“Embark on a heartfelt journey with Numerology's embrace. Let its whispers guide you to love , navigate life, and bask in the glow of success. Your personal magic code for a thriving and meaningful existence.”",
      paragraph3: "",
      paragraph4:
        "Embark on a fascinating journey through Numerology, where numbers become keys to unlocking the universe's enigmas.",
      paragraph5:
        "Each digit carries a cosmic resonance, echoing through your past, present, and future. In personalized Numerology sessions, unravel the intricate codes of your life, finding clarity amidst complexity.",
      paragraph6:
        "Let the magic of numbers guide your relationships, fuel your progress, and anchor your professional success. It's not just about numbers; it's about unveiling the cosmic symphony of your existence.",
    },
    {
      id: 6,
      image: feature6,
      HeadText: "Face Reading",
      paragraph1:
        "Master face reading for heightened decision-making wisdom. Unveil allure and insist on your success with serene confidence.",
      paragraph2:
        "“Decode minds, grasp insights, understand deeply, succeed significantly—read faces for the keys to greater success.”",
      paragraph3: "The face reflects the thoughts within",
      paragraph4:
        "Our face, a sophisticated visage, mirrors our unique journey, encapsulating traits and decisions. Linked through the seventh cranial nerve, it records karma and predispositions. Physiognomy decodes these nuances, offering a comprehensive status report—physical, mental, emotional, and spiritual.",
      paragraph5:
        "Amidst lines and expressions lie unseen facets, awaiting revelation. Mastering facial components becomes a potent tool, unraveling mental landscapes for strategic advantages in professional realms. This profound insight fosters success in collaborations, whether coaching entrepreneurs or structured organizations.",
      paragraph6:
        "Believing in the candle's illuminating power, I share this knowledge with varied entities. Equipping with facial analysis basics isn't just pragmatic; it optimizes decision-making, creating reliable, accountable teams for optimal outcomes. It's not a lengthy strategy; it's a concise navigation tool for success.",
    },
  ];

  const [isFlippedArray, setIsFlippedArray] = useState(Array(6).fill(false));

  const handleFlip = (index) => {
    const updatedArray = [...isFlippedArray];
    updatedArray[index] = !updatedArray[index];
    setIsFlippedArray(updatedArray);
  };

  return (
    <section>
      <div className="hidden md:block">
        <TopNavbar />
      </div>
      <div className="bg-black h-[70px]">
        <BottomNavbar className="text-black" />
      </div>
      <div>
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl m-3 font-philosopher  mb-5">
          Services
        </h1>
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 text-center w-[90%] m-auto">
        {imageArray.map((item, index) => {
          return (
            <div className="m-auto border-2 w-[100%] h-auto px-7" key={item.id}>
              <img
                src={item.image}
                alt="feature image"
                className="w-[300px] m-auto rounded-full my-4"
              />
              <h3 className="font-bold text-xl my-3">{item.HeadText}</h3>
              <p className="text-gray-500">{item.paragraph1}</p>
              <p className="text-gray-800 my-4 font-bold">{item.paragraph2}</p>
              <p className="text-gray-500 my-3">{item.paragraph3}</p>
              <p className="text-gray-500 my-3">{item.paragraph4}</p>
              <p className="text-gray-500 my-3">{item.paragraph5}</p>
              <p className="text-gray-500 my-3">{item.paragraph6}</p>
              <Link to={"/appointment"}>
                <button className="text-white my-5 bg-black hover:bg-transparent border border-black rounded-sm px-3 py-2 hover:border hover:border-black hover:text-black transition duration-700 ease-in-out">
                  Get Started Here
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <Footer />
      </div>
    </section>
  );
};

export default Services;
