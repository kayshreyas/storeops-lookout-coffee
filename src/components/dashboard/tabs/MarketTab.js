import React, { useState } from 'react'
import {
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  TrendingDown,
  MapPin,
  Users,
  DollarSign,
  Coffee,
  Smartphone,
  Building,
  Download,
  Target,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  Home,
  Map,
  Lightbulb,
  TrendingDown as TrendingDownIcon,
  ChevronDown,
  ChevronRight,
  FileText,
  X,
  Eye,
} from 'lucide-react'
import MetricCard from '../shared/MetricCard'

const MarketTab = () => {
  const [expandedSections, setExpandedSections] = useState({
    local: true,
    regional: false,
    national: false,
  })

  const [showReport, setShowReport] = useState(false)

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const hyperLocalData = {
    demographics: {
      population: 40310,
      medianAge: 39.2,
      perCapitaIncome: 96504,
      medianHouseholdIncome: 147128,
      localBusinessPreference: 75,
      remoteWorkPercentage: 45,
    },
    marketSaturation: {
      coffeeShops: 2.3,
      competitorsPer40k: 3,
      saturationLevel: 'Low',
      opportunity: 'HIGH',
    },
    businessInsights: [
      {
        insight: 'Most coffee shops close by 6pm - evening hours are wide open',
        implication: 'You could capture dinner crowd and evening studiers',
        action: 'Consider staying open until 8-9pm',
      },
      {
        insight: 'Sunday Farmers Market brings 2,000+ visitors downtown',
        implication: 'Built-in customer base every weekend',
        action: 'Partner with market or set up nearby',
      },
      {
        insight: 'Half of workers are remote - need workspace during day',
        implication: 'Steady daytime traffic from laptop workers',
        action: 'Offer WiFi, power outlets, and work-friendly seating',
      },
      {
        insight: '3 out of 4 locals prefer supporting local businesses',
        implication: 'Community will choose you over Starbucks if you deliver',
        action: 'Emphasize local ownership in marketing',
      },
    ],
  }

  const regionalData = {
    marketSize: {
      coffeeShops: 2000,
      dailyConsumption: 72,
      mobileOrderingAdoption: 45,
      remoteWorkPercentage: 38,
      premiumDemand: 25,
    },
    techInfluence: {
      majorCampuses: ['Apple', 'Google', 'Meta'],
      distance: '5-10 miles',
      walmartTechHub: 3600,
      weekdayDemandDriver: 'High',
    },
    businessOpportunities: [
      {
        opportunity: 'Apple, Google, Meta employees live nearby',
        meaning: 'High-income customers who pay premium prices',
        action: 'Target $5-7 drinks vs $3-4 elsewhere',
      },
      {
        opportunity: 'Walmart Tech Hub has 3,600 employees',
        meaning: 'Massive corporate catering opportunity',
        action: 'Pitch office coffee service and meeting catering',
      },
      {
        opportunity: 'Bay Area drinks 72% more coffee than national average',
        meaning: 'This is coffee-obsessed territory',
        action: 'Go all-in on quality - customers will notice',
      },
      {
        opportunity: 'Nearly half order via mobile apps',
        meaning: 'Must have mobile ordering from day one',
        action: 'Budget for app development and marketing',
      },
    ],
  }

  const macroData = {
    industry: {
      marketSize: 74.3,
      specialtyGrowth: 10.4,
      dailyConsumption: 67,
      twentyYearHigh: true,
    },
    demographics: {
      genZ: { daily: 46, flavored: 73, iced: 60 },
      millennials: { daily: 65, sustainability: 'High' },
      genX: { daily: 74, priceSensitive: true },
      boomers: { daily: 83, digitalAdoption: 'Low' },
    },
    businessTrends: [
      {
        trend: 'Coffee consumption at 20-year high',
        meaning: 'Perfect timing to enter the market',
        action: 'Ride the wave - demand is strong',
      },
      {
        trend: 'Young people want flavored and iced drinks',
        meaning: 'Traditional coffee shops are missing this',
        action: 'Offer creative cold drinks and flavored options',
      },
      {
        trend: 'Remote work changed coffee hours',
        meaning: 'Less morning rush, more steady all-day demand',
        action: 'Staff for consistent flow vs morning surge',
      },
      {
        trend: 'Loyalty programs boost revenue 25%',
        meaning: 'Regulars are your goldmine',
        action: 'Launch rewards program immediately',
      },
    ],
  }

  const commodityData = {
    arabica: {
      price: 4.38,
      change: 70,
      trend: 'up',
      historicHigh: true,
    },
    businessImpact: [
      {
        challenge: 'Coffee prices up 70% - your biggest cost is skyrocketing',
        meaning: 'Profit margins under pressure',
        action: 'Lock in supplier contracts now, raise prices gradually',
      },
      {
        challenge: 'Climate change reducing coffee growing areas',
        meaning: 'Prices will likely stay high for years',
        action: 'Focus on premium positioning to justify higher prices',
      },
      {
        challenge: 'Brazil production down - supply chain disruptions',
        meaning: 'May face shortages of popular beans',
        action: 'Work with multiple suppliers, prepare backup options',
      },
    ],
  }

  const seasonalData = {
    july: {
      coldBeveragePercentage: 70,
      coldBrewPremium: 60,
      salesIncreasePer10Degrees: 18,
      nitroColdBrewGrowth: 25,
    },
    summerStrategies: [
      {
        strategy: 'July is cold drink season - 70% of orders are iced',
        meaning: 'Hot coffee sales plummet in summer',
        action: 'Invest in cold brew equipment and iced drink variety',
      },
      {
        strategy: 'Cold brew commands 60% higher prices than iced coffee',
        meaning: 'Same coffee, much higher profit margins',
        action: 'Make cold brew your summer specialty',
      },
      {
        strategy: 'Sales jump 18% for every 10 degrees of heat',
        meaning: 'Hot days are profit bonanzas',
        action: 'Staff up during heat waves, promote cold drinks',
      },
      {
        strategy: 'Campbell Summer Concerts bring evening crowds',
        meaning: 'Unique opportunity most coffee shops miss',
        action: 'Stay open late on concert nights, offer grab-and-go',
      },
    ],
  }

  const exportToMarkdown = () => {
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
  }

  const generateMarkdownReport = () => {
    return `# Executive Market Intelligence Report: Lookout Coffee - Campbell, California
## July 2025 Strategic Analysis

### Executive Summary

The Campbell, California coffee market presents a compelling growth opportunity despite industry headwinds. With median household income of $147,128 and 62% of Americans drinking coffee daily, the local market demonstrates strong fundamentals.

### Geographic Market Analysis

#### Hyperlocal Market (5-Mile Radius)
- **Population**: ${hyperLocalData.demographics.population.toLocaleString()}
- **Median Age**: ${hyperLocalData.demographics.medianAge} years
- **Per Capita Income**: $${hyperLocalData.demographics.perCapitaIncome.toLocaleString()}
- **Median Household Income**: $${hyperLocalData.demographics.medianHouseholdIncome.toLocaleString()}
- **Local Business Preference**: ${hyperLocalData.demographics.localBusinessPreference}%
- **Remote Work**: ${hyperLocalData.demographics.remoteWorkPercentage}%

#### Regional Market (30-Mile South Bay/Peninsula)
- **Coffee Shops**: ${regionalData.marketSize.coffeeShops}+
- **Daily Consumption**: ${regionalData.marketSize.dailyConsumption}%
- **Mobile Ordering**: ${regionalData.marketSize.mobileOrderingAdoption}%
- **Premium Demand**: ${regionalData.marketSize.premiumDemand}% above national average

#### National Market Context
- **Market Size**: $${macroData.industry.marketSize} billion
- **Specialty Growth**: ${macroData.industry.specialtyGrowth}% CAGR
- **Daily Consumption**: ${macroData.industry.dailyConsumption}% (20-year high)

### Commodity Market
- **Arabica Price**: $${commodityData.arabica.price}/lb (up ${commodityData.arabica.change}%)
- **Market Status**: Historic highs with supply chain challenges

### Seasonal Insights (July Focus)
- **Cold Beverages**: ${seasonalData.july.coldBeveragePercentage}% of orders
- **Cold Brew Premium**: ${seasonalData.july.coldBrewPremium}% over iced coffee
- **Temperature Impact**: ${seasonalData.july.salesIncreasePer10Degrees}% increase per 10°F rise

### Strategic Recommendations
1. Secure drive-thru location in South Campbell (underserved market)
2. Partner with 2-3 local Bay Area roasters for supply chain resilience
3. Launch mobile ordering platform with loyalty program
4. Develop corporate catering relationships with tech employers

Generated on ${new Date().toLocaleDateString()}`
  }

  const SectionHeader = ({
    title,
    subtitle,
    icon: Icon,
    isExpanded,
    onToggle,
    scope,
  }) => (
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
  )

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Report Actions */}
      <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2">
        <button
          onClick={() => setShowReport(true)}
          className="flex items-center justify-center gap-2 px-3 py-2 sm:py-1.5 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Report
        </button>
        <button
          onClick={exportToMarkdown}
          className="flex items-center justify-center gap-2 px-3 py-2 sm:py-1.5 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Local Market Section */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Your Campbell Customer Base"
          subtitle="Who lives here and what they can afford to spend on coffee"
          icon={Home}
          isExpanded={expandedSections.local}
          onToggle={() => toggleSection('local')}
          scope="5-mile radius"
        />

        {expandedSections.local && (
          <div className="border-t border-border p-4 sm:p-6">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                <MetricCard
                  title="Local Population"
                  value={hyperLocalData.demographics.population.toLocaleString()}
                  icon={Users}
                  subtitle="Affluent Silicon Valley suburb"
                />
                <MetricCard
                  title="Household Income"
                  value={`$${(hyperLocalData.demographics.medianHouseholdIncome / 1000).toFixed(0)}K`}
                  icon={DollarSign}
                  subtitle="3x national average - can pay premium"
                />
                <MetricCard
                  title="Love Local Business"
                  value={`${hyperLocalData.demographics.localBusinessPreference}%`}
                  icon={CheckCircle}
                  subtitle="Will choose you over Starbucks"
                />
                <MetricCard
                  title="Work From Home"
                  value={`${hyperLocalData.demographics.remoteWorkPercentage}%`}
                  icon={Building}
                  subtitle="Need workspace during the day"
                />
                <MetricCard
                  title="Competition Level"
                  value={hyperLocalData.marketSaturation.saturationLevel}
                  icon={Target}
                  subtitle="Room for new quality shop"
                />
                <MetricCard
                  title="Prime Age"
                  value={`${hyperLocalData.demographics.medianAge} years`}
                  icon={Clock}
                  subtitle="Peak coffee drinking age"
                />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-text-primary">
                  Your Business Opportunities
                </h4>
                {hyperLocalData.businessInsights.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-2 min-w-0">
                        <p className="text-sm sm:text-base text-text-primary font-medium">
                          {item.insight}
                        </p>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.implication}
                        </p>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium text-sm">
                            →
                          </span>
                          <p className="text-xs sm:text-sm text-primary font-medium">
                            {item.action}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < hyperLocalData.businessInsights.length - 1 && (
                      <div className="border-b border-border/30 mt-4 sm:mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Regional Market Section */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Bay Area Coffee Market"
          subtitle="The bigger picture - why this region is perfect for coffee"
          icon={Map}
          isExpanded={expandedSections.regional}
          onToggle={() => toggleSection('regional')}
          scope="30-mile radius"
        />

        {expandedSections.regional && (
          <div className="border-t border-border p-4 sm:p-6">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <MetricCard
                  title="Total Coffee Shops"
                  value={`${regionalData.marketSize.coffeeShops}+`}
                  icon={Coffee}
                  subtitle="Competitive but thriving market"
                />
                <MetricCard
                  title="Daily Coffee Drinkers"
                  value={`${regionalData.marketSize.dailyConsumption}%`}
                  icon={TrendingUp}
                  subtitle="vs 67% nationally - coffee obsessed"
                />
                <MetricCard
                  title="Mobile Ordering"
                  value={`${regionalData.marketSize.mobileOrderingAdoption}%`}
                  icon={Smartphone}
                  subtitle="Must-have from day one"
                />
                <MetricCard
                  title="Premium Willingness"
                  value={`+${regionalData.marketSize.premiumDemand}%`}
                  icon={ArrowUpRight}
                  subtitle="Higher prices accepted here"
                />
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-text-primary">
                  Your Biggest Opportunities
                </h4>
                {regionalData.businessOpportunities.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-2 min-w-0">
                        <p className="text-sm sm:text-base text-text-primary font-medium">
                          {item.opportunity}
                        </p>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.meaning}
                        </p>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium text-sm">
                            →
                          </span>
                          <p className="text-xs sm:text-sm text-primary font-medium">
                            {item.action}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < regionalData.businessOpportunities.length - 1 && (
                      <div className="border-b border-border/30 mt-4 sm:mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* National Market Section */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="US Coffee Industry Overview"
          subtitle="National trends affecting your business"
          icon={Globe}
          isExpanded={expandedSections.national}
          onToggle={() => toggleSection('national')}
          scope="National"
        />

        {expandedSections.national && (
          <div className="border-t border-border p-4 sm:p-6">
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                <MetricCard
                  title="Industry Size"
                  value={`$${macroData.industry.marketSize}B`}
                  icon={DollarSign}
                  subtitle="Massive and growing market"
                />
                <MetricCard
                  title="Specialty Growth"
                  value={`${macroData.industry.specialtyGrowth}%`}
                  icon={TrendingUp}
                  subtitle="Annual growth rate"
                />
                <MetricCard
                  title="Daily Drinkers"
                  value={`${macroData.industry.dailyConsumption}%`}
                  icon={Coffee}
                  subtitle="20-year high - perfect timing"
                />
                <MetricCard
                  title="Mobile Orders"
                  value="26%"
                  icon={Smartphone}
                  subtitle="At Starbucks - growing fast"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div className="bg-background border border-border p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
                    Coffee Habits by Generation
                  </h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-text-secondary">Gen Z (18-24)</span>
                      <span className="text-sm sm:text-base text-text-primary font-bold">
                        {macroData.demographics.genZ.daily}% daily
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary ml-4 leading-relaxed">
                      Want: Flavored drinks (73%), iced options (60%),
                      Instagram-worthy
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-text-secondary">
                        Millennials (25-39)
                      </span>
                      <span className="text-sm sm:text-base text-text-primary font-bold">
                        {macroData.demographics.millennials.daily}% daily
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary ml-4 leading-relaxed">
                      Want: Sustainable sourcing, premium quality, workspace
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-text-secondary">Gen X (40-59)</span>
                      <span className="text-sm sm:text-base text-text-primary font-bold">
                        {macroData.demographics.genX.daily}% daily
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary ml-4 leading-relaxed">
                      Want: Good value, traditional coffee, reliable service
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm text-text-secondary">Boomers (60+)</span>
                      <span className="text-sm sm:text-base text-text-primary font-bold">
                        {macroData.demographics.boomers.daily}% daily
                      </span>
                    </div>
                    <div className="text-xs text-text-secondary ml-4 leading-relaxed">
                      Want: Hot coffee, personal service, simple ordering
                    </div>
                  </div>
                </div>
                <div className="bg-background border border-border p-4 sm:p-6 rounded-lg">
                  <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
                    Key Takeaways for Your Business
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">
                        <strong>Younger customers</strong> drive growth - focus
                        on iced drinks and flavors
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">
                        <strong>Millennials</strong> are your sweet spot -
                        premium quality, ethical sourcing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">
                        <strong>Older customers</strong> are most loyal - keep
                        classics on the menu
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-base sm:text-lg font-semibold text-text-primary">
                  Industry Changes That Affect You
                </h4>
                {macroData.businessTrends.map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div className="space-y-2 min-w-0">
                        <p className="text-sm sm:text-base text-text-primary font-medium">
                          {item.trend}
                        </p>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {item.meaning}
                        </p>
                        <div className="flex items-start gap-2">
                          <span className="text-primary font-medium text-sm">
                            →
                          </span>
                          <p className="text-xs sm:text-sm text-primary font-medium">
                            {item.action}
                          </p>
                        </div>
                      </div>
                    </div>
                    {index < macroData.businessTrends.length - 1 && (
                      <div className="border-b border-border/30 mt-4 sm:mt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cost & Supply Chain Challenges */}
      <section className="bg-surface border border-border rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
          Your Biggest Business Challenge: Rising Costs
        </h3>
        <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
          Coffee prices are at historic highs - here's what you need to know
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div className="bg-background border border-border p-4 sm:p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
              Current Coffee Prices
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs sm:text-sm text-text-secondary">Coffee Bean Cost</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm sm:text-base text-text-primary font-bold">
                    ${commodityData.arabica.price}/lb
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-accent-400" />
                  <span className="text-accent-400 text-xs sm:text-sm">
                    +{commodityData.arabica.change}%
                  </span>
                </div>
              </div>
              <div className="bg-accent-400/10 border border-accent-400/20 p-3 rounded">
                <div className="flex items-center">
                  <AlertTriangle className="w-4 h-4 text-accent-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-accent-400 font-medium ml-2">
                    Highest prices in history - expect them to stay high
                  </span>
                </div>
              </div>
              <div className="text-xs text-text-secondary">
                Your coffee cost will be roughly $0.50-0.75 per cup vs $0.30
                last year
              </div>
            </div>
          </div>
          <div className="bg-background border border-border p-4 sm:p-6 rounded-lg">
            <h4 className="text-base sm:text-lg font-semibold text-text-primary mb-4">
              What This Means for Pricing
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  <strong>Price increases unavoidable</strong> - plan for $5-7
                  specialty drinks
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  <strong>Focus on premium positioning</strong> - justify higher
                  prices with quality
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary">
                  <strong>Campbell can afford it</strong> - high incomes support
                  premium pricing
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6">
          {commodityData.businessImpact.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
                <div className="space-y-2 min-w-0">
                  <p className="text-sm sm:text-base text-text-primary font-medium">
                    {item.challenge}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.meaning}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-accent-400 font-medium text-sm">
                      →
                    </span>
                    <p className="text-xs sm:text-sm text-accent-400 font-medium">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
              {index < commodityData.businessImpact.length - 1 && (
                <div className="border-b border-border/30 mt-4 sm:mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Summer Strategy */}
      <section className="bg-surface border border-border rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
          Summer Success Strategy
        </h3>
        <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6">
          July data shows exactly how to maximize summer profits
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <MetricCard
            title="Cold Drink Orders"
            value={`${seasonalData.july.coldBeveragePercentage}%`}
            icon={Coffee}
            subtitle="Hot coffee sales crash in summer"
          />
          <MetricCard
            title="Cold Brew Premium"
            value={`+${seasonalData.july.coldBrewPremium}%`}
            icon={TrendingUp}
            subtitle="Higher profit than iced coffee"
          />
          <MetricCard
            title="Heat = Sales"
            value={`+${seasonalData.july.salesIncreasePer10Degrees}%`}
            icon={TrendingUp}
            subtitle="per 10°F temperature rise"
          />
          <MetricCard
            title="Nitro Cold Brew"
            value={`+${seasonalData.july.nitroColdBrewGrowth}%`}
            icon={ArrowUpRight}
            subtitle="Trendy and profitable"
          />
        </div>
        <div className="space-y-4 sm:space-y-6">
          {seasonalData.summerStrategies.map((item, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-start gap-3">
                <Coffee className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div className="space-y-2 min-w-0">
                  <p className="text-sm sm:text-base text-text-primary font-medium">
                    {item.strategy}
                  </p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {item.meaning}
                  </p>
                  <div className="flex items-start gap-2">
                    <span className="text-primary font-medium text-sm">→</span>
                    <p className="text-xs sm:text-sm text-primary font-medium">
                      {item.action}
                    </p>
                  </div>
                </div>
              </div>
              {index < seasonalData.summerStrategies.length - 1 && (
                <div className="border-b border-border/30 mt-4 sm:mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Report Modal */}
      {showReport && (
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
                onClick={() => setShowReport(false)}
                className="p-2 hover:bg-border/50 rounded-md transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {generateMarkdownReport()}
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-2 p-4 border-t border-border">
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
              >
                Close
              </button>
              <button
                onClick={exportToMarkdown}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm bg-primary text-on-primary rounded-md hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketTab
