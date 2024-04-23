import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className=" z-50 relative top-0 left-0 w-full h-96 flex justify-center items-center bg-white">
            <div className="animate-pulse">
                <Image src={"/logo.svg"} width={200} height={150} alt="Logo" />
            </div>
        </div>
    )
  }