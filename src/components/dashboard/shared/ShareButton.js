import React from 'react'
import { Share2 } from 'lucide-react'

const ShareButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
    >
      <Share2 className="w-4 h-4" />
      Share
    </button>
  )
}

export default ShareButton
