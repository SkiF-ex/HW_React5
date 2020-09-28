import { nextI18NextRewrites } from 'next-i18next/rewrites'

const localeSubpaths = {}

export async function rewrites() { return nextI18NextRewrites(localeSubpaths) }
export const publicRuntimeConfig = {
    localeSubpaths,
}