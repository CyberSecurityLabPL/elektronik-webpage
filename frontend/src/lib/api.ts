import { PAGINATION_LIMIT } from "@/config"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"
import { flattenStrapiResponse } from "./utils"

/**
 * The API instance for making HTTP requests.
 */
export const api = axios.create({
  baseURL: process.env.STRAPI_API_URL,
  headers: {
    Authorization: process.env.STRAPI_API_KEY
      ? `${process.env.STRAPI_API_KEY}`
      : "",
  },
})

export const backend = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  headers: {
    Authorization: process.env.STRAPI_API_KEY
      ? `Bearer ${process.env.STRAPI_API_KEY}`
      : "",
  },
})

// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0"

/**
 * Retrieves the navigation data for a specific page.
 * @param page - The page to retrieve the navigation data for. Used for page revalidation
 * @returns The navigation data.
 */
export async function getNavigation(): Promise<any> {
  try {
    // const { data }: AxiosResponse<any> = await api.get("/navigation");

    const res = await fetch(`${process.env.STRAPI_API_URL}/navigation`, {
      next: {
        tags: ["navigation"],
      },
    })

    const data = await res.json()

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLandingPage(): Promise<any> {
  try {
    const { data }: AxiosResponse<any> = await api.get("/landing-page")
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
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
    const { params, flatteners, page = "1", getAll } = options || {}
    const isFirstPage = page === "1"

    if (getAll) {
      const url =
        "articles?fields[0]=id&populate=false&pagination[pageSize]=10000"
      const { data } = await api.get(url)
      return data
    }

    const pageSize = isFirstPage ? PAGINATION_LIMIT + 1 : PAGINATION_LIMIT
    const query = qs.stringify(
      { pagination: { page, pageSize } },
      { encodeValuesOnly: true }
    )

    const url = params ? `articles/${params}` : `articles?${query}`
    const { data } = await api.get(url)

    // Zakomentowane flattenery, odkomentuj i użyj, jeśli są potrzebne
    // const res = flattenStrapiResponse(data, !params, flatteners)
    const res = data
    if (isFirstPage) res.data = res.data.slice(1)

    return res
  } catch (error: any) {
    handleError(error)
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
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLatestArticle(flatteners: string[] = ["data"]) {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "articles?sort=createdAt:DESC&pagination[pageSize]=1&populate[image][populate]=true&populate[createdBy][populate]=true&populate[updatedBy][populate]=true"
    )

    // return flattenStrapiResponse(data.data[0], true, flatteners)

    return data.data[0]
  } catch (error: any) {
    handleError(error)
  }
}

export async function getSubstitutionsPage() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/substitutions-page")
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getCoursesPage() {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      "/courses-page?populate[seo][populate]=true&populate[course_groups][populate][courses][populate][file][populate]=true"
    )
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getSubstitutions(number: number) {
  try {
    const data: any = (
      await fetch(
        `${process.env.STRAPI_API_URL}/substitutions?pagination[page]=${number}&pagination[pageSize]=1&sort[1]=createdAt:desc`,
        {
          next: {
            tags: ["substitutions"],
          },
        }
      )
    ).json()

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getExactSubstitutions(date: string) {
  try {
    const data: any = (
      await fetch(
        `${process.env.STRAPI_API_URL}/substitutions?filters[date][$eq]=${date}&pagination[page]=1&pagination[pageSize]=1&sort[1]=createdAt:desc`,
        {
          cache: "no-cache",
          next: {
            tags: ["substitutions-ex"],
          },
        }
      )
    ).json()

    return await flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getJobs() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/jobs-page")
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getApprenticeships() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/apprenticeships-page")
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getBooks() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/books-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getTeachers() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/teachers-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getRecruitments() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/recruitments-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getPage(page: string) {
  try {
    const { data }: AxiosResponse<any> = await api.get(
      `/pages?filters[slug][$eq]=${page}`
    )

    if (data.data.length < 1) return {}
    return flattenStrapiResponse(data.data[0])
  } catch (error: any) {
    handleError(error)
  }
}

export async function getParents() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/parents-council-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getAchievements() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/achievements-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}
export async function getDocuments() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/documents-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    console.error(error)
  }
}

export async function getImages() {
  try {
    const { data }: AxiosResponse<any> = await backend.get(
      "/file-system/docs/gallery?populate=*"
    )

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getHotAlert() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/hot-alert")
    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

function handleError(error: AxiosError) {
  console.error(error.message)
}

export async function getContact() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/contact-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getGraduates() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/graduate-page")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLuckyNumber() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/lucky-number")

    return flattenStrapiResponse(data)
  } catch (error: any) {
    handleError(error)
  }
}
