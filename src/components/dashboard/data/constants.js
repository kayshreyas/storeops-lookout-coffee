// Centralized data constants for consistency
export const DATA_CONSTANTS = {
  MARKET_SIZE: '$74.3B',
  MARKET_GROWTH: '6.9%',
  MEDIAN_INCOME: '$147,128',
  SPECIALTY_ADOPTION: '45%',
  CAMPBELL_POPULATION: '42,848',
  EDUCATION_LEVEL: '59.5%',
  COST_OF_LIVING_INDEX: 159.5,
  AVG_TRANSACTION: '$11.11',
  DAILY_REVENUE_TARGET: '$1,458',
  TARGET_GROSS_MARGIN: '60%',
  TARGET_EBITDA: '22%',
  BREAK_EVEN_MONTHS: '8-10',
  TOTAL_INVESTMENT: '$55,000',
  PROJECTED_ROI: '235%',
  PAYBACK_PERIOD: '16 months',
}

// Key metrics data with consistent calculations
export const keyMetrics = {
  marketSize: DATA_CONSTANTS.MARKET_SIZE,
  growth: DATA_CONSTANTS.MARKET_GROWTH,
  medianIncome: DATA_CONSTANTS.MEDIAN_INCOME,
  specialtyGrowth: DATA_CONSTANTS.SPECIALTY_ADOPTION,
  competitorCount: 8,
  opportunityScore: 8.7,
  campbellPopulation: DATA_CONSTANTS.CAMPBELL_POPULATION,
  educationLevel: DATA_CONSTANTS.EDUCATION_LEVEL,
  costOfLiving: DATA_CONSTANTS.COST_OF_LIVING_INDEX,
  averageTransaction: DATA_CONSTANTS.AVG_TRANSACTION,
  dailyRevenue: DATA_CONSTANTS.DAILY_REVENUE_TARGET,
  industryEBITDA: '15%',
  targetMargin: DATA_CONSTANTS.TARGET_GROSS_MARGIN,
}

// Target customer segments for better UX understanding
export const customerSegments = [
  {
    segment: 'Tech Professionals',
    size: '35%',
    avgSpend: '$15.50',
    frequency: 'Daily',
    characteristics:
      'Remote workers, premium quality focus, mobile ordering preference',
    priority: 'Primary',
  },
  {
    segment: 'Local Families',
    size: '28%',
    avgSpend: '$8.75',
    frequency: 'Weekend',
    characteristics: 'Community-focused, value experience, weekend gatherings',
    priority: 'Primary',
  },
  {
    segment: 'Business Professionals',
    size: '22%',
    avgSpend: '$12.25',
    frequency: '3x/week',
    characteristics: 'Meeting spaces, catering needs, networking events',
    priority: 'High Value',
  },
  {
    segment: 'Students & Seniors',
    size: '15%',
    avgSpend: '$6.50',
    frequency: 'Variable',
    characteristics: 'Price-conscious, community spaces, longer visits',
    priority: 'Community',
  },
]

// Revenue projection data with clearer assumptions
export const revenueProjections = [
  {
    month: 'Jan',
    baseline: 22000,
    optimized: 28000,
    target: 35000,
    assumptions: 'Winter baseline',
  },
  {
    month: 'Feb',
    baseline: 24000,
    optimized: 32000,
    target: 38000,
    assumptions: 'Valentine promotions',
  },
  {
    month: 'Mar',
    baseline: 26000,
    optimized: 35000,
    target: 42000,
    assumptions: 'Spring uptick',
  },
  {
    month: 'Apr',
    baseline: 28000,
    optimized: 38000,
    target: 45000,
    assumptions: 'Event space launch',
  },
  {
    month: 'May',
    baseline: 30000,
    optimized: 42000,
    target: 48000,
    assumptions: 'Catering program',
  },
  {
    month: 'Jun',
    baseline: 32000,
    optimized: 45000,
    target: 52000,
    assumptions: 'Digital ordering launch',
  },
  {
    month: 'Jul',
    baseline: 34000,
    optimized: 48000,
    target: 55000,
    assumptions: 'Delivery platform integration',
  },
  {
    month: 'Aug',
    baseline: 36000,
    optimized: 50000,
    target: 58000,
    assumptions: 'Enhanced local SEO visibility',
  },
  {
    month: 'Sep',
    baseline: 35000,
    optimized: 52000,
    target: 60000,
    assumptions: 'Full digital transformation',
  },
  {
    month: 'Oct',
    baseline: 33000,
    optimized: 54000,
    target: 62000,
    assumptions: 'Fall community events',
  },
  {
    month: 'Nov',
    baseline: 31000,
    optimized: 56000,
    target: 65000,
    assumptions: 'Holiday catering',
  },
  {
    month: 'Dec',
    baseline: 38000,
    optimized: 60000,
    target: 70000,
    assumptions: 'Holiday peak + events',
  },
]

