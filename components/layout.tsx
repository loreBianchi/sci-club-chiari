import { IS_SEASON_OPEN } from '../lib/constants'
import Footer from './footer'
import IscrizioniStickyBanner from './iscrizioni-sticky-banner'
import Meta from './meta'
import Navbar from './navbar'
import SeasonClosedStickyBanner from './season-closed-sticky-banner'

type Props = {
  children: React.ReactNode
  hasStickyBanner?: boolean
  bannerLink?: string
  isSeasonClosed?: boolean
}

const Layout = ({ children, hasStickyBanner = false, bannerLink }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar />
        {hasStickyBanner && bannerLink && IS_SEASON_OPEN && <IscrizioniStickyBanner bannerLink={bannerLink} />}
        {hasStickyBanner && !IS_SEASON_OPEN && <SeasonClosedStickyBanner />}
        {/* Main content */}
        <main className={hasStickyBanner && bannerLink ? 'mt-8' : 'mt-4'}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
