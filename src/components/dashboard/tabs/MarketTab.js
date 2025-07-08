import React, { useState, useMemo, useCallback } from 'react'
import {
  Download,
  Eye,
  FileText,
  X,
  ChevronDown,
  ChevronRight,
  // Section Icons
  Home,
  Map,
  Globe,
  Share2,
  // Trend Icons
  DollarSign,
  Users,
  Target,
  Building,
  Coffee,
  Smartphone,
  TrendingUp,
  Heart,
  // Status Icons
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  Zap,
  Info,
  ArrowRight,
  Sparkles,
  TrendingDown,
} from 'lucide-react'
import marketData from '../data/markettab.json'

// Constants for better maintainability
const SECTION_CONFIG = {
  fiveMile: {
    key: 'fiveMileRadius',
    icon: Home,
    scope: 'Hyperlocal',
    trendIcons: {
      economicTrends: DollarSign,
      culturalTrends: Users,
      demographicTrends: Target,
    }
  },
  thirtyMile: {
    key: 'thirtyMileRadius',
    icon: Map,
    scope: 'Regional',
    trendIcons: {
      economicTrends: Building,
      culturalTrends: Coffee,
      demographicTrends: Smartphone,
    }
  },
  macro: {
    key: 'macroMarketTrends',
    icon: Globe,
    scope: 'National',
    trendIcons: {
      economicTrends: TrendingUp,
      culturalTrends: Heart,
      demographicTrends: Users,
    }
  },
  social: {
    key: 'socialMediaTrends',
    icon: Share2,
    scope: 'Digital',
    isSpecial: true,
  }
}

const INITIAL_EXPANDED_STATE = {
  fiveMile: true,
  thirtyMile: false,
  macro: false,
  social: false,
}

// Helper function to extract key insights from text
const extractKeyInsights = (summary) => {
  const sentences = summary.split('. ')
  if (sentences.length <= 2) return []
  
  // Extract the most actionable/important sentences
  return sentences
    .filter(sentence => 
      sentence.includes('opportunity') || 
      sentence.includes('significant') || 
      sentence.includes('however') ||
      sentence.includes('key') ||
      sentence.includes('important')
    )
    .slice(0, 2)
    .map(sentence => sentence.trim() + (sentence.endsWith('.') ? '' : '.'))
}

// Extracted helper components
const SectionHeader = React.memo(({ title, subtitle, icon: Icon, isExpanded, onToggle, scope }) => (
  <div
    className="group flex items-center justify-between p-4 sm:p-6 cursor-pointer hover:bg-surface/80 transition-all duration-200"
    onClick={onToggle}
  >
    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
      <div className="p-2 sm:p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base sm:text-lg font-bold text-text-primary group-hover:text-primary transition-colors truncate">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary line-clamp-2">{subtitle}</p>
      </div>
    </div>
    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
      {scope && (
        <span className="hidden sm:inline text-xs text-text-secondary font-medium px-2 py-1 bg-border/20 rounded group-hover:bg-primary/10 transition-colors">
          {scope}
        </span>
      )}
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1 bg-border/10 rounded-full group-hover:bg-primary/10 transition-colors">
        <span className="hidden sm:inline text-xs text-text-secondary group-hover:text-primary font-medium">
          {isExpanded ? 'Hide' : 'Show'} details
        </span>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-primary transition-colors" />
        ) : (
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-text-secondary group-hover:text-primary transition-colors" />
        )}
      </div>
    </div>
  </div>
))

