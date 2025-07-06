import React, { useState } from 'react'
import {
  ChevronDown,
  ArrowRight,
  DollarSign,
  Clock,
  Zap,
  Target,
} from 'lucide-react'

const getBenefit = (category) => {
  switch (category) {
    case 'Digital Transformation':
      return { text: 'Acquisition & Revenue', icon: Zap }
    case 'Event Space Rental':
      return { text: 'Revenue Growth', icon: DollarSign }
    case 'Corporate Catering':
      return { text: 'Acquisition & Revenue', icon: Zap }
    case 'Premium Coffee Program':
      return { text: 'Retention & Revenue', icon: Target }
    case 'Subscription Service':
      return { text: 'Retention & Revenue', icon: Target }
    case 'Mobile Ordering App':
      return { text: 'Retention & Revenue', icon: Target }
    case 'Food Menu Expansion':
      return { text: 'Revenue Growth', icon: DollarSign }
    default:
      return { text: 'Growth', icon: Zap }
  }
}

const ActionCard = ({ opportunity }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const {
    category,
    description,
    priority,
    potential,
    timeline,
    effort,
    implementation,
    assumptions,
    roi,
  } = opportunity
  const benefit = getBenefit(category)

  const DetailChip = ({ icon: Icon, label, value }) => (
    <div className="flex items-center text-xs text-text-secondary mr-6 mb-2">
      <Icon className="h-4 w-4 mr-2 text-text-tertiary" />
      <span className="font-semibold text-text-secondary mr-1">{label}:</span>
      <span className="font-mono text-text-primary">{value}</span>
    </div>
  )

  return (
    <div className="bg-surface border border-border rounded-lg transition-all duration-300 ease-in-out">
      <div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span
                className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mr-3 ${
                  priority === 'Immediate'
                    ? 'bg-red-500 text-white'
                    : priority === 'High'
                      ? 'bg-orange-500 text-white'
                      : 'bg-accent-500 text-white'
                }`}
              >
                {priority}
              </span>
              <h4 className="font-bold text-text-primary text-xl">
                {category}
              </h4>
            </div>
            <p className="text-base text-text-secondary mb-4 max-w-prose">
              {description}
            </p>

            <div className="flex items-center flex-wrap">
              <DetailChip
                icon={benefit.icon}
                label="Benefit"
                value={benefit.text}
              />
              {opportunity.potential && (
                <DetailChip
                  icon={DollarSign}
                  label="Potential"
                  value={`$${opportunity.potential.toLocaleString()}/yr`}
                />
              )}
              <DetailChip icon={Clock} label="Timeline" value={timeline} />
              <DetailChip icon={Zap} label="Effort" value={effort} />
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-primary mr-2">View Details</span>
            <ChevronDown
              className={`h-5 w-5 text-primary transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-border p-6 bg-background">
          <h5 className="font-bold text-lg text-text-primary mb-3">
            Implementation Roadmap
          </h5>
          <p className="text-sm text-text-secondary mb-4">{implementation}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h6 className="font-semibold text-text-primary text-base">
                Key Assumptions
              </h6>
              <p className="text-sm text-text-secondary">{assumptions}</p>
            </div>
            <div>
              <h6 className="font-semibold text-text-primary text-base">
                Projected ROI
              </h6>
              <p className="text-3xl font-bold text-primary">{roi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ActionCard
