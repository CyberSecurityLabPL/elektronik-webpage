import axios, { AxiosResponse } from "axios";
import { flattenStrapiResponse } from './utils';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * The API instance for making HTTP requests.
 */
export const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Authorization": process.env.API_KEY ? `Bearer ${process.env.API_KEY}` : ""
  }
});

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
        tags: ['navigation']
      }
     })

    const data = await res.json()


    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getLandingPage(): Promise<any> {
  try {
    const { data }: AxiosResponse<any> = await api.get("/landing-page");

    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getNews(params?: string): Promise<any> {
  try {
    const url = params ? `articles/${params}` : `articles`
    const { data }: AxiosResponse<any> = await api.get(url);    

    return flattenStrapiResponse(data, params ? false : true);
  } catch (error) {
    console.error(error);
  }
}

export async function getSubstitutions() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/substitutions-page");    

    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getJobs() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/jobs-page?populate[jobs][populate][badges][populate]=true&populate[jobs][populate][tasks][populate]=true&populate[jobs][populate][requirements][populate]=true");    

    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getApprenticeships() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/apprenticeships-page");    

    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getBooks() {
  try {
    const { data }: AxiosResponse<any> = await api.get("/books-page");    

    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}

export async function getTeachers(){
  try {
    const { data }: AxiosResponse<any> = await api.get("/teachers-page?populate[teacher_groups][populate][teachers][populate][image][populate]=true");    
    // console.log(data);
    
    return flattenStrapiResponse(data);
  } catch (error) {
    console.error(error);
  }
}