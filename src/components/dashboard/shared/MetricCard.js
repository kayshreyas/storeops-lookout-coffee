import React from 'react'

const MetricCard = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-surface border border-border p-4">
      <div className="flex items-center text-text-secondary mb-2">
        <Icon className="h-4 w-4 mr-2 text-primary" />
        <span className="text-sm font-mono tracking-widest uppercase">
          {title}
        </span>
      </div>
      <div className="mb-2">
        <p className="text-text-primary text-4xl font-bold">{value}</p>
      </div>
      {trend && (
        <div>
          <p className="text-sm text-text-secondary">{trend}</p>
        </div>
      )}
    </div>
  )
}

export default MetricCard