export const ourCafe = {
  name: 'Lookout Coffee',
  lat: 37.2799,
  lng: -121.9499,
  type: 'us',
  location: '2135 S Winchester Blvd Unit 100, Campbell, CA 95008',
  hours: '7:00 AM - 3:30 PM (7 days/week)',
  established: '2024',
  positioning:
    'A call to be present, to observe and take part in the world around you while drinking great coffee',
  seoPerformance: {
    organicKeywords: '39',
    estimatedTrafficValue: '$1,807',
    topRankings:
      "#1 for 'lookout coffee', #6-10 for Campbell coffee shop terms",
    localSearchRank: 5,
  },
  strengths: [
    'Modern, spacious interior with community focus',
    'Consistent 4.8-5.0 star ratings across platforms',
    'Strong brand identity and mission',
    'Quality coffee and customer service reputation',
    'Good parking availability',
  ],
  challenges: [
    'Limited food menu compared to competitors',
    'Newer brand with less local recognition',
    'Weaker SEO performance for broader geographic terms',
    'Limited social media presence',
  ],
  menu: [
    { item: 'Espresso', price: 3.25 },
    { item: 'Latte', price: 4.5 },
    { item: 'Drip Coffee', price: 3.0 },
    { item: 'Cold Brew', price: 5.0 },
    { item: 'Croissant', price: 3.75 },
    { item: 'Avocado Toast', price: 8.5 },
  ],
}

