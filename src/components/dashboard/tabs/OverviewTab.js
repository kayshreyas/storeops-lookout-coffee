import React, { useState } from 'react'
import {
  TrendingUp,
  DollarSign,
  Users,
  Star,
  CheckCircle,
  AlertTriangle,
  BarChart2,
  Download,
  Eye,
  FileText,
  X,
  MapPin,
  Clock,
  Coffee,
  Building,
  Target,
  Wifi,
  Car,
  Heart,
  Award,
  Store,
} from 'lucide-react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts'
import {
  keyMetrics,
  customerSegments,
  overviewData,
  revenueOpportunities,
  digitalPresence,
} from '../data/constants'
import MetricCard from '../shared/MetricCard'
import ActionCard from '../shared/ActionCard'

const OverviewTab = () => {
  const [showReport, setShowReport] = useState(false)

  const exportToMarkdown = () => {
    const markdownContent = generateMarkdownReport()
    const blob = new Blob([markdownContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'lookout-coffee-business-overview.md'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const generateMarkdownReport = () => {
    return `# Lookout Coffee Campbell: Comprehensive Business Overview

## Business Information

**Business Name:** Lookout Coffee  
**Address:** 2135 South Winchester Boulevard, Suite 100, Campbell, CA 95008  
**Hours:** Daily 7:00 AM - 3:30 PM  
**Contact:** Info@lookout.coffee  
**Business Type:** Independent specialty coffee shop and café  
**Established:** Recently opened (appears to be a newer business, mentioned as "brand-new" in reviews)

## Mission & Brand Philosophy

**Official Mission Statement:** *"The mission of Lookout Coffee is to create value in the community through the experience of quality driven coffee service."*

**Brand Philosophy:**
- **"Lookout is a call to be present, to observe and take part in the world around you while drinking great coffee"**
- **Core Values:**
  - High quality, highly consistent coffee experience
  - People-first approach where employees are valued for their strengths
  - Creating community connections beyond just coffee service
  - Treating guests as friends through meaningful hospitality

**Brand Positioning:** Third-wave coffee shop focused on mindfulness, community building, and premium coffee experience

## Location & Facility Analysis

**Strategic Location Benefits:**
- Located on South Winchester Boulevard, a major thoroughfare in Campbell
- Near downtown Campbell (described as "heart of Campbell")
- Close to Pruneyard Shopping Center area
- Across from Rotten Robbie gas station (landmark reference)
- Easy access from VTA bus route 26

**Facility Features:**
- **Spacious interior** with abundant seating options
- **Large windows** providing natural light
- **Green design elements** throughout interior
- **Variety of seating arrangements:** communal tables, individual tables, armchairs, outdoor seating
- **Own parking lot** (though described as often full)
- **Free Wi-Fi** throughout
- **Gender-neutral restrooms**
- **Dog-friendly** environment

## Menu & Product Offerings

### Coffee Offerings
**Specialty Drinks:**
- Ethiopian pour-over varieties (including Wanja, ~$7 per cup)
- Matcha lattes and matcha tonics
- Cortados with expert milk texture
- Espresso tonics with seasonal syrups (blueberry, elderflower)
- Seasonal specialty drinks (Lemongrass latte, Ube latte, Gingersnap latte)
- **In-house syrups** for unique flavor profiles
- **Large selection of loose-leaf teas** (Mi Lan Xiang oolong mentioned)

### Food Menu
**Pastries & Baked Goods:**
- Ham and cheese croissants
- **Goat cheese pretzels** (signature item)
- Everything scones
- Morning buns
- Nutella-filled chocolate chip cookies
- Standard croissant selection

**Light Food Items:**
- **Lookout Sandwich** (signature breakfast sandwich)
- Empanadas
- **Scotch eggs**
- Egg, cheese, and sausage sandwich on buttery croissant

### Sustainability Features
- **Plastic-free packaging**
- **Reusable tableware**
- Focus on sustainable and ethical sourcing

## Ideal Customer Profile (ICP)

### Primary Demographics
**Tech Professionals & Remote Workers (40%)**
- Age: 25-45
- Income: $100,000-$200,000+
- Work flexible schedules, value quality workspace
- Laptop-friendly environment seekers

**Young Professionals & Students (25%)**
- Age: 18-35
- College students and early-career professionals
- Social media active, value Instagram-worthy experiences
- Budget-conscious but willing to pay for quality

**Community-Minded Locals (20%)**
- Age: 30-65
- Families and long-term Campbell residents
- Value community connection and local businesses
- Weekend hangout seekers

**Coffee Enthusiasts (15%)**
- Age: 25-55
- High disposable income, coffee connoisseurs
- Appreciate specialty brewing methods and origin stories
- Willing to pay premium for quality ($6-8 per drink)

### Psychographic Profiles
- **Values:** Sustainability, community, authenticity, quality over convenience
- **Lifestyle:** Health-conscious, environmentally aware, social
- **Behaviors:** Work remotely, frequent coffee shops, active on social media
- **Pain Points:** Need quality workspace, desire community connection, want sustainable options

## Local Total Addressable Market (TAM)

### Market Size Analysis

**Campbell Demographics (2024):**
- **Population:** ~42,800
- **Median Household Income:** $147,128 (significantly above national average)
- **Median Property Value:** $1.55M
- **Education:** Highly educated population (tech hub)
- **Age Distribution:** 32.6% aged 25-44 (prime coffee demographic)

**Coffee Market Opportunity:**
- **Local Coffee Market Size:** Estimated $8-12M annually
- **Specialty Coffee Segment:** Growing at 12.5% CAGR
- **Average Customer Spend:** $15-25 per visit
- **Visit Frequency:** 2-4 times per week for regular customers

**Serviceable Addressable Market:**
- **Primary Trade Area:** 3-mile radius (~15,000 people)
- **Secondary Market:** Campbell + Los Gatos + Saratoga areas
- **Target Market Size:** ~8,000 potential regular customers
- **Revenue Potential:** $2-4M annually at full capacity

### Market Drivers
- **High disposable income** in Campbell area
- **Tech industry presence** driving remote work culture
- **Premium lifestyle expectations** of local residents
- **Limited competition** in immediate vicinity
- **Growing specialty coffee trend** in Bay Area

## SWOT Analysis

### Strengths
1. **Premium Location:** High-traffic Winchester Boulevard with own parking
2. **Spacious Facility:** Large, comfortable space differentiating from cramped competitors
3. **Quality Focus:** High-quality coffee with in-house syrups and specialty offerings
4. **Community Mission:** Strong brand values aligned with local demographics
5. **Customer Service:** Consistently praised friendly, knowledgeable staff
6. **Sustainability:** Eco-friendly practices appeal to environmentally conscious customers
7. **Unique Offerings:** Goat cheese pretzels, specialty teas, seasonal drinks
8. **Work-Friendly Environment:** Excellent for remote workers and students

### Weaknesses
1. **Limited Operating Hours:** 7 AM - 3:30 PM misses evening social crowd
2. **Parking Challenges:** Often full parking lot, limited street parking
3. **Seating Availability:** Despite space, gets crowded during peak times
4. **Limited Food Menu:** Mainly pastries and light items, no substantial meals
5. **New Business:** Still building brand recognition and loyal customer base
6. **Price Point:** Premium pricing may limit some customer segments
7. **No Evening Revenue:** Missing dinner/evening social opportunities

### Opportunities
1. **Extended Hours:** Evening operations could capture social/study crowd
2. **Expanded Food Menu:** Lunch items, healthier options, more substantial meals
3. **Corporate Catering:** Tech companies in area need meeting catering
4. **Event Hosting:** Space suitable for community events, coffee education
5. **Retail Expansion:** Coffee bean sales, brewing equipment, merchandise
6. **Loyalty Program:** Retain high-value tech worker customers
7. **Partnerships:** Local businesses, tech companies, coworking spaces
8. **Seasonal Outdoor Seating:** Expand capacity during good weather
9. **Mobile Ordering:** Tech-savvy customer base would appreciate app
10. **Subscription Services:** Coffee delivery for remote workers

### Threats
1. **Intense Competition:** Starbucks, Philz, Barefoot Coffee, and other established chains
2. **Economic Downturn:** High prices vulnerable during economic stress
3. **Rising Costs:** Rent, labor, and coffee bean costs in expensive Bay Area
4. **Chain Expansion:** New corporate coffee shops entering market
5. **Changing Work Patterns:** Shift away from remote work could reduce demand
6. **Supply Chain Issues:** Coffee sourcing disruptions affect premium positioning
7. **Parking Regulations:** Potential changes to parking availability
8. **Neighborhood Changes:** Development could alter customer demographics
9. **Seasonal Fluctuations:** Student population changes affect demand
10. **Technology Disruption:** Automated coffee solutions or changing consumer preferences

Generated on ${new Date().toLocaleDateString()}`
  }

  return (
    <div>
      <div className="bg-surface border border-border p-8 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Business Info */}
          <div className="md:col-span-2">
            <p className="font-mono text-xs text-text-secondary tracking-widest uppercase">
              Business Opportunity Summary
            </p>
            <p className="mt-2 text-text-primary max-w-xl text-base">
              {digitalPresence.summary}
            </p>
          </div>

          {/* Right Column: Business Location Map */}
          <div className="bg-background border border-border overflow-hidden rounded-md">
            <iframe
              title="Lookout Cafe Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25386.42621748232!2d-121.9554948!3d37.28721955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e34d839397919%3A0x5586bf1a3e1161e1!2sCampbell%2C%20CA%2C%20USA!5e0!3m2!1sen!2us!4v1628886348181!5m2!1sen!2us"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="grayscale"
            ></iframe>
          </div>
        </div>
      </div>
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

        <div className="space-y-8">
          {/* Section 1: Business Overview */}
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Business Overview
            </h3>

            {/* Business Basics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-text-primary">Location</h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">
                  2135 South Winchester Blvd
                </p>
                <p className="text-sm text-text-secondary">
                  Campbell, CA 95008
                </p>
              </div>

              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-text-primary">Hours</h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">Daily</p>
                <p className="text-sm text-text-secondary">7:00 AM - 3:30 PM</p>
              </div>

              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-text-primary">
                    Business Type
                  </h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">
                  Independent specialty
                </p>
                <p className="text-sm text-text-secondary">
                  coffee shop & café
                </p>
              </div>

              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-text-primary">Status</h4>
                </div>
                <p className="text-sm text-text-secondary mb-1">
                  Recently opened
                </p>
                <p className="text-sm text-text-secondary">
                  Building reputation
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-surface border border-border p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-primary" />
                <h4 className="text-lg font-semibold text-text-primary">
                  Mission & Brand Philosophy
                </h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-text-primary mb-2">
                    Official Mission Statement
                  </h5>
                  <p className="text-text-secondary italic">
                    "The mission of Lookout Coffee is to create value in the
                    community through the experience of quality driven coffee
                    service."
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-text-primary mb-2">
                    Brand Philosophy
                  </h5>
                  <p className="text-text-secondary mb-3">
                    "Lookout is a call to be present, to observe and take part
                    in the world around you while drinking great coffee"
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          High quality, highly consistent coffee experience
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          People-first approach valuing employee strengths
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          Creating community connections beyond coffee
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5" />
                        <span className="text-sm text-text-secondary">
                          Treating guests as friends through hospitality
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Facility & Offerings */}
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Facility & Offerings
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Facility Features */}
              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Facility Features
                  </h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">
                      Spacious interior with abundant seating options
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">
                      Large windows providing natural light
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">
                      Green design elements throughout
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-text-secondary">
                      Variety of seating: communal tables, individual tables,
                      armchairs
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-4 h-4 text-primary" />
                    <span className="text-sm text-text-secondary">
                      Own parking lot (though often full)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="w-4 h-4 text-primary" />
                    <span className="text-sm text-text-secondary">
                      Free Wi-Fi throughout
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-4 h-4 text-primary" />
                    <span className="text-sm text-text-secondary">
                      Dog-friendly environment
                    </span>
                  </div>
                </div>
              </div>

              {/* Menu Highlights */}
              <div className="bg-surface border border-border p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Coffee className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Menu Highlights
                  </h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Signature Drinks
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          Ethiopian pour-over varieties (Wanja ~$7)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          Matcha lattes and matcha tonics
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          Espresso tonics with seasonal syrups
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Signature Food Items
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          <strong>Goat cheese pretzels</strong> (signature item)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          <strong>Lookout Sandwich</strong> (signature
                          breakfast)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-text-secondary">
                          Scotch eggs and empanadas
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2">
                      Sustainability
                    </h5>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-text-secondary">
                          Plastic-free packaging
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-text-secondary">
                          Reusable tableware
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Customer Demographics */}
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Customer Demographics
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Customer Segments Chart */}
              <div className="bg-surface border border-border p-6 rounded-lg">
                <CustomerSegmentChart />
              </div>

              {/* Customer Profiles */}
              <div className="bg-surface border border-border p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-text-primary mb-4">
                  Customer Profiles
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h5 className="font-medium text-text-primary">
                      Tech Professionals (40%)
                    </h5>
                    <p className="text-sm text-text-secondary">
                      Ages 25-45, $100K-$200K+ income, need workspace
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/70 pl-4">
                    <h5 className="font-medium text-text-primary">
                      Young Professionals (25%)
                    </h5>
                    <p className="text-sm text-text-secondary">
                      Ages 18-35, social media active, budget-conscious
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/50 pl-4">
                    <h5 className="font-medium text-text-primary">
                      Community Locals (20%)
                    </h5>
                    <p className="text-sm text-text-secondary">
                      Ages 30-65, families, value local businesses
                    </p>
                  </div>
                  <div className="border-l-4 border-primary/30 pl-4">
                    <h5 className="font-medium text-text-primary">
                      Coffee Enthusiasts (15%)
                    </h5>
                    <p className="text-sm text-text-secondary">
                      Ages 25-55, connoisseurs, pay premium $6-8
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Market Position */}
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-6">
              Market Position
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              <MetricCard
                title="Campbell Population"
                value="42,800"
                icon={Users}
                subtitle="Local market size"
              />
              <MetricCard
                title="Median Income"
                value="$147K"
                icon={DollarSign}
                subtitle="3x national average"
              />
              <MetricCard
                title="Market Size"
                value="$8-12M"
                icon={TrendingUp}
                subtitle="Annual coffee market"
              />
              <MetricCard
                title="Revenue Potential"
                value="$2-4M"
                icon={Target}
                subtitle="Full capacity annually"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-surface border border-border p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3 text-primary" />
                  Key Competitive Advantages
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Premium Location
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Winchester Boulevard with own parking
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Spacious Environment
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Unlike cramped competitors, offers variety of seating
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Quality Focus
                      </h5>
                      <p className="text-sm text-text-secondary">
                        In-house syrups, specialty offerings, sustainable
                        practices
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Community Mission
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Values aligned with local demographics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface border border-border p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-3 text-accent-400" />
                  Growth Opportunities
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Extended Hours
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Evening operations for social/study crowd
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Corporate Catering
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Serve nearby tech companies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Mobile Ordering
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Tech-savvy customer base ready for app
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mt-2"></div>
                    <div>
                      <h5 className="font-medium text-text-primary">
                        Loyalty Program
                      </h5>
                      <p className="text-sm text-text-secondary">
                        Retain high-value customers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Report Modal */}
        {showReport && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-surface border border-border rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Business Overview Report
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
    </div>
  )
}

const CustomerSegmentChart = () => {
  const data = customerSegments.map((s) => ({
    name: s.segment,
    value: parseInt(s.avgSpend.replace('$', '')),
  }))

  return (
    <div>
      <div className="flex items-center mb-4">
        <BarChart2 className="h-5 w-5 mr-3 text-text-secondary" />
        <h4 className="text-base font-semibold text-text-primary">
          Average Spend per Customer Segment
        </h4>
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 20, right: 0, left: -25, bottom: 5 }}
            barGap={8}
          >
            <XAxis
              dataKey="name"
              stroke="var(--color-text-secondary)"
              fontSize="0.75rem"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="var(--color-text-secondary)"
              fontSize="0.75rem"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              cursor={{ fill: 'rgba(232, 185, 255, 0.1)' }}
              contentStyle={{
                background: 'var(--color-background)',
                borderColor: 'var(--color-border)',
              }}
              labelStyle={{
                color: 'var(--color-text-primary)',
                fontWeight: '600',
              }}
              itemStyle={{ color: 'var(--color-text-secondary)' }}
            />
            <Bar dataKey="value" barSize={12} radius={[0, 0, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill="var(--color-primary)" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default OverviewTab
