"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import MobileNavigation from "./MobileNavigation"
import { Navigation } from "./Navigation"
import { Button } from "./ui/button"

export default function Navbar({ data }: { data?: any }) {
  return (
    <div className="relative flex h-32 w-full justify-between ">
      <div className=" flex items-center justify-center px-8 ">
        <Link href={"/"} passHref>
          <Image src={"/logo.svg"} width={80} height={60} alt="Logo" />
        </Link>
      </div>
      <div className="absolute left-1/2 top-1/2 z-50 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center lg:flex">
        {/* To-do navigation */}
        <Navigation />
      </div>
      <div className="  flex items-center justify-center px-8 ">
        <div className="hidden flex-col-reverse gap-4 lg:flex  xl:flex-row">
          <Button variant={"secondary"} asChild>
            <Link href={"/"}>Plan Lekcji</Link>
            {/* <Link href={data.timetable.link ?? 'https://zseis.vercel.app/plan?timetableId=o18'}>{data.timetable.title ?? "Plan Lekcji"}</Link> */}
          </Button>
          <Button asChild>
            <Link href={"/"}>E-dziennik</Link>
            {/* <Link href={data.gradebook.link ?? "https://uonetplus.vulcan.net.pl/zielonagora"}>{data.gradebook.title ?? "E-Dziennik"}</Link> */}
          </Button>
        </div>
        <div className="hidden px-4 lg:block xl:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Plan Lekcji</DropdownMenuLabel>
              <DropdownMenuItem>E-dziennik</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center justify-center lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </div>
  )
}
