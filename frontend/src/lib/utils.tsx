import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import ReactMarkdown, { Options } from "react-markdown"
import rehypeRaw from "rehype-raw"

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
export function flattenStrapiResponse(obj: any, flatteners: string[], keepMeta?: boolean){
    if(keepMeta) {
        for (const key of flatteners) {
            if(hasKey(obj, key)) obj[key] = flatten(obj[key], flatteners)
        }
    } else flatten(obj, flatteners)
}

function flatten(obj: any, flatteners: string[]){
    const isObject = (obj: any) =>
        Object.prototype.toString.call(obj) === "[object Object]";

    const isArray = (obj: any) =>
        Object.prototype.toString.call(obj) === "[object Array]";


    for (const key of flatteners) {
        if(hasKey(obj, key)){
            obj = obj[key]
        }
    }

    for (const key of Object.keys(obj)){
        if(isObject(obj[key]) || isArray(obj[key])) {
            obj[key] = flatten(obj[key], flatteners)
        }
    }

    return obj
}

function hasKey(obj: any, key: string){
    return Object.keys(obj).includes(key)
}

export function renderMarkdown(markdown: string, options?: Readonly<Options>) {
    const imagesFolder = "uploads"
    const newHostname = process.env.NEXT_PUBLIC_CONTENT_URL
    const imageBlockRegex = /\!\[(.*?)\]\((.*?)\/uploads\/(.*?)\)/g
  
    const formattedMarkdown = markdown.replace(imageBlockRegex, (...fragments: string[]) => {
      const [fullImageString, alt, hostname, image] = fragments
  
      return `![${alt}](${newHostname}/${imagesFolder}/${image})`
    }) 
    
    return (
      <ReactMarkdown rehypePlugins={[rehypeRaw]} {...options}>
        {formattedMarkdown}
      </ReactMarkdown>
    )
}