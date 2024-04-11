"use client"
import Image from "next/image"
import { Button } from "./ui/button"
import { ReactNode } from "react"
import Link from "next/link"

export default function Footer(){
    return (
        <footer className="flex flex-col justify-end w-full min-h-96 h-fit mt-[-16rem]">
            <div className="bg-repeat-x bg-footer-squares w-full h-80"></div>
            <div className="bg-repeat-x bg-splash-transition w-full h-52"></div>
            <div className="flex justify-between max-sm:items-center max-sm:flex-col bg-primary w-full min-h-32 h-fit pb-4 pt-8">
                <SocialMedia />
                <MainPanel />
                <Donate />
            </div>
        </footer>
    )
}

//component for social media panel
function TempIcon(){
    return (
        <div className="w-8 h-8 bg-background m-2 rounded-full"></div>
    )
}

//component for donation panel
function DonationButton(){
    return (
        <Button variant={"secondary"} className="w-56 h-16 rounded-lg flex justify-center items-center">Buy us a coffee</Button>
    )
}

//components for main panel
function LinkPanel({title, children} : {children?: ReactNode, title: string}){
    return (
        <div className="flex justify-start flex-col mx-4 max-w-24">
            <div className="text-background text-lg font-semibold">{title}</div>
            {children}
        </div>
    )
}

//components for main panel
function LinkItem({name, href} : {name: string, href: string}) {
    return (
        <div className="mb-2">
            <Link className="text-background font-medium text-xs" href={href}>{name}</Link>
        </div>
    )
}

function SocialMedia(){
    return (
        <div className="flex justify-center ml-4 w-64">
            <div className="flex justify-center flex-col h-full mx-2">
                <TempIcon />
                <TempIcon />
                <TempIcon />
            </div>
            <div className="flex justify-center flex-col w-20 relative">
                <Image alt="logo" fill src={"/logo-white.svg"} />
            </div>
        </div>
    )
}

function MainPanel(){
    return (
        <div className="flex justify-center max-sm:my-8">
            <div className="flex justify-around flex-col">
                <div className="text-background text-3xl font-extrabold text-center">Odwiedziło nas już <span className="text-primary font-extrabold text-3xl bg-background p-2 rounded-2xl">1280959</span> osób!</div>
                <div className="flex justify-center m-12">
                    <LinkPanel title="O szkole">
                        <LinkItem name="Osiągnięcia" href="" />
                        <LinkItem name="Kadra" href="" />
                        <LinkItem name="Galeria" href="" />
                        <LinkItem name="Aktualności" href="" />
                    </LinkPanel>
                    <LinkPanel title="Edukacja">
                        <LinkItem name="Praktyki" href="" />
                        <LinkItem name="Warsztaty" href="" />
                        <LinkItem name="Programy Nauczania" href="" />
                    </LinkPanel>
                    <LinkPanel title="Uczeń">
                        <LinkItem name="Ocenianie zachowania" href="" />
                        <LinkItem name="Zastępstwa" href="/zastepstwa" />
                        <LinkItem name="Dokumenty do pobrania" href="/dokumenty" />
                        <LinkItem name="Oferty pracy dla absolwentów" href="" />
                    </LinkPanel>
                    <LinkPanel title="Rodzic">
                        <LinkItem name="Podręczniki" href="" />
                        <LinkItem name="Rada Rodziców" href="" />
                    </LinkPanel>
                    <LinkPanel title="Maturzysta">
                        <LinkItem name="Egzamin maturalny" href="http://www.oke.poznan.pl/index.php?menu_st_id=5&el_id=718&submit_element=1" />
                        <LinkItem name="Egzamin zawodowy" href="" />
                        <LinkItem name="OKE w Poznaniu" href="http://www.oke.poznan.pl/" />
                        <LinkItem name="Komunikaty Dyrektora CKE" href="" />
                    </LinkPanel>
                    <LinkPanel title="Nabór">
                        <LinkItem name="Regulamin" href="" />
                        <LinkItem name="Kierunki" href="" />
                    </LinkPanel>
                </div>
                <div className="flex justify-around flex-col">
                    <div className="flex justify-center items-center text-background text-base font-bold m-1">Made with 🍷 by Kacper, Krzysiek, Mikołaj, Wojtek & Filip</div>
                    <div className="flex justify-center items-center text-background-accent text-xs m-1">@Copyright 2001-2024 Zespół Szkół Elektronicznych i Samochodowych</div>
                </div>
            </div>
        </div>
    )
}

function Donate(){
    return (
        <div className="flex flex-col justify-center w-64 mr-4">
            <div className="flex justify-center"><DonationButton /></div>
            <div className="text-background mt-2">Spodobała Ci się nowa strona? Rozważ wsparcie twórców ✨✨</div>
        </div>
    )
}