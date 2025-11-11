"use client"
import { useTheme } from "next-themes"
import Image from "next/image"

const Logo = () => {
  const { theme } = useTheme()
  const srcLogo =
    theme === "high-contrast"
      ? "/assets/logo/logo_highcontrast.svg"
      : "/assets/logo/animated/logo_blue-initial.svg"
  return (
    <Image
      src={srcLogo}
      width={80}
      height={80}
      priority
      className={`h-16 w-auto transition-all duration-200  group-data-[smaller=true]:h-12 md:h-20`}
      alt="Logo"
    />
  )
}

export default Logo
