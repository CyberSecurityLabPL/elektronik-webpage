import axios, { AxiosResponse } from "axios"
import { flattenStrapiResponse } from "./utils"
import { revalidatePath, revalidateTag } from "next/cache"

/**
 * The API instance for making HTTP requests.
 */
export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    Authorization: process.env.API_KEY ? `Bearer ${process.env.API_KEY}` : "",
  },
})

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

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
/**
 * Interface for optional object properties.
 */
interface OptionalObject {
  params?: string
  flatteners?: string[]
}
export async function getNews(options?: OptionalObject): Promise<any> {
  try {
    const params = options?.params
    const flatteners = options?.flatteners

    const url = params
      ? `articles/${params}?populate[image][populate]=true&populate[createdBy][populate]=true&populate[updatedBy][populate]=true`
      : `articles?sort=createdAt:DESC&populate[image][populate]=true&populate[createdBy][populate]=true&populate[updatedBy][populate]=true`
    const { data }: AxiosResponse<any> = await api.get(url)

    return flattenStrapiResponse(data, !!!params, flatteners)
  } catch (error) {
    console.error(error)
  }
}

export async function getSubstitutions() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/substitutions-page")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getJobs() {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "/jobs-page?populate[jobs][populate][badges][populate]=true&populate[jobs][populate][tasks][populate]=true&populate[jobs][populate][requirements][populate]=true"
    )

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getApprenticeships() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/apprenticeships-page")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getBooks() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/books-page")

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getTeachers() {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "/teachers-page?populate[teacher_groups][populate][teachers][populate][image][populate]=true"
    )

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getRecruitments() {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "/recruitments-page?populate=*"
    )

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
    const { data }: AxiosResponse<any> = await api.get(
      "/parents-council-page?populate[parents]=true"
    )

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}

export async function getAchievements() {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "/achievements-page?populate[achievements]=truee"
    )

    return flattenStrapiResponse(data)
  } catch (error) {
    console.error(error)
  }
}
