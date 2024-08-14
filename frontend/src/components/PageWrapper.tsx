import { MotionDiv } from "@/lib/motion"
import { PropsWithChildren } from "react"

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <MotionDiv className="relative z-0 flex w-full flex-col items-center ">
    {children}
  </MotionDiv>
)

export default PageWrapper
