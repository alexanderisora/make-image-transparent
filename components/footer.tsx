import {Icons} from "@/components/icons";

export const Footer = () => {
  return (
    <span className="border-t p-4 text-center text-xs text-muted-foreground md:mx-0 md:p-6 md:text-start">
      This project is a fork of <a
        className="text-foreground hover:underline"
        target="_blank"
        href="https://github.com/yossTheDev/removerized"
      >
        yossTheDev/removerized
      </a>.  License type: <a
        className="text-foreground hover:underline"
        target="_blank"
        href="https://github.com/alexanderisora/make-image-transparent/blob/main/LICENSE"
      >
        GNU General Public License v3.0
      </a>.

    </span>
  )
}
