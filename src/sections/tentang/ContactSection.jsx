import PillButton from '../../components/PillButton'
import iconWhatsapp from '../../assets/icons/contact-whatsapp.svg'
import iconEmail from '../../assets/icons/contact-email.svg'
import iconRegion from '../../assets/icons/contact-region.svg'
import iconSocial from '../../assets/icons/contact-social.svg'

const channels = [
  { icon: iconWhatsapp, label: 'WhatsApp', value: '+62 8xx xxxx xxxx' },
  { icon: iconEmail, label: 'Email', value: 'Email perusahaan' },
  { icon: iconRegion, label: 'Wilayah', value: 'Jawa Timur, Indonesia' },
  { icon: iconSocial, label: 'Social Media', value: 'Instagram & Facebook' },
]

// Figma node 76:4640 — 616x98 contact cards above a 1248x138.4 dark band.
function ContactSection() {
  return (
    <section
      id="kontak"
      className="scroll-mt-100 bg-cream px-20 py-80 lg:py-130 xl:px-0"
    >
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
        >
          Kami Siap Mendengar
          <br />
          Kebutuhan Anda
        </h2>
        <p className="mx-auto max-w-[860px] pt-14 text-center text-lead text-muted">
          Punya pertanyaan, ide kolaborasi, atau ingin mencoba Padi Nadi?
          Hubungi kami melalui kanal pilihan Anda.
        </p>

        <ul data-reveal-children className="grid gap-20 pt-48 lg:grid-cols-2">
          {channels.map((channel) => (
            <li
              key={channel.label}
              className="flex items-center gap-20 rounded-card border border-line bg-white p-31"
            >
              <span className="grid size-60 shrink-0 place-items-center rounded-full bg-mint">
                <img src={channel.icon} alt="" />
              </span>
              <div>
                <span className="block text-caption-sm text-muted">
                  {channel.label}
                </span>
                <b className="text-prose font-bold text-ink">{channel.value}</b>
              </div>
            </li>
          ))}
        </ul>

        <div
          data-reveal
          className="mt-24 flex flex-col gap-30 rounded-card bg-ink px-44 py-44 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-pitch font-semibold text-dim">
              Mau coba atau berlangganan? Mulai dari satu pesan WhatsApp.
            </p>
            <p className="pt-10 text-prose text-dim">
              Aktifkan uji coba 1 bulan, tanyakan paket yang cocok, atau
              diskusikan kebutuhan penggilingan Anda.
            </p>
          </div>
          <PillButton href="https://wa.me/">
            Aktifkan Uji Coba via WhatsApp
          </PillButton>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
