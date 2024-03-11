'use client';

import HeroImage from './components/heroImage/HeroImage';
import HomeHero from './components/homeHero/HomeHero';
import { PageBox } from './page.styled';

export default function Home() {
  
  return (
    <main>
      <PageBox>
        <HomeHero />
        <HeroImage />
      </PageBox>
    </main>
  );
}