export const competitors = [
  {
    name: 'Orchard Valley Coffee',
    type: 'competitor',
    rating: '4.9',
    pricing: '$$$',
    reviewCount: 1200,
    tier: 'Tier 1',
    threatLevel: 'HIGH',
    customerProfile:
      'Local community, live music lovers, artisan coffee enthusiasts',
    productFocus: 'In-house roasted beans, live music events, community hub',
    keyThreat:
      'Market leader in local search, dominates downtown location with strong community presence.',
    keyOpportunity:
      'Limited seating capacity during peak hours, no drive-thru option.',
    lat: 37.2871,
    lng: -121.9499,
    distance: '1.2 mi',
    seoPerformance: {
      organicKeywords: 'N/A',
      estimatedTrafficValue: '$554',
      topRankings: '#1-2 for Campbell coffee searches',
      localSearchRank: 1,
    },
    digitalPresence: {
      website: 'Limited online presence',
      onlineOrdering: 'No',
      socialMedia: 'Active but basic',
    },
    menu: [
      { item: 'Espresso', price: 3.5 },
      { item: 'Latte', price: 5.0 },
      { item: 'Pour Over', price: 6.0 },
      { item: 'Cold Brew', price: 4.75 },
      { item: 'Pastries', price: 3.5 },
    ],
    promotions: [
      'Live music every Friday and Saturday night',
      'Monthly coffee cupping events',
      'Local artist showcase monthly',
    ],
    sentiment: {
      positive: [
        'Amazing coffee',
        'Great atmosphere',
        'Live music',
        'Community feel',
      ],
      negative: ['Limited seating', 'Can get crowded', 'Inconsistent hours'],
    },
  },
  {
    name: 'Living Room Coffee Craft',
    type: 'competitor',
    rating: '4.7',
    pricing: '$$',
    reviewCount: 850,
    tier: 'Tier 1',
    threatLevel: 'HIGH',
    customerProfile: 'Socially conscious consumers, remote workers, families',
    productFocus: 'Non-profit social impact, craft coffee, house-made pastries',
    keyThreat:
      'Rapid growth trajectory since 2019, strong community engagement through non-profit model.',
    keyOpportunity:
      'Higher pricing due to social mission - room for competitive pricing strategy.',
    lat: 37.2799,
    lng: -121.9665,
    distance: '0.8 mi',
    seoPerformance: {
      organicKeywords: '51',
      estimatedTrafficValue: '$2,761',
      topRankings: '#4-12 for local searches',
      localSearchRank: 3,
    },
    digitalPresence: {
      website: 'Professional with mission focus',
      onlineOrdering: 'Basic',
      socialMedia: 'Strong community engagement',
    },
    menu: [
      { item: 'Signature Blend', price: 4.25 },
      { item: 'Seasonal Latte', price: 4.75 },
      { item: 'House Pastries', price: 3.25 },
      { item: 'Breakfast Sandwiches', price: 7.5 },
    ],
    promotions: [
      'Monthly community impact events',
      'Seasonal specialty drink releases',
      'Local partnership discounts',
    ],
    sentiment: {
      positive: [
        'Great mission',
        'Quality coffee',
        'Community events',
        'Spacious seating',
      ],
      negative: ['Can be pricey', 'Limited parking', 'Inconsistent service'],
    },
  },
  {
    name: 'Barefoot Coffee Campbell',
    type: 'competitor',
    rating: '4.6',
    pricing: '$$$',
    reviewCount: 1500,
    tier: 'Tier 1',
    threatLevel: 'MODERATE',
    customerProfile:
      'Coffee aficionados, established customers, quality-focused consumers',
    productFocus:
      'Award-winning coffee, established brand, e-commerce presence',
    keyThreat:
      'Highest SEO performance, established chain with strong brand recognition since 2003.',
    keyOpportunity:
      'Different customer segment, older demographics, less focus on modern amenities.',
    lat: 37.2799,
    lng: -121.9294,
    distance: '1.5 mi',
    seoPerformance: {
      organicKeywords: '405',
      estimatedTrafficValue: '$3,908',
      topRankings: '#3-5 for local searches',
      localSearchRank: 2,
    },
    digitalPresence: {
      website: 'Shopify e-commerce platform',
      onlineOrdering: 'Yes - full e-commerce',
      socialMedia: 'Professional brand presence',
    },
    menu: [
      { item: 'Signature Espresso', price: 3.75 },
      { item: 'Single Origin Pour Over', price: 6.5 },
      { item: 'Specialty Latte', price: 5.5 },
      { item: 'Coffee Beans (12oz)', price: 22.0 },
    ],
    promotions: [
      'Monthly coffee education workshops',
      'Bean subscription service',
      'Loyalty rewards program',
    ],
    sentiment: {
      positive: [
        'Exceptional coffee quality',
        'Knowledgeable staff',
        'Award-winning beans',
      ],
      negative: ['Expensive', 'Limited atmosphere', 'Less community focus'],
    },
  },
  {
    name: 'Philz Coffee',
    type: 'competitor',
    rating: '4.4',
    pricing: '$$',
    reviewCount: 950,
    tier: 'Tier 2',
    threatLevel: 'MODERATE',
    customerProfile:
      'Chain customers, custom blend enthusiasts, younger demographics',
    productFocus:
      'Custom blended drinks, unique ordering experience, chain efficiency',
    keyThreat: 'Established chain presence with unique custom blend concept.',
    keyOpportunity:
      'Chain atmosphere lacks local community feel, standardized experience.',
    lat: 37.2871,
    lng: -121.938,
    distance: '1.8 mi',
    seoPerformance: {
      organicKeywords: 'N/A',
      estimatedTrafficValue: 'N/A',
      topRankings: 'Chain SEO advantage',
      localSearchRank: 4,
    },
    digitalPresence: {
      website: 'Corporate chain website',
      onlineOrdering: 'Yes - mobile app',
      socialMedia: 'Corporate managed',
    },
    menu: [
      { item: 'Custom Blend', price: 4.5 },
      { item: 'Iced Coffee', price: 4.0 },
      { item: 'Pastries', price: 3.0 },
    ],
    promotions: ['New customer free drink', 'Mobile app loyalty program'],
    sentiment: {
      positive: ['Unique blends', 'Personalized service', 'Consistent quality'],
      negative: ['Takes time', 'Can be overwhelming', 'Chain feel'],
    },
  },
  {
    name: 'MIKO Coffee by Post',
    type: 'competitor',
    rating: '4.5',
    pricing: '$$',
    reviewCount: 320,
    tier: 'Tier 2',
    threatLevel: 'LOW',
    customerProfile:
      'Plant enthusiasts, unique experience seekers, Instagram users',
    productFocus: 'Mobile coffee + plant shop concept, Instagram-friendly',
    keyThreat: 'Unique mobile concept attracts social media attention.',
    keyOpportunity:
      'Limited by mobile format, not a traditional coffee shop experience.',
    lat: 37.2799,
    lng: -121.9499,
    distance: 'Variable',
    seoPerformance: {
      organicKeywords: 'Limited',
      estimatedTrafficValue: 'Low',
      topRankings: 'Niche searches only',
      localSearchRank: 8,
    },
    digitalPresence: {
      website: 'Social media focused',
      onlineOrdering: 'No',
      socialMedia: 'Instagram-centric',
    },
    menu: [
      { item: 'Mobile Espresso', price: 4.0 },
      { item: 'Iced Drinks', price: 4.5 },
      { item: 'Plant Sales', price: 15.0 },
    ],
    promotions: ['Instagram photo discount', 'Plant + coffee bundles'],
    sentiment: {
      positive: ['Unique concept', 'Great for events', 'Instagram worthy'],
      negative: ['Limited menu', 'Not always available', 'Weather dependent'],
    },
  },
]

