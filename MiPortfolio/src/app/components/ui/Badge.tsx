import { ReactNode } from "react";

export type BadgeVariant = 
  | "default" 
  | "blue" 
  | "green" 
  | "yellow" 
  | "purple" 
  | "red" 
  | "outline";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  onClick?: () => void;
}

export default function Badge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className = "",
  onClick,
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    default: "bg-slate-800/80 text-slate-300 border-slate-700/60 hover:bg-slate-800",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
    yellow: "bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20",
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30 hover:bg-purple-500/20",
    red: "bg-rose-500/10 text-rose-400 border-rose-500/30 hover:bg-rose-500/20",
    outline: "bg-transparent text-slate-400 border-slate-700 hover:border-slate-500",
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: "text-xs px-2 py-0.5 gap-1",
    md: "text-xs font-medium px-2.5 py-1 gap-1.5",
    lg: "text-sm font-medium px-3 py-1.5 gap-2",
  };

  const dotColor: Record<BadgeVariant, string> = {
    default: "bg-slate-400",
    blue: "bg-blue-400",
    green: "bg-emerald-400",
    yellow: "bg-amber-400",
    purple: "bg-purple-400",
    red: "bg-rose-400",
    outline: "bg-slate-400",
  };

  const Component = onClick ? "button" : "span";

  return (
    <Component
      type={onClick ? "button" : undefined}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-md border transition-all ${
        onClick ? "cursor-pointer active:scale-95" : ""
      } ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {dot && <span className={`w-1.5 h-1.5 rounded-full ${dotColor[variant]}`} />}
      {children}
    </Component>
  );
}
