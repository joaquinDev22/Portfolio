import type { ReactNode } from "react"

type BadgeProps = {
  children: ReactNode
  className: string
  icon?: string
}

export default function Badge({children,className, icon} : BadgeProps) {
  return (
    <div className={className}>
      {icon && <div className="">
        <img src={icon} alt="icon" className="w-6 mr-1 rounded-md" />
      </div>
      }
      {children}
    </div>
  );
}
