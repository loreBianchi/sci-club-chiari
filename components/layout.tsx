import Footer from './footer'
import Meta from './meta'
import Navbar from './navbar'

type Props = {
  children: React.ReactNode
  hasStickyBanner?: boolean
  bannerLink?: string
}

const Layout = ({ children, hasStickyBanner = false, bannerLink }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        {hasStickyBanner && bannerLink && (
          <div className="bg-green-500 text-white text-center py-2 sticky top-[96px]">
            <p>
              <strong>🚨 ATTENZIONE 🚨</strong> le iscrizioni sono aperte!{' '}
              <a
                href={bannerLink}
                className="underline hover:text-blue-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clicca qui per iscriverti!
              </a>
            </p>
          </div>
        )}
        <main className={hasStickyBanner && bannerLink ? 'mt-8' : 'mt-4'}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
