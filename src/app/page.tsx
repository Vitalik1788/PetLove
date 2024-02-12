import HeroImage from './components/heroImage/HeroImage';
import HomeHero from './components/homeHero/HomeHero';

export default function Home() {
  return (
    <main style={{ padding: '0px 20px' }}>
      <HomeHero />
      <HeroImage />
    </main>
  );
}
