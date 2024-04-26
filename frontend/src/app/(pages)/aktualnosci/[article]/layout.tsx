import React, { PropsWithChildren, Suspense } from "react"

const layout = ({ children }: PropsWithChildren<{}>) => {
  return <Suspense>{children}</Suspense>
}

export default layout
