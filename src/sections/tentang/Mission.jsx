import logoMark from '../../assets/brand/logo-mark-large.png'

// Figma node 76:4407 — 466.2x431 bordered card beside a 700.8px copy column.
function Mission() {
  return (
    <section className="px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto grid w-full max-w-page items-center gap-60 lg:grid-cols-[466.2fr_700.8fr] lg:gap-[81px]">
        <div
          data-reveal
          className="grid aspect-[466.2/431] place-items-center rounded-card border border-dim bg-white p-40"
        >
          <img
            src={logoMark}
            alt="Logo Padi Nadi"
            className="w-[314px] max-w-full"
          />
        </div>

        <div data-reveal>
          <h2 className="text-feature-title-sm font-semibold text-muted lg:text-feature-title">
            Menguatkan nadi pangan Indonesia melalui teknologi.
          </h2>
          <p className="pt-30 text-mission text-ink">
            Padi Nadi adalah platform Mini-ERP yang berfokus secara eksklusif
            pada sektor manufaktur penggilingan padi, dengan ekosistem manajemen
            stok, analitik cerdas, dan komunitas untuk mengatasi inefisiensi
            pencatatan manual.
          </p>
          <p className="pt-20 text-prose text-muted">
            Kami mengubah pencatatan manual menjadi alur digital: dari
            pencatatan harian, manajemen stok gabah, laporan keuangan, hingga
            analisis berbantuan AI.
          </p>
          <div className="mt-36 rounded-tile bg-mint px-32 py-20">
            <span className="block text-caption-sm text-muted">
              Target utama kami
            </span>
            <b className="text-prose font-bold text-ink">
              UMKM Penggilingan Padi Swasta &amp; Negeri
            </b>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
