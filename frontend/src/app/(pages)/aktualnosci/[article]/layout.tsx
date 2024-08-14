import PageEnterAnimation from "@/components/PageEnterAnimation"
import React, { PropsWithChildren, Suspense } from "react"

const layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Suspense>
      <PageEnterAnimation>{children}</PageEnterAnimation>
    </Suspense>
  )
}

export default layout
