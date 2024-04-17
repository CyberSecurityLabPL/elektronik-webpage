import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function flatten(obj: any){
    const isObject = (obj: any) =>
        Object.prototype.toString.call(obj) === "[object Object]";

    if(hasKey(obj, "data")){
        obj = obj["data"]
    }
    if(hasKey(obj, "attributes")){
        obj = obj["attributes"]
    }

    for (const key of Object.keys(obj)){
        if(isObject(obj[key])){
            obj[key] = flatten(obj[key])
        }
    }

    return obj
}

function hasKey(obj: any, key: string){
    return Object.keys(obj).includes(key)
}