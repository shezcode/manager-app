import '@/styles/global.css'
import clsx from 'clsx'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode,
  className: string,
}
const GlassPane: FC<Props> = ({children, className}) => {
  return (
    <div className={clsx(
      "glass rounded-2xl border-solid border-2 border-gray-200", className
    )}>
      {children}
    </div>
  )
}

export default GlassPane