import React, { useState, useEffect } from 'react'
import {
  Star,
  MapPin,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Eye,
  Download,
  FileText,
  X,
  ChevronDown,
  ChevronRight,
  Target,
  Globe,
  Users,
  DollarSign,
  Smartphone,
  Shield,
  Coffee,
  Lightbulb,
  Search,
  BarChart3,
  Award,
  Zap,
} from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import { competitors, ourCafe } from '../data/constants'
import MetricCard from '../shared/MetricCard'
import 'leaflet/dist/leaflet.css'
import { useTheme } from '../../../hooks/useTheme'

const ChangeView = ({ center, zoom }) => {
  const map = useMap()
  useEffect(() => {
    map.setView(center, zoom)
  }, [center, zoom, map])
  return null
}

const CompetitionTab = () => {
  const { theme } = useTheme()
  const [selected, setSelected] = useState(competitors[0])
  const [mapCenter, setMapCenter] = useState([ourCafe.lat, ourCafe.lng])
  const [mapZoom, setMapZoom] = useState(14)
  const [showReport, setShowReport] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    tier1: true,
    tier2: false,
    seo: false,
    recommendations: false,
  })

  const getIcon = (type) => {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
    const surfaceColor = getComputedStyle(document.documentElement).getPropertyValue('--color-surface').trim()
    const onPrimaryColor = getComputedStyle(document.documentElement).getPropertyValue('--color-on-primary').trim()
    const textColor = theme === 'light' ? 'white' : 'black'


    const iconHtml =
      type === 'us'
        ? `<div style="background-color: ${primaryColor}; width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${onPrimaryColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg></div>`
        : `<div style="background-color: ${surfaceColor}; width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${textColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>`

    return L.divIcon({
      html: iconHtml,
      className: '',
      iconSize: type === 'us' ? [40, 40] : [32, 32],
      iconAnchor: type === 'us' ? [20, 40] : [16, 32],
      popupAnchor: [0, -32],
    })
  }

  const handleSelect = (competitor) => {
    setSelected(competitor)
    setMapCenter([competitor.lat, competitor.lng])
    setMapZoom(16)
  }

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const getThreatLevelColor = (level) => {
    switch (level) {
      case 'HIGH':
        return 'text-red-400'
      case 'MODERATE':
        return 'text-accent-400'
      case 'LOW':
        return 'text-green-400'
      default:
        return 'text-text-secondary'
    }
  }

  const getThreatLevelIcon = (level) => {
    switch (level) {
      case 'HIGH':
        return AlertTriangle
      case 'MODERATE':
        return Target
      case 'LOW':
        return CheckCircle
      default:
        return Shield
    }
  }

  const exportToMarkdown = () => {
    fetch('/lookout-coffee-competitor-report.md')
      .then((response) => response.text())
      .then((content) => {
        const blob = new Blob([content], { type: 'text/markdown' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'lookout-coffee-competitor-report.md'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      })
      .catch((error) => {
        console.error('Error fetching report:', error)
        // Fallback to generate report content
        const markdownContent = generateMarkdownReport()
        const blob = new Blob([markdownContent], { type: 'text/markdown' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'lookout-coffee-competitor-report.md'
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      })
  }

  const generateMarkdownReport = () => {
    return `# Lookout Coffee - Comprehensive Competitor Intelligence Report
*Campbell, CA Coffee Market Analysis - July 2025*

## Executive Summary

Lookout Coffee faces strong local competition in Campbell, CA, particularly from Orchard Valley Coffee and established players like Barefoot Coffee. While Lookout ranks well for branded searches, there are significant opportunities to improve local SEO performance and capture broader market share.

## Key Findings
- Campbell's coffee market features 8+ direct competitors within a 2-mile radius
- Lookout Coffee ranks #2 overall in local search competitiveness but trails Orchard Valley Coffee
- Digital presence shows room for improvement: 39 organic keywords vs. competitors' 51-405
- Market trends favor Lookout's positioning: specialty coffee growing 9.5% annually

## Competitive Landscape

### Tier 1 Competitors (Primary Threats)

${competitors
  .filter((c) => c.tier === 'Tier 1')
  .map(
    (competitor) => `
#### ${competitor.name}
- **Threat Level:** ${competitor.threatLevel}
- **Rating:** ${competitor.rating}/5.0 (${competitor.reviewCount} reviews)
- **SEO Performance:** ${competitor.seoPerformance.organicKeywords} keywords, ${competitor.seoPerformance.estimatedTrafficValue} ETV
- **Key Threat:** ${competitor.keyThreat}
- **Opportunity:** ${competitor.keyOpportunity}
`
  )
  .join('')}

### Tier 2 Competitors (Secondary)

${competitors
  .filter((c) => c.tier === 'Tier 2')
  .map(
    (competitor) => `
#### ${competitor.name}
- **Threat Level:** ${competitor.threatLevel}
- **Rating:** ${competitor.rating}/5.0 (${competitor.reviewCount} reviews)
- **Focus:** ${competitor.productFocus}
`
  )
  .join('')}

## Strategic Recommendations

### Immediate Actions (0-3 months)
1. **SEO Optimization** - Improve local search rankings
2. **Content Marketing** - Build brand awareness through content
3. **Social Media Enhancement** - Increase digital presence

### Medium-term Initiatives (3-6 months)
1. **Menu Expansion** - Add competitive offerings
2. **Digital Infrastructure** - Implement online ordering
3. **Community Engagement** - Build local relationships

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
      className="group flex items-center justify-between p-4 cursor-pointer hover:bg-surface/80 transition-all duration-200"
      onClick={onToggle}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-text-secondary">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {scope && (
          <span className="text-xs text-text-secondary font-medium px-2 py-1 bg-border/20 rounded group-hover:bg-primary/10 transition-colors">
            {scope}
          </span>
        )}
        <div className="flex items-center gap-2 px-3 py-1 bg-border/10 rounded-full group-hover:bg-primary/10 transition-colors">
          <span className="text-xs text-text-secondary group-hover:text-primary font-medium">
            {isExpanded ? 'Hide' : 'Show'} details
          </span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
          ) : (
            <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
          )}
        </div>
      </div>
    </div>
  )

  const tier1Competitors = competitors.filter((c) => c.tier === 'Tier 1')
  const tier2Competitors = competitors.filter((c) => c.tier === 'Tier 2')

  return (
    <div className="space-y-6">
      {/* Report Actions */}
      <div className="flex justify-end items-center gap-2">
        <button
          onClick={() => setShowReport(true)}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
        >
          <Eye className="w-4 h-4" />
          View Report
        </button>
        <button
          onClick={exportToMarkdown}
          className="flex items-center gap-2 px-3 py-1.5 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
        >
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      {/* Competitive Overview */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Competitive Overview"
          subtitle="Your position in Campbell's coffee market"
          icon={BarChart3}
          isExpanded={expandedSections.overview}
          onToggle={() => toggleSection('overview')}
        />

        {expandedSections.overview && (
          <div className="border-t border-border p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-background border border-border h-full overflow-hidden rounded-lg">
                  <MapContainer
                    center={mapCenter}
                    zoom={mapZoom}
                    scrollWheelZoom={false}
                    style={{ height: '100%', width: '100%' }}
                    className="grayscale"
                  >
                    <ChangeView center={mapCenter} zoom={mapZoom} />
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {[ourCafe, ...competitors].map((place) => (
                      <Marker
                        key={place.name}
                        position={[place.lat, place.lng]}
                        icon={getIcon(place.type)}
                      >
                        <Popup>
                          <div className="text-sm">
                            <h4 className="font-bold">{place.name}</h4>
                            {place.rating && (
                              <p className="text-text-secondary">
                                {place.rating}★ • {place.reviewCount} reviews
                              </p>
                            )}
                          </div>
                        </Popup>
                      </Marker>
                    ))}
                  </MapContainer>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-background border border-border p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="bg-primary/10 border border-primary/20 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Coffee className="w-5 h-5 text-primary" />
                        <h5 className="font-bold text-text-primary">
                          Lookout Coffee
                        </h5>
                      </div>
                      <div className="text-sm text-text-secondary space-y-1">
                        <p>
                          SEO Rank: #{ourCafe.seoPerformance.localSearchRank}
                        </p>
                        <p>
                          Keywords: {ourCafe.seoPerformance.organicKeywords}
                        </p>
                        <p>
                          Traffic Value:{' '}
                          {ourCafe.seoPerformance.estimatedTrafficValue}/mo
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h5 className="font-semibold text-text-primary">
                        Key Competitors
                      </h5>
                      {competitors.map((competitor) => (
                        <div
                          key={competitor.name}
                          className="flex items-center justify-between p-3 bg-surface border border-border rounded-lg"
                        >
                          <div>
                            <h6 className="font-medium text-text-primary text-sm">
                              {competitor.name}
                            </h6>
                            <div className="flex items-center gap-2 text-xs text-text-secondary">
                              <span>{competitor.rating}★</span>
                              <span>
                                #{competitor.seoPerformance.localSearchRank}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {React.createElement(
                              getThreatLevelIcon(competitor.threatLevel),
                              {
                                className: `w-4 h-4 ${getThreatLevelColor(competitor.threatLevel)}`,
                              }
                            )}
                            <span
                              className={`text-xs font-medium ${getThreatLevelColor(competitor.threatLevel)}`}
                            >
                              {competitor.threatLevel}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Tier 1 Competitors */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Tier 1 Competitors"
          subtitle="Primary competitive threats requiring immediate attention"
          icon={AlertTriangle}
          isExpanded={expandedSections.tier1}
          onToggle={() => toggleSection('tier1')}
          scope="High Priority"
        />

        {expandedSections.tier1 && (
          <div className="border-t border-border p-6">
            <div className="space-y-6">
              {tier1Competitors.map((competitor) => (
                <div
                  key={competitor.name}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-red-400/10 rounded-lg">
                        {React.createElement(
                          getThreatLevelIcon(competitor.threatLevel),
                          {
                            className: `w-5 h-5 ${getThreatLevelColor(competitor.threatLevel)}`,
                          }
                        )}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {competitor.name}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-text-secondary">
                          <span className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-accent-400" />
                            {competitor.rating}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {competitor.reviewCount} reviews
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {competitor.distance}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(competitor.threatLevel)} bg-current/10`}
                    >
                      {competitor.threatLevel} THREAT
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-text-primary mb-2">
                          Digital Performance
                        </h5>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="bg-surface border border-border p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <Search className="w-4 h-4 text-primary" />
                              <span className="text-xs text-text-secondary">
                                Keywords
                              </span>
                            </div>
                            <p className="text-lg font-bold text-text-primary">
                              {competitor.seoPerformance.organicKeywords}
                            </p>
                          </div>
                          <div className="bg-surface border border-border p-3 rounded-lg">
                            <div className="flex items-center gap-2 mb-1">
                              <DollarSign className="w-4 h-4 text-accent-400" />
                              <span className="text-xs text-text-secondary">
                                Traffic Value
                              </span>
                            </div>
                            <p className="text-lg font-bold text-text-primary">
                              {competitor.seoPerformance.estimatedTrafficValue}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-text-primary mb-2">
                          Key Threat
                        </h5>
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-text-secondary">
                            {competitor.keyThreat}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-semibold text-text-primary mb-2">
                          Opportunity
                        </h5>
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-text-secondary">
                            {competitor.keyOpportunity}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-semibold text-text-primary mb-2">
                          Customer Sentiment
                        </h5>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-green-400 font-medium">
                              Praised for:
                            </span>
                            <p className="text-sm text-text-secondary">
                              {competitor.sentiment.positive.join(', ')}
                            </p>
                          </div>
                          <div>
                            <span className="text-xs text-red-400 font-medium">
                              Criticized for:
                            </span>
                            <p className="text-sm text-text-secondary">
                              {competitor.sentiment.negative.join(', ')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Tier 2 Competitors */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Tier 2 Competitors"
          subtitle="Secondary threats to monitor"
          icon={Target}
          isExpanded={expandedSections.tier2}
          onToggle={() => toggleSection('tier2')}
          scope="Monitor"
        />

        {expandedSections.tier2 && (
          <div className="border-t border-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tier2Competitors.map((competitor) => (
                <div
                  key={competitor.name}
                  className="bg-background border border-border rounded-lg p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-bold text-text-primary">
                        {competitor.name}
                      </h4>
                      <div className="flex items-center gap-3 text-sm text-text-secondary">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-accent-400" />
                          {competitor.rating}
                        </span>
                        <span>{competitor.reviewCount} reviews</span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getThreatLevelColor(competitor.threatLevel)} bg-current/10`}
                    >
                      {competitor.threatLevel}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">
                    {competitor.productFocus}
                  </p>
                  <div className="text-sm">
                    <p className="text-text-secondary mb-1">
                      <strong>Key Threat:</strong> {competitor.keyThreat}
                    </p>
                    <p className="text-text-secondary">
                      <strong>Opportunity:</strong> {competitor.keyOpportunity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* SEO Analysis */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="SEO Performance Analysis"
          subtitle="Digital visibility comparison and opportunities"
          icon={Search}
          isExpanded={expandedSections.seo}
          onToggle={() => toggleSection('seo')}
          scope="Digital"
        />

        {expandedSections.seo && (
          <div className="border-t border-border p-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard
                  title="Lookout Keywords"
                  value={ourCafe.seoPerformance.organicKeywords}
                  icon={Search}
                  subtitle="Ranking keywords"
                />
                <MetricCard
                  title="Traffic Value"
                  value={ourCafe.seoPerformance.estimatedTrafficValue}
                  icon={DollarSign}
                  subtitle="Monthly value"
                />
                <MetricCard
                  title="Local Search Rank"
                  value={`#${ourCafe.seoPerformance.localSearchRank}`}
                  icon={Target}
                  subtitle="Campbell coffee searches"
                />
                <MetricCard
                  title="Brand Strength"
                  value="Strong"
                  icon={Award}
                  subtitle="#1 for 'lookout coffee'"
                />
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  SEO Competitive Landscape
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-text-secondary">
                          Competitor
                        </th>
                        <th className="text-left py-2 text-text-secondary">
                          Keywords
                        </th>
                        <th className="text-left py-2 text-text-secondary">
                          Traffic Value
                        </th>
                        <th className="text-left py-2 text-text-secondary">
                          Local Rank
                        </th>
                        <th className="text-left py-2 text-text-secondary">
                          Advantage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/30 bg-primary/5">
                        <td className="py-3 font-medium text-text-primary">
                          Lookout Coffee
                        </td>
                        <td className="py-3 text-text-secondary">
                          {ourCafe.seoPerformance.organicKeywords}
                        </td>
                        <td className="py-3 text-text-secondary">
                          {ourCafe.seoPerformance.estimatedTrafficValue}
                        </td>
                        <td className="py-3 text-text-secondary">
                          #{ourCafe.seoPerformance.localSearchRank}
                        </td>
                        <td className="py-3 text-primary">Brand searches</td>
                      </tr>
                      {competitors.map((competitor) => (
                        <tr
                          key={competitor.name}
                          className="border-b border-border/30"
                        >
                          <td className="py-3 font-medium text-text-primary">
                            {competitor.name}
                          </td>
                          <td className="py-3 text-text-secondary">
                            {competitor.seoPerformance.organicKeywords}
                          </td>
                          <td className="py-3 text-text-secondary">
                            {competitor.seoPerformance.estimatedTrafficValue}
                          </td>
                          <td className="py-3 text-text-secondary">
                            #{competitor.seoPerformance.localSearchRank}
                          </td>
                          <td className="py-3 text-text-secondary">
                            {competitor.seoPerformance.topRankings}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden">
        <SectionHeader
          title="Strategic Recommendations"
          subtitle="Actionable steps to improve competitive position"
          icon={Zap}
          isExpanded={expandedSections.recommendations}
          onToggle={() => toggleSection('recommendations')}
          scope="Action Plan"
        />

        {expandedSections.recommendations && (
          <div className="border-t border-border p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-400/10 rounded-lg">
                    <Zap className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="font-bold text-text-primary">
                    Immediate (0-3 months)
                  </h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Optimize Google Business Profile with photos and posts
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Launch weekly blog content about coffee education
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Increase social media posting frequency
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Build local citations and directory listings
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-400/10 rounded-lg">
                    <Target className="w-5 h-5 text-accent-400" />
                  </div>
                  <h4 className="font-bold text-text-primary">
                    Medium-term (3-6 months)
                  </h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Add breakfast sandwiches to compete with Living Room
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Implement online ordering system
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Launch customer loyalty program
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-accent-400 mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Host monthly coffee education events
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-text-primary">
                    Long-term (6+ months)
                  </h4>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Consider second location expansion
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Develop signature drink recipes
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Launch mobile app with ordering
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-text-secondary">
                      Explore corporate catering services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Report Modal */}
      {showReport && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-surface border border-border rounded-lg shadow-xl w-full max-w-6xl max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-text-primary">
                  Competitor Intelligence Report
                </h3>
              </div>
              <button
                onClick={() => setShowReport(false)}
                className="p-2 hover:bg-border/50 rounded-md transition-colors"
              >
                <X className="w-5 h-5 text-text-secondary" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap text-text-secondary leading-relaxed">
                  {generateMarkdownReport()}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 p-4 border-t border-border">
              <button
                onClick={() => setShowReport(false)}
                className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary border border-border hover:border-primary/50 rounded-md transition-colors"
              >
                Close
              </button>
              <button
                onClick={exportToMarkdown}
                className="flex items-center gap-2 px-4 py-2 text-sm bg-primary text-on-primary rounded-md hover:opacity-90 transition-opacity"
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

export default CompetitionTab
