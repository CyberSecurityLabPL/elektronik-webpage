import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function flatten(obj: any, flatteners: string[]){
    const isObject = (obj: any) =>
        Object.prototype.toString.call(obj) === "[object Object]";

    for (const key of flatteners) {
        if(hasKey(obj, key)){
            obj = obj[key]
        }
    }

    for (const key of Object.keys(obj)){
        if(isObject(obj[key])){
            obj[key] = flatten(obj[key], flatteners)
        }
    }

    return obj
}

function hasKey(obj: any, key: string){
    return Object.keys(obj).includes(key)
}