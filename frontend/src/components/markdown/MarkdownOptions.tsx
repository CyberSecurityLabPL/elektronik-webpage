import MarkdownHeader from "@/components/markdown/Header"
import { Separator } from "../ui/separator"
import { Options } from "react-markdown"

const options: Options = {
    components: {
      h1: ({ children }) => (
        <MarkdownHeader Variant="h1">{children}</MarkdownHeader>
      ),
      h2: ({ children }) => (
        <MarkdownHeader Variant="h2">{children}</MarkdownHeader>
      ),
      h3: ({ children }) => (
        <MarkdownHeader Variant="h3">{children}</MarkdownHeader>
      ),
      hr: () => <Separator className="my-2" />,
      ul: ({ children }) => (
        <ul className="list-disc py-2 pl-4">{children}</ul>
      ),
      ol: ({ children }) => (
        <ol className="list-decimal py-2 pl-4">{children}</ol>
      ),
    },
  }

export default options