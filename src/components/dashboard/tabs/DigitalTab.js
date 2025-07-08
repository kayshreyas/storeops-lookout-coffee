import React, { useState, useEffect } from 'react'
import {
  ThumbsUp,
  ThumbsDown,
  Search,
  MessageSquare,
  TrendingUp,
  Target,
  Star,
  ExternalLink,
  Users,
  BarChart as BarChartIcon,
  ListChecks,
  Award,
  DollarSign,
  ArrowUpRight,
} from 'lucide-react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from 'recharts'
import { digitalPresence, seoAnalysis } from '../data/constants'
import { useTheme } from '../../../hooks/useTheme'

const { score, summary, sentiment, profiles, reviewHighlights } =
  digitalPresence

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface/80 backdrop-blur-sm border border-border p-2 px-3 rounded-md shadow-lg">
        <p className="text-sm text-text-primary">{`${payload[0].name}: ${payload[0].value}%`}</p>
      </div>
    )
  }
  return null
}

const ICONS = {
  'Google Business': <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />,
  Yelp: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />,
  Instagram: <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />,
  Website: <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />,
}

const DigitalTab = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8">
        <div className="xl:col-span-2 space-y-6 sm:space-y-8">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <DigitalScore score={score} />
            <SentimentAnalysis sentiment={sentiment} />
          </section>
          <OnlineProfileAnalysis />
          <SeoAnalysis />
        </div>
        <div className="xl:col-span-1 space-y-6 sm:space-y-8">
          <StrategicSummary summary={summary} />
          <CustomerVoice reviews={reviewHighlights} />
        </div>
      </div>
    </div>
  )
}

const OnlineProfileAnalysis = () => (
  <section>
    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-4">
      Online Profile Analysis
    </h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {profiles.map((p) => (
        <ProfileCard key={p.platform} profile={p} />
      ))}
    </div>
  </section>
)

const ProfileCard = ({ profile }) => (
  <div className="bg-surface border-border p-4 sm:p-5 h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center min-w-0">
        {ICONS[profile.platform]}
        <h4 className="font-semibold text-text-primary ml-2 sm:ml-3 text-sm sm:text-base truncate">
          {profile.platform}
        </h4>
      </div>
      <p className="text-xs font-mono text-text-secondary flex-shrink-0 ml-2">{profile.handle}</p>
    </div>
    <div className="flex-grow space-y-2">
      <div className="text-2xl sm:text-3xl font-bold text-text-primary">
        {profile.metric}
      </div>
      <p className="text-xs sm:text-sm text-text-secondary">{profile.metricLabel}</p>
    </div>
    <div className="mt-4 pt-4 border-t border-border">
      <p className="text-xs text-text-secondary font-semibold mb-1 uppercase tracking-wider">
        Next Step:
      </p>
      <p className="text-xs sm:text-sm text-text-primary">{profile.action}</p>
    </div>
  </div>
)

const DigitalScore = ({ score }) => {
  const { theme } = useTheme()
  const [primaryColor, setPrimaryColor] = useState('#E8B9FF')
  const [secondaryColor, setSecondaryColor] = useState('#A855F7')

  useEffect(() => {
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
    const secondary = theme === 'light' ? '#A855F7' : '#C084FC'
    setPrimaryColor(primary)
    setSecondaryColor(secondary)
  }, [theme])

  const data = [{ value: score }]
  return (
    <div className="bg-surface border border-border p-4 sm:p-6 flex flex-col justify-center items-center">
      <h3 className="font-semibold text-text-primary mb-4 text-sm sm:text-base">
        Digital Health Score
      </h3>
      <div className="relative w-32 h-32 sm:w-40 sm:h-40">
        <ResponsiveContainer>
          <RadialBarChart
            innerRadius="80%"
            outerRadius="100%"
            data={data}
            startAngle={90}
            endAngle={450} // Full circle
            barSize={12}
          >
            <defs>
              <linearGradient
                id="digitalScoreGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={primaryColor} />
                <stop offset="100%" stopColor={secondaryColor} />
              </linearGradient>
            </defs>
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background={{ fill: 'rgba(255, 255, 255, 0.05)' }}
              clockWise
              dataKey="value"
              cornerRadius={6}
              fill="url(#digitalScoreGradient)"
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-3xl sm:text-4xl font-bold text-text-primary">{score}</p>
          <p className="text-xs sm:text-sm text-text-secondary">/ 100</p>
        </div>
      </div>
    </div>
  )
}

