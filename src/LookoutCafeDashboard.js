import React, { useState } from 'react'
import TabButton from './components/dashboard/shared/TabButton'
import OverviewTab from './components/dashboard/tabs/OverviewTab'
import MarketTab from './components/dashboard/tabs/MarketTab'
import CompetitionTab from './components/dashboard/tabs/CompetitionTab'
import GrowthTab from './components/dashboard/tabs/GrowthTab'
import DigitalTab from './components/dashboard/tabs/DigitalTab'
import ShareButton from './components/dashboard/shared/ShareButton'
import ThemeToggle from './components/dashboard/shared/ThemeToggle'
import {
  BarChart3,
  TrendingUp,
  Users,
  Smartphone,
  Target,
  Zap,
  Home,
} from 'lucide-react'
import { ourCafe, digitalPresence } from './components/dashboard/data/constants'

const tabs = [
  {
    id: 'overview',
    label: 'Overview',
    component: OverviewTab,
    icon: Home,
    category: 'analytics',
    description: 'Key metrics & performance',
  },
  {
    id: 'market',
    label: 'Market Intelligence',
    component: MarketTab,
    icon: TrendingUp,
    category: 'analytics',
    description: 'Market trends & opportunities',
  },
  {
    id: 'competition',
    label: 'Competitor Intelligence',
    component: CompetitionTab,
    icon: Users,
    category: 'analytics',
    description: 'Competitive landscape analysis',
  },
  {
    id: 'digital',
    label: 'Digital Presence Audit',
    component: DigitalTab,
    icon: Smartphone,
    category: 'analytics',
    description: 'Online presence & social media',
  },
  {
    id: 'growth',
    label: 'Growth Recommendations',
    component: GrowthTab,
    icon: Target,
    category: 'action',
    description: 'Actionable recommendations',
    special: true,
  },
]

const LookoutCafeDashboard = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  const renderTabContent = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab)
    if (!activeTabData) return null
    const TabComponent = activeTabData.component
    return <TabComponent />
  }

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans p-8 main-container">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-text-primary tracking-tight">
              {ourCafe.name}
            </h1>
            <p className="text-text-secondary mt-1 font-mono text-sm">
              Campbell, CA
            </p>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <ShareButton onClick={() => console.log('Share button clicked!')} />
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <TabButton
                  key={tab.id}
                  tab={tab.id}
                  label={tab.label}
                  icon={tab.icon}
                  description={tab.description}
                  category={tab.category}
                  special={tab.special}
                  isActive={activeTab === tab.id}
                  onClick={setActiveTab}
                />
              ))}
            </div>
          </div>

          <div className="mt-8">{renderTabContent()}</div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto mt-16 pt-8 border-t border-border text-center">
        <p className="font-mono text-sm text-text-secondary tracking-widest">
          Built with StoreOps.AI
        </p>
      </footer>
    </div>
  )
}

export default LookoutCafeDashboard
