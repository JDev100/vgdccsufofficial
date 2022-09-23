import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/sections/hero";
import HeroAlt from "../components/sections/heroalt";

export default function Home() {
  return (
    <>
      <Hero
        title="Welcome to VGDC of CSUF"
        subtitle="Join our club and make awesome games"
        image="/images/hero-3.jpg"
        ctaText="Join a Dev Team"
        ctaLink="/"
      />
      <HeroAlt
        title="Create Amazing Games"
        subtitle="We aim to build a foundation for future industry leaders by developing their technical, professional, and social skills. We facilitate these by offering various events, programs, and initiatives that have been proven to help students start up their careers on the right foot."
        image="/images/hero-alt.jpg"
      />
    </>
  );
}
