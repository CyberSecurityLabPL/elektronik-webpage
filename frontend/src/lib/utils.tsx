import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ReactMarkdown, { Options } from "react-markdown"
import rehypeRaw from "rehype-raw"
import { format } from "date-fns"
import pl from "date-fns/locale/pl"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Flattens the strapi response getting rid of .specified keys eg .data or .attributes .
 * @param obj - The data obj to flatten
 * @param flatteners - The keys array eg .data or .attributes
 * @param keepMeta - Determines if the obj shouldn't be flatten at the top level
 * @returns The flattened data.
 */
export function flattenStrapiResponse(
  obj: any,
  keepMeta?: boolean,
  flatteners: string[] = ["data", "attributes"]
) {
  if (keepMeta) {
    for (const key of flatteners) {
      if (hasKey(obj, key)) obj[key] = flatten(obj[key], flatteners)
    }
    return obj
  } else return flatten(obj, flatteners)
}

function flatten(obj: any, flatteners: string[]) {
  const isObject = (obj: any) =>
    Object.prototype.toString.call(obj) === "[object Object]"

  const isArray = (obj: any) =>
    Object.prototype.toString.call(obj) === "[object Array]"

  for (const key of flatteners) {
    if (hasKey(obj, key)) {
      obj = obj[key] === null || obj[key] === undefined ? (obj = {}) : obj[key]
    }
  }

  for (const key of Object.keys(obj)) {
    if (isObject(obj[key]) || isArray(obj[key])) {
      obj[key] = flatten(obj[key], flatteners)
    }
  }

  return obj
}

function hasKey(obj: any, key: string) {
  return Object.keys(obj).includes(key)
}

export function renderMarkdown(markdown: string, options?: Readonly<Options>) {
  const imagesFolder = "uploads"
  const newHostname = process.env.NEXT_PUBLIC_CONTENT_URL
  const imageBlockRegex = /\!\[(.*?)\]\((.*?)\/uploads\/(.*?)\)/g

  const formattedMarkdown = markdown.replace(
    imageBlockRegex,
    (...fragments: string[]) => {
      const [fullImageString, alt, hostname, image] = fragments

      return `![${alt}](${newHostname}/${imagesFolder}/${image})`
    }
  )

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw]} {...options}>
      {formattedMarkdown}
    </ReactMarkdown>
  )
}

/**
 * Formats provided date string to dd/MM/yyyy HH:mm
 * @param date - The date string if null will use current
 * @returns The formatted date
 */
export function formatDate(date?: string) {
  return format(new Date(date ?? new Date()), "dd/MM/yyyy HH:mm")
}

/**
 * Formats provided date string to dd/MM/yyyy
 * @param date - The date string if null will use current
 * @returns The formatted date
 */
export const formatDateYear = (date?: string) =>
  format(new Date(date ?? new Date()), "dd/MM/yyyy")

/**
 * Formats provided date string to eeee dd/MM/yyyy
 * @param date - The date string if null will use current
 * @returns The formatted date with a week name in front
 */
export const formatDateWeek = (date?: string) =>
  // @ts-ignore - locale is not in the types
  format(new Date(date ?? new Date()), "eeee dd/MM/yyyy", { locale: pl })

export const getImage = (src: string) =>
  `${process.env.NEXT_PUBLIC_BACKEND_URL}${src}`

interface Author {
  firstname: string
  lastname: string
  username?: string
}

/**
 *
 * @param data data object at level of attributes ( contains createdBy and updatedBy )
 * @returns returns author full name
 */
export const getAuthor = (data?: {
  createdBy: Author
  updatedBy: Author
}): string => {
  if (!data) return "Pracownik CKZiU"

  const createdByExists = !!data.createdBy
  const updatedByExists = !!data.updatedBy

  if (!createdByExists && !updatedByExists) return "Pracownik CKZiU"

  const author = createdByExists ? data.createdBy : data.updatedBy

  return `${author.firstname} ${author.lastname}`
}