const KeyInsightCard = React.memo(({ insights }) => {
  if (!insights || insights.length === 0) return null
  
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-primary" />
        <h5 className="text-sm font-semibold text-primary">Key Insights</h5>
      </div>
      <ul className="space-y-2">
        {insights.map((insight, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
            <span className="text-sm text-text-primary font-medium leading-relaxed">{insight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
})

const MetricCard = React.memo(({ title, metric, keyChange }) => (
  <div className="bg-background border border-border p-4 rounded-lg hover:border-primary/30 transition-colors">
    <h5 className="text-sm font-semibold text-text-primary mb-2">{title}</h5>
    <p className="text-xl font-bold text-primary mb-2">{metric}</p>
    <div className="flex items-start gap-1">
      <Info className="w-3 h-3 text-text-secondary mt-0.5 flex-shrink-0" />
      <p className="text-xs text-text-secondary leading-relaxed">{keyChange}</p>
    </div>
  </div>
))

const MetricCardSection = React.memo(({ metricCards }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
    {metricCards?.map((card, index) => (
      <MetricCard key={index} {...card} />
    ))}
  </div>
))

const ActionableItem = React.memo(({ item, type, icon: Icon, colorClass }) => (
  <div className="flex items-start gap-3 p-3 bg-background border border-border rounded-lg hover:border-primary/30 transition-colors">
    <Icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClass}`} />
    <div className="min-w-0 flex-1">
      <p className="text-sm text-text-primary leading-relaxed">{item}</p>
    </div>
  </div>
))

const ThreatsOpportunitiesSection = React.memo(({ threats, opportunities }) => (
  <div className="space-y-6">
    {/* Opportunities First - More Positive */}
    {opportunities && opportunities.length > 0 && (
      <div>
        <h5 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Opportunities to Capture
        </h5>
        <div className="grid grid-cols-1 gap-3">
          {opportunities.map((opportunity, index) => (
            <ActionableItem 
              key={`opp-${index}`} 
              item={opportunity} 
              type="opportunity"
              icon={CheckCircle}
              colorClass="text-primary"
            />
          ))}
        </div>
      </div>
    )}
    
    {/* Threats Second */}
    {threats && threats.length > 0 && (
      <div>
        <h5 className="text-sm font-semibold text-accent-400 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Challenges to Monitor
        </h5>
        <div className="grid grid-cols-1 gap-3">
          {threats.map((threat, index) => (
            <ActionableItem 
              key={`threat-${index}`} 
              item={threat} 
              type="threat"
              icon={AlertTriangle}
              colorClass="text-accent-400"
            />
          ))}
        </div>
      </div>
    )}
  </div>
))

const SummaryBox = React.memo(({ title, summary, icon: Icon }) => {
  const keyInsights = extractKeyInsights(summary)
  
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-primary" />
        <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
      </div>
      
      <KeyInsightCard insights={keyInsights} />
      
      <div className="bg-background border border-border p-4 rounded-lg">
        <h5 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4" />
          Detailed Analysis
        </h5>
        <p className="text-sm text-text-secondary leading-relaxed">{summary}</p>
      </div>
    </div>
  )
})

const TrendSubSection = React.memo(({ title, summary, metricCards, threats, opportunities, icon: Icon }) => (
  <div className="space-y-6">
    <SummaryBox title={title} summary={summary} icon={Icon} />
    
    {metricCards && metricCards.length > 0 && (
      <div>
        <h5 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Key Metrics
        </h5>
        <MetricCardSection metricCards={metricCards} />
      </div>
    )}
    
    {(threats?.length > 0 || opportunities?.length > 0) && (
      <ThreatsOpportunitiesSection threats={threats} opportunities={opportunities} />
    )}
  </div>
))

const SocialTrendCard = React.memo(({ trend, index, total }) => (
  <div className="bg-background border border-border p-4 rounded-lg hover:border-primary/30 transition-colors">
    <div className="flex items-start gap-3 mb-3">
      <div className="p-1.5 bg-primary/10 rounded">
        <Share2 className="w-4 h-4 text-primary" />
      </div>
      <div className="min-w-0 flex-1">
        <h5 className="text-sm font-semibold text-text-primary mb-2">{trend.trend}</h5>
        <p className="text-xs text-text-secondary leading-relaxed mb-3">{trend.description}</p>
        
        <div className="bg-primary/5 border border-primary/20 p-3 rounded">
          <div className="flex items-start gap-2">
            <Lightbulb className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
            <div className="min-w-0">
              <span className="text-xs font-medium text-primary">Action Item:</span>
              <p className="text-xs text-primary font-medium mt-1">{trend.opportunity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

const SocialMediaSection = React.memo(({ data }) => (
  <div className="space-y-6">
    <div>
      <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5 text-primary" />
        Digital Trends & Opportunities
      </h4>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        {data.keyTrends?.map((trend, index) => (
          <SocialTrendCard 
            key={index} 
            trend={trend} 
            index={index} 
            total={data.keyTrends.length} 
          />
        ))}
      </div>
    </div>

    <div>
      <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
        <Target className="w-5 h-5 text-primary" />
        Recommended Actions
      </h4>
      <div className="grid grid-cols-1 gap-3">
        {data.businessOpportunities?.map((opportunity, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="p-1 bg-primary/20 rounded">
              <CheckCircle className="w-3 h-3 text-primary" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="text-xs font-medium text-primary">Action {index + 1}:</span>
              <p className="text-sm text-text-primary mt-1">{opportunity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
))

const StandardSection = React.memo(({ sectionData, config, isExpanded }) => {
  const trendTypes = ['economicTrends', 'culturalTrends', 'demographicTrends']
  
  return (
    <div className="space-y-8">
      {trendTypes.map((trendType, index) => {
        const trendData = sectionData[trendType]
        const TrendIcon = config.trendIcons[trendType]
        
        if (!trendData) return null
        
        return (
          <React.Fragment key={trendType}>
            <TrendSubSection
              title={trendData.title}
              summary={trendData.summary}
              metricCards={trendData.metricCards}
              threats={trendData.threats}
              opportunities={trendData.opportunities}
              icon={TrendIcon}
            />
            {index < trendTypes.length - 1 && (
              <div className="border-b border-border/30"></div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
})

const ReportModal = React.memo(({ isOpen, onClose, reportContent }) => {
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-surface border border-border rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="flex items-center gap-3 min-w-0">
            <FileText className="w-5 h-5 text-primary flex-shrink-0" />
            <h3 className="text-base sm:text-lg font-semibold text-text-primary truncate">
              Market Intelligence Report
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-border/50 rounded-md transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="prose prose-sm max-w-none">
            <div className="whitespace-pre-wrap text-xs sm:text-sm text-text-secondary leading-relaxed">
              {reportContent}
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 p-4 border-t border-border">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
})

const ExecutiveSummaryCard = React.memo(({ summary }) => {
  const keyInsights = extractKeyInsights(summary)
  
  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
      <h2 className="text-xl font-bold text-text-primary mb-4 flex items-center gap-2">
        <FileText className="w-5 h-5 text-primary" />
        Executive Summary
      </h2>
      
      {keyInsights.length > 0 && (
        <div className="mb-4">
          <KeyInsightCard insights={keyInsights} />
        </div>
      )}
      
      <div className="bg-background border border-border p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <Info className="w-4 h-4" />
          Full Analysis
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed">{summary}</p>
      </div>
    </div>
  )
})

const MarketTab = () => {
  const [expandedSections, setExpandedSections] = useState(INITIAL_EXPANDED_STATE)
  const [showReport, setShowReport] = useState(false)

  const toggleSection = useCallback((section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }))
  }, [])

  const generateMarkdownReport = useCallback(() => {
    return `# Market Intelligence Report: Lookout Coffee - Campbell, California
## July 2025 Strategic Analysis

### Executive Summary

${marketData.executiveSummary}

### ${marketData.fiveMileRadius.title}

${marketData.fiveMileRadius.summary}

#### Economic Trends
${marketData.fiveMileRadius.economicTrends.summary}

#### Cultural Trends  
${marketData.fiveMileRadius.culturalTrends.summary}

#### Demographic Trends
${marketData.fiveMileRadius.demographicTrends.summary}

### ${marketData.thirtyMileRadius.title}

${marketData.thirtyMileRadius.summary}

### ${marketData.macroMarketTrends.title}

${marketData.macroMarketTrends.summary}

### ${marketData.socialMediaTrends.title}

${marketData.socialMediaTrends.keyTrends.map(trend => `**${trend.trend}**: ${trend.description}`).join('\n\n')}

### Business Opportunities

${marketData.socialMediaTrends.businessOpportunities.map((opp, i) => `${i + 1}. ${opp}`).join('\n')}

Generated on ${new Date().toLocaleDateString()}`
  }, [])

  const exportToMarkdown = useCallback(() => {
    const markdownContent = generateMarkdownReport()
    const blob = new Blob([markdownContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lookout-coffee-market-report.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [generateMarkdownReport])

  const reportContent = useMemo(() => generateMarkdownReport(), [generateMarkdownReport])

  const renderSection = useCallback((sectionKey, config) => {
    const sectionData = marketData[config.key]
    const isExpanded = expandedSections[sectionKey]

    return (
      <div key={sectionKey} className="bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-colors">
        <SectionHeader
          title={sectionData.title}
          subtitle={config.isSpecial ? "Key digital trends and opportunities for engagement" : sectionData.summary}
          icon={config.icon}
          isExpanded={isExpanded}
          onToggle={() => toggleSection(sectionKey)}
          scope={config.scope}
        />

        {isExpanded && (
          <div className="border-t border-border p-6">
            {config.isSpecial ? (
              <SocialMediaSection data={sectionData} />
            ) : (
              <StandardSection sectionData={sectionData} config={config} isExpanded={isExpanded} />
            )}
          </div>
        )}
      </div>
    )
  }, [expandedSections, toggleSection])

  return (
    <div className="space-y-6">
      {/* Report Actions */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2">
        <button
          onClick={() => setShowReport(true)}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Report
        </button>
        <button
          onClick={exportToMarkdown}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-primary text-on-primary rounded-md hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      {/* Executive Summary */}
      <ExecutiveSummaryCard summary={marketData.executiveSummary} />

      {/* Dynamic Sections */}
      {Object.entries(SECTION_CONFIG).map(([sectionKey, config]) => 
        renderSection(sectionKey, config)
      )}

      {/* Report Modal */}
      <ReportModal 
        isOpen={showReport}
        onClose={() => setShowReport(false)}
        reportContent={reportContent}
      />
    </div>
  )
}

export default MarketTab