export const digitalPresence = {
  score: 88,
  summary:
    "Campbell's growing demographic of young professionals and families presents a key opportunity. By enhancing local SEO and introducing online ordering, Lookout Cafe can capture a larger share of the daily coffee market and increase average customer value.",
  sentiment: {
    positive: 72,
    neutral: 18,
    negative: 10,
    trend: 'up',
  },
  profiles: [
    {
      platform: 'Google Business',
      handle: 'Lookout Cafe',
      metric: '4.8 Stars',
      metricLabel: 'from 250+ reviews',
      completeness: 90,
      action: 'Respond to reviews faster and utilize Google Posts.',
    },
    {
      platform: 'Yelp',
      handle: 'Lookout Cafe',
      metric: '4.5 Stars',
      metricLabel: 'from 180+ reviews',
      completeness: 80,
      action: 'Claim special offers and improve review response rate.',
    },
    {
      platform: 'Instagram',
      handle: '@lookoutcafe',
      metric: '3.5k',
      metricLabel: 'Followers',
      completeness: 75,
      action: 'Increase post frequency and use more video content (Reels).',
    },
    {
      platform: 'Website',
      handle: 'lookout.coffee',
      metric: 'No Orders',
      metricLabel: 'Currently',
      completeness: 60,
      action: 'Implement an online ordering system for pickups.',
    },
  ],
  keywordRankings: {
    topPerformers: [
      { keyword: 'best coffee near me', position: 3 },
      { keyword: 'lookout cafe', position: 1 },
      { keyword: 'downtown LA coffee shop', position: 8 },
    ],
    opportunities: [
      { keyword: 'coffee shop with event space', potential: 'High' },
      { keyword: 'single origin coffee los angeles', potential: 'High' },
      { keyword: 'online coffee order pickup', potential: 'Medium' },
    ],
  },
  reviewHighlights: {
    positive:
      "The atmosphere is incredible and the single-origin brew was the best I've had in a long time. My new go-to spot!",
    negative:
      'Love the coffee, but I wish I could order ahead on my way to work. It would be a huge time-saver.',
  },
}

export const seoAnalysis = {
  totalKeywords: 39,
  trafficValue: 1807,
  domainRank: 96,
  rankingDistribution: [
    { name: 'Pos 1', value: 10.3 },
    { name: 'Pos 2-10', value: 23.1 },
    { name: 'Pos 11-20', value: 2.6 },
    { name: 'Pos 21-100', value: 64.1 },
  ],
  topKeywords: [
    {
      keyword: 'lookout coffee campbell',
      position: 1,
      volume: 50,
      growth: 133,
      type: 'Brand',
    },
    {
      keyword: 'lookout coffee menu',
      position: 1,
      volume: 110,
      growth: 367,
      type: 'Brand',
    },
    {
      keyword: 'lookout coffee',
      position: 3,
      volume: 5400,
      growth: 125,
      type: 'Brand',
    },
    {
      keyword: 'coffee campbell',
      position: 6,
      volume: 590,
      type: 'Local',
    },
    {
      keyword: 'coffee shops campbell',
      position: 8,
      volume: 720,
      type: 'Local',
    },
  ],
  competitors: [
    'TripAdvisor',
    "Peet's Coffee",
    'MapQuest',
    'YellowPages',
    'wa-cafe.com',
  ],
  recommendations: {
    immediate: [
      'Optimize Google Business Profile with complete information, photos, and posts.',
      "Create a dedicated menu page to capture valuable 'menu' searches.",
      'Add local schema markup to improve local search visibility.',
    ],
    shortTerm: [
      'Develop a content calendar focusing on coffee education and the local community.',
      'Target competitor keywords with dedicated landing pages.',
      'Optimize for voice search with conversational keyword targeting.',
    ],
    longTerm: [
      'Expand geographic targeting to neighboring cities like San Jose and Los Gatos.',
      'Build topical authority in the specialty coffee niche with blog content.',
      'Develop a link-building strategy through local partnerships and events.',
    ],
  },
}

// Prioritized revenue opportunities with implementation roadmap
export const revenueOpportunities = [
  {
    category: 'Digital Marketing',
    title: 'Enhance Local SEO Presence',
    impact: 'High',
    effort: 'Medium',
    type: '30-Day Focus',
    description:
      'Strengthen your position in local search results to attract more customers in the Campbell area.',
    actions: [
      'Fully optimize Google Business Profile with posts, photos, and all information fields.',
      'Create a dedicated, user-friendly menu page on your website.',
      'Implement local business schema markup to improve search visibility.',
    ],
    kpis: ['Local Keyword Rankings', 'Google Maps Views', 'Website Traffic'],
  },
  {
    category: 'Content & Engagement',
    title: 'Develop Content & Target New Keywords',
    impact: 'Medium',
    effort: 'Medium',
    type: 'Long-Term Bet',
    description:
      'Build authority and attract a wider audience by creating valuable content and targeting new search terms.',
    actions: [
      'Create a content calendar focused on coffee education and community stories.',
      'Develop landing pages for competitor and long-tail keywords.',
      "Optimize website content for voice search queries (e.g., 'coffee near me').",
    ],
    kpis: ['Organic Traffic Growth', 'New Keyword Rankings', 'Time on Page'],
  },
  {
    type: '30-Day Focus',
    category: 'Finalize Lease & Secure Space',
    description:
      'Execute the final lease agreement for the chosen location and get the keys.',
    priority: 'Critical',
    potential: 5000,
    effort: 'Low',
    implementation:
      'Sign lease documents, and coordinate with the landlord for handover.',
    assumptions:
      'Assumes negotiations are complete and the lease is ready for signature.',
    roi: 'N/A - Foundational',
  },
  {
    type: '30-Day Focus',
    category: 'Initiate Brand Identity & Logo Design',
    description:
      "Kick off the branding process with a design agency or freelancer to create the cafe's visual identity.",
    priority: 'High',
    potential: 10000,
    effort: 'Medium',
    implementation:
      'Develop a creative brief, select a designer, and begin the design process.',
    assumptions:
      "Assumes a clear vision for the brand's values and target audience.",
    roi: '150%',
  },
  {
    type: '30-Day Focus',
    category: 'Select and Procure Key Equipment',
    description:
      'Finalize the list of essential equipment (espresso machine, grinders, etc.) and place orders.',
    priority: 'High',
    potential: 0,
    effort: 'High',
    implementation:
      'Get quotes from suppliers, confirm specs, and make purchases.',
    assumptions: 'Assumes equipment list is finalized and budget is approved.',
    roi: 'N/A - CapEx',
  },
  {
    type: 'Long-Term Bet',
    category: 'Develop a Hyper-Local SEO Strategy',
    description:
      "Optimize Google Business Profile and website to capture 'near me' searches for coffee.",
    priority: 'Medium',
    potential: 25000,
    timeline: '3-6 Months',
    effort: 'Medium',
    implementation: 'Keyword research, on-page SEO, and local link building.',
    assumptions:
      'Assumes consistent effort in content creation and profile management.',
    roi: '300%',
  },
  {
    type: 'Long-Term Bet',
    category: 'Launch a Customer Loyalty Program',
    description:
      'Design and implement a loyalty program to encourage repeat business.',
    priority: 'Medium',
    potential: 35000,
    timeline: '6 Months',
    effort: 'Medium',
    implementation:
      'Choose a platform (e.g., app-based or punch card), define rewards, and promote to customers.',
    assumptions:
      'Assumes program is simple to use and offers compelling rewards.',
    roi: '250%',
  },
  {
    type: 'Long-Term Bet',
    category: 'Build a Community Event Calendar',
    description:
      'Plan and host regular events like open mic nights or coffee tasting workshops to drive foot traffic.',
    priority: 'Low',
    potential: 20000,
    timeline: 'Ongoing',
    effort: 'High',
    implementation:
      'Partner with local artists, create a schedule, and promote events on social media.',
    assumptions:
      'Assumes events are well-organized and appeal to the target audience.',
    roi: '200%',
  },
]

// Enhanced cost structure with optimization targets
export const costStructure = [
  {
    name: 'COGS',
    value: 38,
    color: '#8884d8',
    target: 35,
    optimization: 'Supplier negotiations, waste reduction',
  },
  {
    name: 'Labor',
    value: 35,
    color: '#82ca9d',
    target: 30,
    optimization: 'Technology automation, cross-training',
  },
  {
    name: 'Rent & Utilities',
    value: 18,
    color: '#ffc658',
    target: 18,
    optimization: 'Energy efficiency, space optimization',
  },
  {
    name: 'Marketing',
    value: 6,
    color: '#ff7c7c',
    target: 8,
    optimization: 'Digital focus, community partnerships',
  },
  {
    name: 'Other Operations',
    value: 6,
    color: '#8dd1e1',
    target: 4,
    optimization: 'Process automation, vendor consolidation',
  },
]

// Market trends with actionable insights
export const marketTrends = [
  {
    trend: 'Specialty Coffee Dominance',
    impact: 'High',
    direction: 'up',
    value: '+45%',
    description: 'First time majority of Americans prefer specialty coffee',
    opportunity: 'Premium positioning and quality focus',
    action: 'Develop signature blends and origin stories',
  },
  {
    trend: 'Remote Work Culture',
    impact: 'High',
    direction: 'up',
    value: '+60%',
    description: 'Coffee shops becoming primary workspace',
    opportunity: 'Extended stay customers and coworking features',
    action: 'Optimize WiFi, seating, power outlets',
  },
  {
    trend: 'Health & Sustainability',
    impact: 'Medium',
    direction: 'up',
    value: '+43%',
    description: '90% of Gen Z prioritizes sustainable brands',
    opportunity: 'Ethical sourcing and health-conscious menu',
    action:
      'Emphasize high-quality, ethically-sourced beans and unique flavor profiles in marketing.',
  },
  {
    trend: 'Digital Ordering Adoption',
    impact: 'High',
    direction: 'up',
    value: '+68%',
    description: 'Online ordering now expected by 75% of customers',
    opportunity: 'Capture convenience-focused customer segment',
    action: 'Implement online ordering system immediately',
  },
  {
    trend: 'Local Search Dominance',
    impact: 'High',
    direction: 'up',
    value: '+89%',
    description: '89% of consumers use search to find local businesses',
    opportunity: 'Capture local discovery traffic through SEO',
    action: 'Optimize Google Business Profile and local content',
  },
  {
    trend: 'Commodity Price Pressure',
    impact: 'High',
    direction: 'down',
    value: '+32%',
    description: 'Coffee prices rising due to supply chain issues',
    opportunity: 'Direct trade relationships and pricing strategy',
    action: 'Diversify suppliers, implement dynamic pricing',
  },
]

