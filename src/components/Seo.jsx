const SITE = 'https://padi-nadi.vercel.app'

/**
 * Per-page document metadata.
 *
 * React 19 hoists <title>, <meta> and <link> into <head> on its own, so this
 * renders nothing visible and needs no helmet library. Purely for browser
 * tabs, search results and link previews — it never touches the page.
 */
function Seo({ title, description, path, image = '/og-image.jpg' }) {
  const url = SITE + path
  const imageUrl = SITE + image

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Padi Nadi" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </>
  )
}

export default Seo
