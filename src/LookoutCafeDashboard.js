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
    shortLabel: 'Overview',
    component: OverviewTab,
    icon: Home,
    category: 'analytics',
    description: 'Key metrics & performance',
  },
  {
    id: 'market',
    label: 'Market Intelligence',
    shortLabel: 'Market',
    component: MarketTab,
    icon: TrendingUp,
    category: 'analytics',
    description: 'Market trends & opportunities',
  },
  {
    id: 'competition',
    label: 'Competitor Intelligence',
    shortLabel: 'Competition',
    component: CompetitionTab,
    icon: Users,
    category: 'analytics',
    description: 'Competitive landscape analysis',
  },
  {
    id: 'digital',
    label: 'Digital Presence Audit',
    shortLabel: 'Digital',
    component: DigitalTab,
    icon: Smartphone,
    category: 'analytics',
    description: 'Online presence & social media',
  },
  {
    id: 'growth',
    label: 'Growth Recommendations',
    shortLabel: 'Growth',
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
    <div className="min-h-screen bg-background text-text-primary font-sans main-container">
      <div className="w-full">
        {/* Clean Header */}
        <div className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border shadow-sm">
          {/* Header Content */}
          <div className="relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-primary/3"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6">
                {/* Title Section */}
                <div className="min-w-0 flex-1">
                  <h1 className="text-3xl sm:text-4xl font-bold text-text-primary tracking-tight mb-2">
                    {ourCafe.name}
                  </h1>
                  <p className="text-text-secondary font-mono text-base">
                    Campbell, CA
                  </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                  <ThemeToggle />
                  <ShareButton onClick={() => console.log('Share button clicked!')} />
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-t border-border bg-background/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto">
              {/* Desktop/Tablet Tab Navigation */}
              <div className="hidden sm:flex px-4 sm:px-6 lg:px-8 py-3">
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

              {/* Mobile Tab Navigation */}
              <div className="sm:hidden">
                <div className="flex overflow-x-auto scrollbar-hide px-4 py-3 gap-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        flex-shrink-0 flex flex-col items-center justify-center
                        px-5 py-3.5 rounded-xl border-2 transition-all duration-200
                        min-w-[85px] gap-2 shadow-sm
                        ${
                          activeTab === tab.id
                            ? tab.special
                              ? 'bg-accent-400 border-accent-400 text-background shadow-lg transform scale-[1.02]'
                              : 'bg-primary border-primary text-on-primary shadow-lg transform scale-[1.02]'
                            : 'bg-surface border-border text-text-secondary hover:text-text-primary hover:border-primary/50 hover:bg-surface/80'
                        }
                      `}
                    >
                      <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? '' : 'opacity-70'}`} />
                      <span className={`text-xs font-semibold leading-tight text-center ${activeTab === tab.id ? '' : 'opacity-80'}`}>
                        {tab.shortLabel}
                      </span>
                    </button>
                  ))}
                </div>
                
                {/* Scroll Indicator */}
                <div className="flex justify-center pb-2">
                  <div className="flex gap-1">
                    {tabs.map((_, index) => (
                      <div
                        key={index}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                          index === tabs.findIndex(tab => tab.id === activeTab)
                            ? 'bg-primary'
                            : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Active Tab Title for Mobile */}
          <div className="sm:hidden mb-4">
            {tabs.map((tab) => 
              activeTab === tab.id ? (
                <div key={tab.id} className="text-center">
                  <h2 className="text-lg font-bold text-text-primary">
                    {tab.label}
                  </h2>
                  <p className="text-sm text-text-secondary mt-1">
                    {tab.description}
                  </p>
                </div>
              ) : null
            )}
          </div>

          {/* Tab Content */}
          <div className="transition-opacity duration-200">
            {renderTabContent()}
          </div>
        </div>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border text-center">
          <p className="font-mono text-xs sm:text-sm text-text-secondary tracking-widest">
            Built with StoreOps.AI
          </p>
        </footer>
      </div>
    </div>
  )
}

export default LookoutCafeDashboard
