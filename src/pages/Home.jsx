import Hero from '../sections/home/Hero'
import Marquee from '../sections/home/Marquee'
import PlatformIntro from '../sections/home/PlatformIntro'
import MandorSection from '../sections/home/MandorSection'
import StepsJourney from '../sections/home/StepsJourney'
import FeatureGrid from '../sections/home/FeatureGrid'
import FromRecords from '../sections/home/FromRecords'
import MarketFit from '../sections/home/MarketFit'
import Faq from '../sections/home/Faq'
import CtaBand from '../sections/home/CtaBand'

// Figma node 79:6129 (01 — Home).
function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <PlatformIntro />
      <MandorSection />
      <StepsJourney />
      <FeatureGrid />
      <FromRecords />
      <MarketFit />
      <Faq />
      <CtaBand />
    </>
  )
}

export default Home
