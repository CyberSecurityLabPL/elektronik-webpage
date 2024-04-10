import { ReactNode } from "react";

export default function Header({title, subtitle, children} : {title: string, subtitle?: string, children?: ReactNode}) {
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