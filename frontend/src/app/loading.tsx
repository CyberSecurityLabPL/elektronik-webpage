import Image from "next/image"

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" z-50 flex h-screen  w-full flex-col items-center justify-center bg-white">
      <div className="animate-pulse">
        <Image src={"/logo.svg"} width={200} height={150} alt="Logo" />
      </div>
    </div>
  )
}
