import React, { useState } from 'react'
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
  BarChart,
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
} from 'recharts'
import { digitalPresence, seoAnalysis } from '../data/constants'

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
  'Google Business': <Star className="w-5 h-5 text-yellow-400" />,
  Yelp: <MessageSquare className="w-5 h-5 text-red-500" />,
  Instagram: <TrendingUp className="w-5 h-5 text-pink-500" />,
  Website: <ExternalLink className="w-5 h-5 text-sky-400" />,
}

const DigitalTab = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DigitalScore score={score} />
            <SentimentAnalysis sentiment={sentiment} />
          </section>
          <OnlineProfileAnalysis />
          <SeoAnalysis />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <StrategicSummary summary={summary} />
          <CustomerVoice reviews={reviewHighlights} />
        </div>
      </div>
    </div>
  )
}

const OnlineProfileAnalysis = () => (
  <section>
    <h3 className="text-xl font-bold text-text-primary mb-4">
      Online Profile Analysis
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {profiles.map((p) => (
        <ProfileCard key={p.platform} profile={p} />
      ))}
    </div>
  </section>
)

const ProfileCard = ({ profile }) => (
  <div className="bg-surface border-border p-5 h-full flex flex-col">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        {ICONS[profile.platform]}
        <h4 className="font-semibold text-text-primary ml-3 text-base">
          {profile.platform}
        </h4>
      </div>
      <p className="text-xs font-mono text-text-secondary">{profile.handle}</p>
    </div>
    <div className="flex-grow space-y-2">
      <div className="text-3xl font-bold text-text-primary">
        {profile.metric}
      </div>
      <p className="text-sm text-text-secondary">{profile.metricLabel}</p>
    </div>
    <div className="mt-4 pt-4 border-t border-border">
      <p className="text-xs text-text-secondary font-semibold mb-1 uppercase tracking-wider">
        Next Step:
      </p>
      <p className="text-sm text-text-primary">{profile.action}</p>
    </div>
  </div>
)

const DigitalScore = ({ score }) => {
  const data = [{ value: score }]
  return (
    <div className="bg-surface border border-border p-6 flex flex-col justify-center items-center">
      <h3 className="font-semibold text-text-primary mb-4 text-base">
        Digital Health Score
      </h3>
      <div className="relative w-40 h-40">
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
                <stop offset="0%" stopColor="#E8B9FF" />
                <stop offset="100%" stopColor="#A855F7" />
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
          <p className="text-4xl font-bold text-text-primary">{score}</p>
          <p className="text-sm text-text-secondary">/ 100</p>
        </div>
      </div>
    </div>
  )
}

const SentimentAnalysis = ({ sentiment }) => {
  const data = [
    { name: 'Positive', value: sentiment.positive, color: '#E8B9FF' },
    { name: 'Neutral', value: sentiment.neutral, color: '#A3A3A3' },
    { name: 'Negative', value: sentiment.negative, color: '#facc15' },
  ]

  return (
    <div className="bg-surface border border-border p-6">
      <h3 className="font-semibold text-text-primary mb-4 text-base">
        Customer Sentiment
      </h3>
      <div className="w-40 h-40 mx-auto">
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
                <stop offset="0%" stopColor="#E8B9FF" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
              <linearGradient id="sentimentNeutral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#A3A3A3" />
                <stop offset="100%" stopColor="#737373" />
              </linearGradient>
              <linearGradient
                id="sentimentNegative"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="100%" stopColor="#FACC15" />
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
            <p className="font-bold text-base" style={{ color: entry.color }}>
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
      <h3 className="text-xl font-bold text-text-primary mb-2">
        SEO Performance Analysis
      </h3>
      <p className="text-sm text-text-secondary mb-6">
        A breakdown of your search engine visibility, keyword performance, and
        competitive landscape.
      </p>
      <SeoOverviewMetrics />
      <KeywordAnalysis />
    </section>
  )
}

const SeoOverviewMetrics = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <MetricCard
      icon={<Search className="w-6 h-6 text-primary" />}
      label="Keywords Ranking"
      value={seoAnalysis.totalKeywords}
      caption="in top 100 results"
    />
    <MetricCard
      icon={<DollarSign className="w-6 h-6 text-primary" />}
      label="Est. Traffic Value"
      value={`$${seoAnalysis.trafficValue.toLocaleString()}`}
      caption="monthly organic value"
    />
    <MetricCard
      icon={<Award className="w-6 h-6 text-primary" />}
      label="Domain Rank"
      value={seoAnalysis.domainRank}
      caption="out of 100 (strong)"
    />
  </div>
)

