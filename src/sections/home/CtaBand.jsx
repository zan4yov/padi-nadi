import PillButton from '../../components/PillButton'
import decoration from '../../assets/home/cta-decoration.svg'

// Figma node 79:6723 — green band, 126.48px inset, decorative mark bottom right.
function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand px-20 py-70 lg:px-[126.48px] lg:py-100">
      <img
        src={decoration}
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 opacity-90 max-lg:hidden"
      />
      <div
        data-reveal
        className="relative mx-auto flex max-w-page flex-col gap-30 lg:flex-row lg:items-center lg:justify-between"
      >
        <div className="max-w-[760px]">
          <h2 className="text-h4-sm font-semibold text-white lg:text-h4">
            Mulai Uji Coba 1 Bulan Gratis
          </h2>
          <p className="pt-14 text-prose text-white">
            Kirim pesan WhatsApp untuk mengaktifkan uji coba dan didampingi
            onboarding. Mau langsung berlangganan? Sebutkan paket pilihan Anda.
          </p>
        </div>
        <PillButton href="https://wa.me/" variant="gold">
          Aktifkan Uji Coba via WhatsApp
        </PillButton>
      </div>
    </section>
  )
}

export default CtaBand
