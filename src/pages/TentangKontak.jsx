import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import Mission from '../sections/tentang/Mission'
import Roadmap from '../sections/tentang/Roadmap'
import Team from '../sections/tentang/Team'
import SurveyResults from '../sections/tentang/SurveyResults'
import ContactSection from '../sections/tentang/ContactSection'
import heroImage from '../assets/home/padi-panen.jpg'

// Figma node 76:4311 (03 — Tentang Kontak).
function TentangKontak() {
  return (
    <>
      <Seo
        title="Tentang & Kontak — Padi Nadi"
        description="Padi Nadi membangun Mini-ERP khusus penggilingan padi Indonesia. Kenali roadmap, tim, hasil survei product market fit, dan hubungi kami lewat WhatsApp."
        path="/tentang-kontak"
      />
      <PageHero
        image={heroImage}
        lead="Tentang"
        highlight="Padi Nadi"
        body="Kami membangun Mini-ERP khusus untuk membantu penggilingan padi Indonesia bekerja lebih efisien dan bertumbuh berkelanjutan."
        cta="Hubungi Kami"
        href="#kontak"
      />
      <Mission />
      <Roadmap />
      <Team />
      <SurveyResults />
      <ContactSection />
    </>
  )
}

export default TentangKontak