const KeywordAnalysis = () => {
  const COLORS = ['#E8B9FF', '#C084FC', '#A855F7', '#737373']

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-2 bg-surface border-border p-6">
        <h4 className="font-semibold text-text-primary mb-1 flex items-center text-base">
          Ranking Distribution
        </h4>
        <p className="text-xs text-text-secondary mb-4">
          Where your keywords land in search results.
        </p>
        <div className="w-40 h-40 mx-auto">
          <ResponsiveContainer>
            <PieChart>
              <Tooltip content={<CustomTooltip />} cursor={false} />
              <Pie
                data={seoAnalysis.rankingDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={60}
                paddingAngle={3}
              >
                {seoAnalysis.rankingDistribution.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    strokeWidth={0}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
          {seoAnalysis.rankingDistribution.map((entry, index) => (
            <div key={entry.name} className="flex items-center">
              <span
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              ></span>
              <span className="text-text-secondary">{entry.name}:</span>
              <span className="font-semibold text-text-primary ml-auto">
                {entry.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-3 bg-surface border-border p-6">
        <h4 className="font-semibold text-text-primary mb-1 flex items-center text-base">
          Top Performing Keywords
        </h4>
        <p className="text-xs text-text-secondary mb-4">
          The search terms driving the most value for your business.
        </p>
        <ul className="space-y-3 text-sm">
          {seoAnalysis.topKeywords.map((kw) => (
            <li
              key={kw.keyword}
              className="flex justify-between items-center border-b border-border/50 pb-3"
            >
              <div>
                <span className="text-text-primary font-medium">
                  {kw.keyword}
                </span>
                <div className="flex items-center text-xs text-text-secondary mt-1">
                  <span>Vol: {kw.volume}</span>
                  {kw.growth && (
                    <>
                      <span className="mx-2">|</span>
                      <span className="flex items-center text-primary/80 font-medium">
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                        {kw.growth}% YoY
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-primary text-base">
                  #{kw.position}
                </p>
                <p
                  className={`text-xs font-semibold ${
                    kw.type === 'Brand' ? 'text-primary/70' : 'text-sky-400/70'
                  }`}
                >
                  {kw.type}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const StrategicSummary = ({ summary }) => (
  <div className="bg-surface border-border p-6 flex flex-col justify-center items-center text-center">
    <Target className="w-10 h-10 text-primary mb-4" />
    <h3 className="font-semibold text-text-primary mb-2 text-base">
      Key Takeaway
    </h3>
    <p className="text-sm text-text-secondary leading-relaxed">{summary}</p>
  </div>
)

const MetricCard = ({ icon, label, value, caption }) => (
  <div className="bg-surface border-border p-4 flex items-center">
    <div className="mr-4">{icon}</div>
    <div>
      <p className="text-sm text-text-secondary">{label}</p>
      <p className="text-2xl font-bold text-text-primary">{value}</p>
      {caption && <p className="text-xs text-text-secondary">{caption}</p>}
    </div>
  </div>
)

const CustomerVoice = ({ reviews }) => (
  <div className="bg-surface border-border p-6">
    <h3 className="font-semibold text-text-primary mb-4 text-base">
      From Your Customers
    </h3>
    <div className="space-y-4">
      <div>
        <div className="flex items-center mb-2">
          <ThumbsUp className="h-5 w-5 text-primary mr-3" />
          <h4 className="font-medium text-text-secondary text-sm uppercase tracking-wider">
            Positive Feedback
          </h4>
        </div>
        <p className="text-sm text-text-primary bg-primary/5 p-3 border border-primary/20">
          "{reviews.positive}"
        </p>
      </div>
      <div>
        <div className="flex items-center mb-2">
          <ThumbsDown className="h-5 w-5 text-yellow-400 mr-3" />
          <h4 className="font-medium text-text-secondary text-sm uppercase tracking-wider">
            Constructive Criticism
          </h4>
        </div>
        <p className="text-sm text-text-primary bg-yellow-400/5 p-3 border border-yellow-400/20">
          "{reviews.negative}"
        </p>
      </div>
    </div>
  </div>
)

export default DigitalTab