export const monthlyBriefing = {
  strategicBriefing: {
    title: "This Month's Strategic Focus",
    keyInsight:
      "The convergence of local events (Homecoming, Arts Festival) and the 'Nostalgic Comfort' trend creates a prime opportunity to drive revenue through targeted promotions.",
    primaryAction: {
      title: "Launch 'Autumn Classics' Campaign",
      description:
        'Promote classic coffee and pastry pairings, emphasizing comfort and quality. Use social media to target university students and local families.',
      icon: 'Megaphone',
    },
    secondaryAction: {
      title: 'Optimize for High Footfall',
      description:
        'With increased traffic expected, ensure popular items are well-stocked and staff are prepped for quick service, especially for grab-and-go orders.',
      icon: 'Zap',
    },
  },
  commodityWatch: {
    title: 'Commodity Watch',
    commodities: [
      {
        name: 'Coffee Beans (Arabica)',
        price: '2.80',
        unit: 'lb',
        change_1m_pct: 1.5,
      },
      { name: 'Milk (Whole)', price: '3.95', unit: 'gal', change_1m_pct: 2.1 },
      { name: 'Sugar (Raw)', price: '0.25', unit: 'lb', change_1m_pct: 4.5 },
      {
        name: 'Paper Cups (12oz)',
        price: '0.18',
        unit: 'ea',
        change_1m_pct: -1.0,
      },
    ],
    action: {
      title: 'Margin Watch: Dairy & Sugar',
      suggestion:
        'Prices are up. To protect margins, consider promoting oat milk alternatives (higher margin) and slightly reducing syrup pumps in standard lattes.',
    },
  },
  economicClimate: {
    consumerConfidence: {
      name: 'Consumer Confidence',
      value: '72.8',
      trend: 'up',
      change: '+1.2pts',
      driver: 'Stronger local job market',
      historical: [68, 69, 70, 69, 71, 71, 72.8],
    },
    inflation: {
      name: 'Inflation (YoY)',
      value: '2.8%',
      trend: 'down',
      change: '-0.2%',
      driver: 'Easing supply chain pressures',
      historical: [3.5, 3.4, 3.2, 3.1, 3.0, 2.9, 2.8],
    },
    coffeeFutures: {
      name: 'Coffee Futures',
      value: '$2.25/lb',
      trend: 'up',
      change: '+3.5%',
      driver: 'Poor weather in Brazil',
      historical: [2.1, 2.12, 2.15, 2.13, 2.18, 2.2, 2.25],
    },
    footTraffic: {
      name: 'Downtown Foot Traffic',
      value: '115%',
      trend: 'up',
      change: '+5% MoM',
      driver: 'Return-to-office mandates',
      historical: [95, 100, 102, 105, 108, 110, 115],
    },
  },
  culturalFront: {
    flavorTrends: {
      title: 'Emerging Flavor & Product Trends',
      icon: 'Sparkles',
      trends: [
        {
          name: 'Spiced & Infused Cold Brews',
          description:
            'Cinnamon, cardamom, and even chili are adding complexity to cold brew.',
          maturity: 'Emerging',
        },
        {
          name: 'Nostalgic Comfort',
          description:
            'Classic pastries, simple drip coffee, and familiar flavors are making a comeback.',
          maturity: 'Growing',
        },
        {
          name: 'Plant-Based Pastries',
          description:
            'Oat milk and almond flour are now staples. High-quality vegan options are expected.',
          maturity: 'Established',
        },
      ],
    },
    socialVibe: {
      title: 'Cultural Zeitgeist',
      icon: 'Globe',
      name: 'The "Third Place"',
      description:
        'Renewed cultural focus on community spaces outside of home and work. Customers are seeking comfortable, welcoming environments for remote work or socializing.',
      action:
        'Highlight premium Wi-Fi, comfortable seating, and community events. Frame the cafe as an ideal remote work or meeting spot.',
    },
  },
  localOutlook: {
    title: 'Local Outlook: The Next 4 Weeks',
    weather: {
      title: 'Weather Forecast',
      summary: 'Cool & Pleasant',
      avgHigh: '68°F',
      avgLow: '52°F',
      precipChance: '15%',
      details:
        'Ideal autumn weather. Expect strong demand for warm drinks in the morning and comfortable patio afternoons.',
    },
    events: {
      localEvents: [
        {
          name: 'Downtown Arts Festival',
          date: 'Oct 14-15',
          audience: 'All Ages, Tourists',
          footfall: 'High',
        },
        {
          name: 'University Homecoming Week',
          date: 'Oct 21-28',
          audience: 'Students, Alumni',
          footfall: 'High',
        },
        {
          name: 'Farmers Market Season Finale',
          date: 'Oct 28',
          audience: 'Locals, Families',
          footfall: 'Medium',
        },
      ],
    },
    opportunities: [
      {
        name: 'Leverage "Nostalgic Comfort" Trend',
        opportunity:
          'With homecoming week and cooler weather, promote classic pairings to students and alumni.',
        action:
          "Offer a 'Classic Combo' (drip coffee + croissant) for a discounted price.",
        icon: 'Sparkles',
      },
      {
        name: 'Capitalize on Arts Festival Footfall',
        opportunity:
          'The downtown area will be busy. Attract tourists with unique, fast offerings.',
        action:
          "Feature 'Spiced Cold Brew' as a quick, grab-and-go signature drink.",
        icon: 'Footprints',
      },
    ],
  },
}