const SentimentAnalysis = ({ sentiment }) => {
  const { theme } = useTheme()
  const [positiveColor, setPositiveColor] = useState('#E8B9FF')
  const [neutralColor, setNeutralColor] = useState('#A3A3A3')
  const [negativeColor, setNegativeColor] = useState('#facc15')

  useEffect(() => {
    const positive = getComputedStyle(document.documentElement).getPropertyValue('--color-primary').trim()
    const neutral = getComputedStyle(document.documentElement).getPropertyValue('--color-text-secondary').trim()
    const negative = theme === 'light' ? '#f59e0b' : '#facc15'
    setPositiveColor(positive)
    setNeutralColor(neutral)
    setNegativeColor(negative)
  }, [theme])

  const data = [
    { name: 'Positive', value: sentiment.positive, color: positiveColor },
    { name: 'Neutral', value: sentiment.neutral, color: neutralColor },
    { name: 'Negative', value: sentiment.negative, color: negativeColor },
  ]

  return (
    <div className="bg-surface border border-border p-4 sm:p-6">
      <h3 className="font-semibold text-text-primary mb-4 text-sm sm:text-base">
        Customer Sentiment
      </h3>
      <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto">
        <ResponsiveContainer>
          <PieChart>
            <defs>
              <linearGradient
                id="sentimentPositive"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={positiveColor} />
                <stop offset="100%" stopColor={theme === 'light' ? '#C084FC' : '#A855F7'} />
              </linearGradient>
              <linearGradient id="sentimentNeutral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={neutralColor} />
                <stop offset="100%" stopColor={theme === 'light' ? '#9CA3AF' : '#737373'} />
              </linearGradient>
              <linearGradient
                id="sentimentNegative"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor={negativeColor} />
                <stop offset="100%" stopColor={theme === 'light' ? '#F59E0B' : '#FACC15'} />
              </linearGradient>
            </defs>
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={60}
              paddingAngle={3}
            >
              <Cell fill="url(#sentimentPositive)" strokeWidth={0} />
              <Cell fill="url(#sentimentNeutral)" strokeWidth={0} />
              <Cell fill="url(#sentimentNegative)" strokeWidth={0} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex justify-around text-xs">
        {data.map((entry) => (
          <div key={entry.name} className="text-center">
            <p className="font-bold text-sm sm:text-base" style={{ color: entry.color }}>
              {entry.value}%
            </p>
            <p className="text-text-secondary">{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const SeoAnalysis = () => {
  return (
    <section>
      <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2">
        SEO Performance Analysis
      </h3>
      <p className="text-xs sm:text-sm text-text-secondary mb-4 sm:mb-6">
        A breakdown of your search engine visibility, keyword performance, and
        competitive landscape.
      </p>
      <SeoOverviewMetrics />
      <KeywordAnalysis />
    </section>
  )
}

const SeoOverviewMetrics = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
    <MetricCard
      icon={Search}
      label="Total Keywords"
      value={seoAnalysis.totalKeywords}
      caption="in top 100"
    />
    <MetricCard
      icon={DollarSign}
      label="Est. Traffic Value"
      value={`$${seoAnalysis.trafficValue.toLocaleString()}`}
      caption="per month"
    />
    <MetricCard
      icon={BarChartIcon}
      label="Domain Rank"
      value={seoAnalysis.domainRank}
      caption="out of 100"
    />
    <MetricCard
      icon={Award}
      label="Top 3 Positions"
      value={`${seoAnalysis.rankingDistribution[0].value.toFixed(1)}%`}
      caption="of all keywords"
    />
  </div>
)

const KeywordAnalysis = () => {
  const COLORS = ['#E8B9FF', '#C084FC', '#A855F7', '#737373']

  return (
    <div>
      <h4 className="text-base sm:text-lg font-bold text-text-primary mb-4">
        Ranking Distribution
      </h4>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
        <div className="h-48 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={seoAnalysis.rankingDistribution} layout="vertical">
              <XAxis type="number" hide />
              <YAxis
                dataKey="name"
                type="category"
                tick={{ fill: 'var(--color-text-secondary)', fontSize: 12 }}
                width={60}
              />
              <Tooltip
                cursor={{ fill: 'var(--color-surface)' }}
                content={
                  <CustomTooltip />
                }
              />
              <Bar dataKey="value" barSize={20}>
                {seoAnalysis.rankingDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={0}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="text-xs sm:text-sm">
          <ul className="space-y-2">
            {seoAnalysis.rankingDistribution.map((entry, index) => (
              <li key={`item-${index}`} className="flex items-center">
                <span
                  className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                ></span>
                <span className="text-text-secondary">{entry.name}:</span>
                <span className="text-text-primary font-semibold ml-2">
                  {entry.value.toFixed(1)}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

const StrategicSummary = ({ summary }) => (
  <div className="bg-surface border-border p-4 sm:p-6">
    <h3 className="font-semibold text-text-primary mb-3 text-sm sm:text-base">
      Strategic Summary
    </h3>
    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{summary}</p>
  </div>
)

const MetricCard = ({ icon: Icon, label, value, caption }) => (
  <div className="bg-surface border-border p-3 sm:p-4">
    <div className="flex items-center text-primary mb-2">
      <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
      <h4 className="font-semibold text-text-primary ml-2 text-xs sm:text-sm truncate">{label}</h4>
    </div>
    <p className="text-lg sm:text-2xl font-bold text-text-primary">{value}</p>
    <p className="text-xs text-text-secondary">{caption}</p>
  </div>
)

const CustomerVoice = ({ reviews }) => (
  <div className="bg-surface border-border p-4 sm:p-6">
    <h3 className="font-semibold text-text-primary mb-4 text-sm sm:text-base">
      Customer Voice
    </h3>
    <div className="space-y-3 sm:space-y-4">
      {Object.values(reviews).map((r, i) => (
        <div key={i} className="flex items-start">
          <div className="mr-2 sm:mr-3 mt-1 flex-shrink-0">
            {r.type === 'positive' ? (
              <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            ) : (
              <ThumbsDown className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
            )}
          </div>
          <p className="text-xs sm:text-sm text-text-secondary italic leading-relaxed">"{r.comment}"</p>
        </div>
      ))}
    </div>
  </div>
)

export default DigitalTab
