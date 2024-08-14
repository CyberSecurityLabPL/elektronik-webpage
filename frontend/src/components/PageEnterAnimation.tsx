import { MotionDiv } from "@/lib/motion"
import { ReactNode } from "react"

const PageEnterAnimation = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <MotionDiv
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.25, ease: "circOut" }}
    className={className}
  >
    {children}
  </MotionDiv>
)

export default PageEnterAnimation
