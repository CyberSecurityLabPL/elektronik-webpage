import { PAGINATION_LIMIT } from "@/config"
import axios, { AxiosError, AxiosResponse } from "axios"
import qs from "qs"

// This address is resolved by the Next.js server, never by a site visitor.
// In Docker it points to the internal service DNS name; when running
// `next dev` directly it reaches the locally published Strapi port.
const strapiInternalUrl =
  process.env.STRAPI_INTERNAL_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:5000"
    : "http://strapi:5000")

/**
 * The API instance for making HTTP requests.
 */
export const api = axios.create({
  baseURL: `${strapiInternalUrl}/api`,
  headers: {
    Authorization: process.env.STRAPI_API_KEY
      ? `${process.env.STRAPI_API_KEY}`
      : "",
  },
})

export const backend = axios.create({
  baseURL: strapiInternalUrl,
  headers: {
    Authorization: process.env.STRAPI_API_KEY
      ? `Bearer ${process.env.STRAPI_API_KEY}`
      : "",
  },
})

function formatedQs(query: { [key: string]: any }) {
  return qs.stringify(
    { ...query },
    {
      encodeValuesOnly: true,
      encoder: (str, defaultEncoder, charset, type): string => {
        if (type === "value" && typeof str === "string") {
          return defaultEncoder(str).replace(/%3A/g, ":")
        }

        return defaultEncoder(str)
      },
    }
  )
}

export async function getNavigation(): Promise<any> {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/navigation")

    // Use this if navigation is not revalidated

    // const res = await fetch(`${strapiInternalUrl}/api/navigation`, {
    //   next: {
    //     tags: ["navigation"],
    //   },
    // })

    // const data = await res.json()

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLandingPage(): Promise<any> {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/landing-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getArticles(page = "1"): Promise<any> {
  try {
    const isFirstPage = page === "1"

    const pageSize = isFirstPage ? PAGINATION_LIMIT + 1 : PAGINATION_LIMIT
    const query = formatedQs({
      sort: ["customDate:desc"],
      pagination: { page, pageSize },
    })

    const { data } = await api.get(`articles?${query}`)

    if (isFirstPage) data.data = data.data.slice(1)

    return data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getArticle(id: string): Promise<any> {
  try {
    const { data } = await api.get<AxiosResponse<any>>(`articles/${id}`)

    return data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLatestArticle() {
  try {
    const query = formatedQs({
      sort: ["customDate:desc"],
      pagination: { pageSize: 1 },
      populate: {
        image: { populate: true },
        createdBy: { populate: true },
        updatedBy: { populate: true },
      },
    })
    const { data } = await api.get<AxiosResponse<any>>(`articles?${query}`)

    return data.data[0]
  } catch (error: any) {
    handleError(error)
  }
}

export async function getSubstitutionsPage() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/substitutions-page")
    return data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getCoursesPage() {
  try {
    const query = formatedQs({
      populate: {
        seo: { populate: true },
        course_groups: {
          populate: {
            courses: {
              populate: {
                file: { populate: true },
              },
            },
          },
        },
      },
    })
    const { data } = await api.get<AxiosResponse<any>>(`/courses-page?${query}`)
    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getSubstitutions(number: number) {
  try {
    const query = formatedQs({
      pagination: { page: number, pageSize: 1 },
      sort: ["createdAt:desc"],
    })
    const { data }: AxiosResponse<any> = await api.get(
      `/substitutions?${query}`
    )

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getExactSubstitutions(date: string) {
  try {
    const query = formatedQs({
      filters: {
        date: {
          $eq: date,
        },
      },
      pagination: { page: 1, pageSize: 1 },
      sort: ["createdAt:desc"],
    })
    const { data }: AxiosResponse<any> = await api.get(
      `/substitutions?${query}`
    )

    return data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getJobs() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/jobs-page")
    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getApprenticeships() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/apprenticeships-page")
    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getBooks() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/books-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getTeachers() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/teachers-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getRecruitments() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/recruitments-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getPage(page: string) {
  try {
    const query = formatedQs({
      filters: {
        slug: {
          $eq: page,
        },
      },
    })
    const { data } = await api.get<AxiosResponse<any>>(`/pages?${query}`)

    console.log(data)

    // Error handling has to be done outside this function. Some pages expect different behaviours.
    // if (data.data.length < 1) throw new AxiosError()
    return data.data[0]
  } catch (error: any) {
    handleError(error)
  }
}

export async function getParents() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/parents-council-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getAchievements() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/achievements-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}
export async function getDocuments() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/documents-page")

    return data.data
  } catch (error: any) {
    console.error(error)
  }
}

export async function getImages() {
  try {
    const { data } = await backend.get<AxiosResponse<any>>(
      "/file-system/docs/gallery?populate=*"
    )

    return data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getHotAlert() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/hot-alert")
    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getContact() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/contact-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getGraduates() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/graduate-page")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

export async function getLuckyNumber() {
  try {
    const { data } = await api.get<AxiosResponse<any>>("/lucky-number")

    return data.data
  } catch (error: any) {
    handleError(error)
  }
}

function handleError(error: AxiosError) {
  console.error(error)
}
