
import React from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconProps = {
  name: keyof typeof LucideIcons | string;
  size?: number;
  className?: string;
  fallback?: keyof typeof LucideIcons;
};

const Icon = ({ 
  name, 
  size = 24, 
  className,
  fallback = "CircleAlert" 
}: IconProps) => {
  // Try to get the named icon
  const LucideIcon = (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found, and fallback "${fallback}" also not found`);
    return null;
  }

  return (
    <LucideIcon 
      size={size} 
      className={cn("", className)} 
    />
  );
};

export default Icon;
