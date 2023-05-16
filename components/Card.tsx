import clsx from "clsx"
import { FC, ReactNode } from "react"

type Props = {
  className: string,
  children: ReactNode
}

const Card: FC<Props> = ({ className, children}) => {
  return (
    <div className={clsx(
      "rounded-3xl px-10 py-4 drop-shadow-xl bg-white", className
    )}>
      {children}
    </div>
  )
}
export default Card