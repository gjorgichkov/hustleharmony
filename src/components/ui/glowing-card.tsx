"use client" 

import * as React from "react"
import { cn } from "@/lib/utils"

interface GridBackgroundProps {
  title: string
  description: string
  showAvailability?: boolean
  className?: string
  children?: React.ReactNode
}

export function GridBackground({
  title,
  description,
  showAvailability = false,
  className,
  children
}: GridBackgroundProps) {
  return (
    <div 
      className={cn(
        'px-6 py-12 rounded-md relative mx-auto flex items-center justify-center',
        className
      )}
      style={{
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}
    >
      <div 
        className="w-3 h-3 rounded-full absolute shadow-[0_0_15px] shadow-current z-10 bg-current"
        style={{
          animation: `
            border-follow 6s linear infinite,
            color-change 6s linear infinite
          `
        }}
      />
      <div 
        className="absolute inset-0 border-2 rounded-md"
        style={{
          animation: 'border-color-change 6s linear infinite'
        }}
      />

      <div className="relative z-20 text-center max-w-7xl">
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>{title}</h1>
        {description && (
          <p className='text-xl md:text-3xl lg:text-4xl text-teal bg-navy/40 border border-teal/20 backdrop-blur-sm px-4 py-2 rounded-lg'>{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}