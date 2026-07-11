import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://yassirsaoui.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/Gallery/og-default.jpg`
const SITE_TITLE = 'Yassir Saoui'

function SEO({ title, description, path = '', image }) {
  const fullTitle = `${title} | ${SITE_TITLE}`
  const url = `${SITE_URL}${path}`
  const ogImage = image || DEFAULT_IMAGE

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  )
}

export default SEO