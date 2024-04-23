import { MotionDiv, staggerContainer } from "@/lib/motion"
import { PropsWithChildren, ReactNode } from "react"

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <MotionDiv
    // variants={staggerContainer(0, 0)}
    // initial="hidden"
    // whileInView="show"
    // viewport={{ once: true, amount: 0.25 }}
    className="relative flex flex-col items-center z-0 w-full max-w-screen-2xl px-6 sm:px-16"
  >
    {children}
  </MotionDiv>
)

export default PageWrapper
