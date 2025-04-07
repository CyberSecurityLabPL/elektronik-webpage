import Image from "next/image"

export default function Loading() {
  return (
    <div className=" z-50 flex h-screen  w-full flex-col items-center justify-center bg-background">
      <div className="animate-pulse">
        <div className="hc:hidden block">
          <Image
          src={"/assets/logo/logo.svg"}
          width={200}
          height={150}
          alt="Logo"
        />
        </div>
        <div className="hc:block hidden">
          <Image
          src={"/assets/logo/logo_highcontrast.svg"}
          width={200}
          height={150}
          alt="Logo"
        />
        </div>
      </div>
    </div>
  )
}
