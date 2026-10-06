import michael from '../../assets/about/team-michael.jpg'
import placeholder from '../../assets/about/team-placeholder.png'

const members = [
  {
    name: 'Ahmad Akmal Defatra',
    role: 'Chief Executive Officer',
    photo: placeholder,
  },
  { name: 'Michael', role: 'Chief Technology Officer', photo: michael },
  {
    name: 'Diva Nesia Putri',
    role: 'Chief Business Officer',
    photo: placeholder,
  },
  {
    name: 'Joycelyn Emmanuella P.',
    role: 'Chief Marketing Officer',
    photo: placeholder,
  },
  {
    name: 'Catherine Patricia S.',
    role: 'Chief Finance Officer',
    photo: placeholder,
  },
]

// Figma node 76:4539 — five 234x512 cards with 232x411 portraits.
function Team() {
  return (
    <section className="px-20 py-80 lg:py-130 xl:px-0">
      <div className="mx-auto w-full max-w-page">
        <h2
          data-reveal
          className="pt-26 text-center text-h1-sm font-semibold text-muted lg:text-h1"
        >
          Bertemu Tim Padi Nadi
        </h2>
        <p data-reveal className="pt-14 text-center text-lead text-muted">
          Lima orang lintas fungsi: eksekutif, teknologi, bisnis, pemasaran, dan
          keuangan.
        </p>

        <ul
          data-reveal-children
          className="grid gap-25 pt-60 sm:grid-cols-2 lg:grid-cols-5"
        >
          {members.map((member) => (
            <li
              key={member.name}
              className="rounded-card border border-line bg-white p-1"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="aspect-[232/411] w-full rounded-[25px] object-cover"
              />
              <div className="px-26 pt-24 pb-30">
                <h3 className="text-member font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="pt-4 text-role font-semibold text-brand">
                  {member.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Team
