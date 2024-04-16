import axios from 'axios'
import { flattenObj } from './utils'

export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Authorization": process.env.API_KEY ? `Bearer ${process.env.API_KEY}` : ""
  }
})

export async function getNavigation() {
  try {
    const { data } = await api.get("/navigation")

    

    return data.data
  } catch (error) {
    console.error(error)
  }
}

// function test(data: { [key: string]: any }){
//   for (const key in data) {
//     // Object keys can also be ojects. We need to flatten all them. Check for object type and flatten it for each key of key of key etc..
//     data[key] = flattenObj(data[key])
    

//   }
//   Object.keys(data).forEach((key) => {
//     const isObject = (key: any) =>
//       Object.prototype.toString.call(key) === "[object Object]";
//     const isArray = (key: any) =>
//       Object.prototype.toString.call(key) === "[object Array]";

//     if (isArray(key) || isObject(key)){
//       test(data[key])
//     }
//   })
//   return data
// }