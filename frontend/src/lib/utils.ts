import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const flattenObj = (data: any) => {
  const isObject = (data: any) =>
      Object.prototype.toString.call(data) === "[object Object]";
  const isArray = (data: any) =>
      Object.prototype.toString.call(data) === "[object Array]";
  
  const flatten = (data: any) => {
      if (!data.attributes) return data;
  
      return {
      id: data.id,
      ...data.attributes,
      };
  };
  
  if (isArray(data)) {
      return data.map((item: any) => flattenObj(item));
  }
  
  if (isObject(data)) {
      if (isArray(data.data)) {
      data = [...data.data];
      } else if (isObject(data.data)) {
      data = flatten({ ...data.data });
      } else if (data.data === null) {
      data = null;
      } else {
      data = flatten(data);
      }
  
      for (const key in data) {
         data[key] = flattenObj(data[key]);
      }
  
      return data;
  }
  
  return data;
  };