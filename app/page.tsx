import Image from 'next/image';
import Nav from './components/Nav';
import Hero from './components/hero/Hero';
import Schedule from './components/Schedule';
import Performers from './components/Performers';
import CTA from './components/CTA';
import CTA02 from './components/CTA02';
import LatestEvents from './components/LatestEvents';
import Upcoming from './components/Upcoming';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden items-center justify-between">
      <Nav />
      <Hero />
      <Schedule />
      <Performers />
      <CTA />
      <CTA02 />
      <Upcoming />
      <LatestEvents />
      <Newsletter />
      <Footer />
    </main>
  );
}
