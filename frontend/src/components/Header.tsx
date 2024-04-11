import { ReactNode } from "react";
import Image from "next/image";

export default function Header({title, subtitle, variant, children} : {title: string, subtitle?: string, variant?: "landingpage" | "subpage", children?: ReactNode}) {
    if (variant === "landingpage")
        return (
            <header className="flex justify-around w-full items-center">
                <div className="flex justify-center flex-col my-4">
                    <div className="flex justify-center items-center text-6xl font-extrabold text-primary m-4">{title}</div>
                    {subtitle ?
                        <div className="flex justify-center m-4">
                            <div className="flex justify-center text-left items-center text-xl max-w-[32rem] text-primary-foreground leading-relaxed">{subtitle}</div>
                        </div>
                    : null}
                    {children}
                </div>
                <div className="relative w-1/3 h-full">
                    <Image alt="dyrektor" src={"/landing-page-hero.svg"} fill />
                </div>
            </header>
        )
    else 
        return (
            <header className="flex justify-between flex-col">
                <div className="flex justify-center items-center text-6xl font-extrabold text-primary m-4">{title}</div>
                {subtitle ?
                    <div className="flex justify-center m-4">
                        <div className="flex justify-center text-center items-center text-xl max-w-[64rem] text-primary-foreground leading-relaxed">{subtitle}</div>
                    </div>
                : null}
                {children}
            </header>
        )
}