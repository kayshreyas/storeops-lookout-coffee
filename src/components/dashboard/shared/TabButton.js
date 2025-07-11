import React from 'react'
import { Zap, Sparkles } from 'lucide-react'

const TabButton = ({
  tab,
  label,
  icon: Icon,
  description,
  category,
  special,
  isActive,
  onClick,
}) => {
  const baseClasses =
    'group relative flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/50'

  const getTabStyles = () => {
    if (isActive) {
      return 'bg-primary/5 text-primary border-primary/30 shadow-sm'
    }
    return 'bg-background text-text-secondary border-border hover:bg-surface hover:text-text-primary hover:border-border hover:shadow-sm'
  }

  return (
    <button
      onClick={() => onClick(tab)}
      className={`${baseClasses} ${getTabStyles()}`}
    >
      {/* Icon */}
      {Icon && (
        <div
          className={`
          flex items-center justify-center w-8 h-8 rounded-md transition-colors duration-200
          ${
            isActive
              ? 'bg-primary/10'
              : 'bg-border/30 group-hover:bg-border/50'
          }
        `}
        >
          <Icon className="w-4 h-4" />
        </div>
      )}

      {/* Label and Badge */}
      <div className="flex flex-col items-start min-w-0">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm whitespace-nowrap">{label}</span>
          {special && (
            <div className="flex items-center gap-1">
              {isActive ? (
                <Sparkles className="w-3 h-3 text-accent-200" />
              ) : (
                <Zap className="w-3 h-3 text-accent-400" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Special badge for Growth Actions */}
      {special && (
        <div className="absolute -top-1 -right-1">
          <div
            className={`
            w-2 h-2 rounded-full animate-pulse
            ${isActive ? 'bg-accent-200' : 'bg-accent-400'}
          `}
          ></div>
        </div>
      )}

      {/* Hover effect overlay */}
      <div
        className={`
        absolute inset-0 rounded-lg transition-opacity duration-200 opacity-0 group-hover:opacity-100
        bg-primary/5
      `}
      ></div>
    </button>
  )
}

export default TabButton
