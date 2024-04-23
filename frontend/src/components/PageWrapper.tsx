import { MotionDiv, staggerContainer } from "@/lib/motion"
import { PropsWithChildren, ReactNode } from "react"

const PageWrapper = ({ children }: PropsWithChildren<{}>) => (
  <MotionDiv
    // variants={staggerContainer(0, 0)}
    // initial="hidden"
    // whileInView="show"
    // viewport={{ once: true, amount: 0.25 }}
    className="relative z-0 flex w-full max-w-screen-2xl flex-col items-center px-6 sm:px-16"
  >
    {children}
  </MotionDiv>
)

export default PageWrapper
