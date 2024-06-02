import axios, { AxiosResponse } from "axios"
import { flattenStrapiResponse } from "./utils"
import qs from "qs"
import { PAGINATION_LIMIT } from "@/config"
import { cache } from "react"
import { revalidatePath } from "next/cache"
import { revalidate } from "./actions"

/**
 * The API instance for making HTTP requests.
 */
export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: process.env.API_KEY ? `Bearer ${process.env.API_KEY}` : "",
  },
})

export const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    Authorization: process.env.API_KEY ? `Bearer ${process.env.API_KEY}` : "",
  },
})

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

/**
 * Retrieves the navigation data for a specific page.
 * @param page - The page to retrieve the navigation data for. Used for page revalidation
 * @returns The navigation data.
 */
export async function getNavigation(): Promise<any> {
  try {
    // const { data }: AxiosResponse<any> = await api.get("/navigation");

    const res = await fetch(`${process.env.API_URL}/navigation`, {
      next: {
        tags: ["navigation"],
      },
    })

    const data = await res.json()

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getLandingPage(): Promise<any> {
  try {
    const { data }: AxiosResponse<any> = await api.get("/landing-page")
    revalidate("/")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
/**
 * Interface for optional object properties.
 */
interface ArticlesOptions {
  params?: string
  flatteners?: string[]
  page?: string
  getAll?: boolean
}

export async function getArticles(options?: ArticlesOptions): Promise<any> {
  try {
    const params = options?.params
    const flatteners = options?.flatteners

    const page = options?.page ?? "1"

    const isFirstPage = page === "1"

    const query = qs.stringify(
      {
        pagination: {
          page,
          pageSize: isFirstPage ? PAGINATION_LIMIT + 1 : PAGINATION_LIMIT,
        },
      },
      {
        encodeValuesOnly: true, // prettify url
      }
    )

    if (!options?.getAll) {
      const url = params
        ? `articles/${params}`
        : `articles?${options?.page ? query : ""}`
      const { data }: AxiosResponse<any> = await api.get(url)

      const res = flattenStrapiResponse(data, !!!params, flatteners)

      res.data = res.data.slice(isFirstPage ? 1 : 0)

      return res
    } else {
      const url =
        "articles?fields[0]=id&populate=false&pagination[pageSize]=10000"
      const { data }: AxiosResponse<any> = await api.get(url)
      return data
    }
  } catch (error) {
    console.error(error)
  }
}

export async function getArticle(
  id: string,
  options: ArticlesOptions
): Promise<any> {
  try {
    const params = options?.params
    const flatteners = options?.flatteners

    const { data }: AxiosResponse<any> = await api.get(`articles/${id}`)

    return flattenStrapiResponse(data, !!!params, flatteners)
  } catch (error) {
    console.error(error)
  }
}

export async function getLatestArticle(flatteners: string[] = ["data"]) {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "articles?sort=createdAt:DESC&pagination[pageSize]=1&populate[image][populate]=true&populate[createdBy][populate]=true&populate[updatedBy][populate]=true"
    )

    return flattenStrapiResponse(data.data[0], true, flatteners)
  } catch (error) {
    console.error(error)
  }
}

export async function getSubstitutions() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/substitutions-page")
    revalidate("/zastepstwa")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getJobs() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/jobs-page")
    revalidate("/praca")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getApprenticeships() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/apprenticeships-page")
    revalidate("/praktyki")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getBooks() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/books-page")
    revalidate("/podreczniki")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getTeachers() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/teachers-page")
    revalidate("/kadra")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getRecruitments() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/recruitments-page")
    revalidate("/nabor")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getPage(page: string) {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      `/pages?filters[slug][$eq]=${page}`
    )

    if (data.data.length < 1) return {}
    return flattenStrapiResponse(data.data[0])
  } catch (error) {
    console.error(error)
  }
}

export async function getParents() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/parents-council-page")
    revalidate("/rada")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getAchievements() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/achievements-page")
    revalidate("/osiagniecia")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
export async function getDocuments() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/documents-page")

    revalidate("/dokumenty")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getImages() {
  try {
    const { data }: AxiosResponse<any> = await backend.get(
      "/file-system/docs/gallery?populate=*"
    )

    revalidate("/galeria")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
export async function getHotAlert() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/hot-alert")
    // revalidate("/")
    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
