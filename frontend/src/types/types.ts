// import type { Modules, UID } from "@strapi/strapi"

// export type GetValues<TSchemaUID extends UID.Schema> =
//   Modules.Documents.Params.Attribute.GetValues<TSchemaUID>

// export type APIResponseData<T extends UID.ContentType> = {
//   id: number
// } & GetValues<T>

// export interface APIResponse<T extends UID.ContentType> {
//   data: APIResponseData<T>
// }

// export interface APIResponseCollection<T extends UID.ContentType> {
//   data: APIResponseData<T>[]
//   meta: {
//     pagination: {
//       page: number
//       pageSize: number
//       pageCount: number
//       total: number
//     }
//   }
// }

// export type StrapiImage = {
//   id: number
//   name: string
//   alternativeText?: string | null
//   caption?: string | null
//   width?: number | null
//   height?: number | null
//   formats?: Record<string, any> | null
//   hash: string
//   ext: string
//   mime: string
//   size: number
//   url: string
//   previewUrl?: string | null
//   provider: string
//   provider_metadata?: Record<string, any> | null
//   createdAt: string
//   updatedAt: string
// }

// export type StrapiAuthor = {
//   id: number
//   documentId: string
//   firstname: string
//   lastname: string
//   username: string | null
//   preferedLanguage: string
//   createdAt: string
//   updatedAt: string
//   publishedAt: string
// }

// // Artykuły i strony
// export interface Article extends APIResponseData<"api::article.article"> {
//   image?: StrapiImage
//   // createdBy?: StrapiAuthor | null | string | number
//   // updatedBy?: StrapiAuthor | null | string | number
// }
// export type AchievementsPage =
//   APIResponseData<"api::achievements-page.achievements-page">
// export type ApprenticeshipsPage =
//   APIResponseData<"api::apprenticeships-page.apprenticeships-page">
// export type BooksPage = APIResponseData<"api::books-page.books-page">
// export type ContactPage = APIResponseData<"api::contact-page.contact-page">
// export type CoursesPage = APIResponseData<"api::courses-page.courses-page">
// export interface DocumentsPage
//   extends APIResponseData<"api::documents-page.documents-page"> {
//   document_groups: Document[]
// }
// export type GraduatePage = APIResponseData<"api::graduate-page.graduate-page">
// export type JobsPage = APIResponseData<"api::jobs-page.jobs-page">
// export type LandingPage = APIResponseData<"api::landing-page.landing-page">
// export type ParentsCouncilPage =
//   APIResponseData<"api::parents-council-page.parents-council-page">
// export type RecruitmentsPage =
//   APIResponseData<"api::recruitments-page.recruitments-page">
// export type SubstitutionsPage =
//   APIResponseData<"api::substitutions-page.substitutions-page">
// export type TeachersPage = APIResponseData<"api::teachers-page.teachers-page">

// // Content
// export type Achievement = APIResponseData<"api::achievement.achievement">
// export type AdditionalLink =
//   APIResponseData<"api::additional-link.additional-link">
// export type Announcement = APIResponseData<"api::announcement.announcement">
// export type Apprenticeship =
//   APIResponseData<"api::apprenticeship.apprenticeship">
// export type Badge = APIResponseData<"api::badge.badge">
// export type Bell = APIResponseData<"api::bell.bell">
// export type BookGroup = APIResponseData<"api::book-group.book-group">
// export type Book = APIResponseData<"api::book.book">
// export type CourseGroup = APIResponseData<"api::course-group.course-group">
// export type Course = APIResponseData<"api::course.course">
// export type DocumentGroup =
//   APIResponseData<"api::document-group.document-group">
// export type Document = APIResponseData<"api::document.document">
// export type Event = APIResponseData<"api::event.event">
// export type Graduate = APIResponseData<"api::graduate.graduate">
// export type HotAlert = APIResponseData<"api::hot-alert.hot-alert">
// export type Job = APIResponseData<"api::job.job">
// export type LinkGroup = APIResponseData<"api::link-group.link-group">
// export type Link = APIResponseData<"api::link.link">
// export type LuckyNumber = APIResponseData<"api::lucky-number.lucky-number">
// export type Navigation = APIResponseData<"api::navigation.navigation">
// export type Page = APIResponseData<"api::page.page">
// export type Parent = APIResponseData<"api::parent.parent">
// export type Question = APIResponseData<"api::question.question">
// export type RecruitmentGroup =
//   APIResponseData<"api::recruitment-group.recruitment-group">
// export type Recruitment = APIResponseData<"api::recruitment.recruitment">
// export type Sponsor = APIResponseData<"api::sponsor.sponsor">
// export type Substitution = APIResponseData<"api::substitution.substitution">
// export type TeacherGroup = APIResponseData<"api::teacher-group.teacher-group">
// export type Teacher = APIResponseData<"api::teacher.teacher">
// export type TimetableAuth =
//   APIResponseData<"api::timetable-auth.timetable-auth">
