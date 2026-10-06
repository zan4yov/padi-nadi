import dasbor from '../../assets/marquee/dasbor.svg'
import pencatatan from '../../assets/marquee/pencatatan.svg'
import stokGabah from '../../assets/marquee/stok-gabah.svg'
import laporanKeuangan from '../../assets/marquee/laporan-keuangan.svg'
import riwayatAnalisis from '../../assets/marquee/riwayat-analisis.svg'
import analisAi from '../../assets/marquee/analis-ai.svg'
import komunitas from '../../assets/marquee/komunitas.svg'
import petaMitra from '../../assets/marquee/peta-mitra.svg'

const items = [
  { icon: dasbor, label: 'Dasbor' },
  { icon: pencatatan, label: 'Pencatatan' },
  { icon: stokGabah, label: 'Stok Gabah' },
  { icon: laporanKeuangan, label: 'Laporan Keuangan' },
  { icon: riwayatAnalisis, label: 'Riwayat Analisis' },
  { icon: analisAi, label: 'Analis AI' },
  { icon: komunitas, label: 'Komunitas' },
  { icon: petaMitra, label: 'Peta Mitra' },
]

function Group({ hidden = false }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 gap-60 pr-60"
    >
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-14">
          <img src={item.icon} alt="" width="18" height="18" />
          <span className="text-marquee font-medium whitespace-nowrap text-white">
            {item.label}
          </span>
        </li>
      ))}
    </ul>
  )
}

// Figma node 79:6197 — the list is repeated so the loop is seamless.
// Six copies animated by -50%: the shift must be a whole number of copies or
// the loop seams, so the count stays even. One half is ~4756px, which clears
// any real viewport. Two copies left a blank stretch above 1585px.
function Marquee() {
  return (
    <section
      aria-label="Fitur Padi Nadi"
      className="overflow-hidden bg-ink py-28"
    >
      <div className="flex w-max animate-marquee">
        <Group />
        <Group hidden />
        <Group hidden />
        <Group hidden />
        <Group hidden />
        <Group hidden />
      </div>
    </section>
  )
}

export default Marquee
