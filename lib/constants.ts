import settings from '../content/settings.json'

export const SITE_NAME = 'Sci club Chiari'
export const IS_SEASON_OPEN: boolean = settings.isSeasonOpen
export const CURRENT_SEASON: string = settings.currentSeason
export const TESSERAMENTO_BASE_PRICE: number = settings.priceBase
export const TESSERAMENTO_PREMIUM_PRICE: number = settings.pricePremium
export const TESSERAMENTO_POLICY_EXPIRY: string = settings.policyExpiryDate
