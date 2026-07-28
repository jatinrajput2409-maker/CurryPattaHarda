import React from 'react';
import Hero from '../components/sections/Hero';
import AboutPreview from '../components/sections/AboutPreview';
import SignatureDishes from '../components/sections/SignatureDishes';
import WhyCurryPatta from '../components/sections/WhyCurryPatta';
import Testimonials from '../components/sections/Testimonials';
import GallerySection from '../components/sections/GallerySection';
import ReservationCTA from '../components/sections/ReservationCTA';
import Newsletter from '../components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SignatureDishes />
      <WhyCurryPatta />
      <Testimonials />
      <GallerySection />
      <ReservationCTA />
      <Newsletter />
    </>
  );
}
