/**
 * Same-origin path used by the browser for public Strapi files.
 *
 * The Next.js server proxies only this path to Strapi. Keeping it relative
 * means a visitor never needs to resolve or contact the CMS host directly.
 */
export const STRAPI_ASSETS_PATH = "/cms"

export function getStrapiAssetUrl(path: string): string {
  return `${STRAPI_ASSETS_PATH}${path.startsWith("/") ? path : `/${path}`}`
}
