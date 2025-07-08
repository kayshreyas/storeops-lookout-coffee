import React, { useState } from 'react'
import ActionCard from '../shared/ActionCard'

const GrowthTab = () => {
  const [activeGoal, setActiveGoal] = useState('customer-acquisition')
  const [showCustomForm, setShowCustomForm] = useState(false)
  const [customGoal, setCustomGoal] = useState('')

  // Predefined goals with their focus areas
  const predefinedGoals = {
    'customer-acquisition': {
      id: 'customer-acquisition',
      title: 'Customer Acquisition',
      description: 'Attract new customers and expand market reach',
      shortTerm: [
        {
          category: 'Digital Marketing',
          title: 'Enhance Local SEO Presence',
          impact: 'High',
          effort: 'Medium',
          type: 'Short Term Focus',
          description: 'Strengthen your position in local search results to attract more customers in the Campbell area.',
          actions: [
            'Fully optimize Google Business Profile with posts, photos, and all information fields.',
            'Create a dedicated, user-friendly menu page on your website.',
            'Implement local business schema markup to improve search visibility.',
          ],
          kpis: ['Local Keyword Rankings', 'Google Maps Views', 'Website Traffic'],
        },
        {
          category: 'Social Media',
          title: 'Launch Social Media Campaign',
          impact: 'High',
          effort: 'Low',
          type: 'Short Term Focus',
          description: 'Create engaging social media presence to attract local customers.',
          actions: [
            'Set up Instagram and Facebook business accounts.',
            'Post daily content featuring coffee, ambiance, and community.',
            'Run targeted ads to Campbell and surrounding areas.',
          ],
          kpis: ['Follower Growth', 'Engagement Rate', 'Social Traffic'],
        },
      ],
      longTerm: [
        {
          category: 'Content & Engagement',
          title: 'Develop Content & Target New Keywords',
          impact: 'Medium',
          effort: 'Medium',
          type: 'Long Term Focus',
          description: 'Build authority and attract a wider audience by creating valuable content and targeting new search terms.',
          actions: [
            'Create a content calendar focused on coffee education and community stories.',
            'Develop landing pages for competitor and long-tail keywords.',
            "Optimize website content for voice search queries (e.g., 'coffee near me').",
          ],
          kpis: ['Organic Traffic Growth', 'New Keyword Rankings', 'Time on Page'],
        },
        {
          category: 'Partnerships',
          title: 'Build Strategic Partnerships',
          impact: 'Medium',
          effort: 'High',
          type: 'Long Term Focus',
          description: 'Establish partnerships with local businesses and organizations to expand reach.',
          actions: [
            'Partner with local gyms and offices for corporate accounts.',
            'Collaborate with nearby retail stores for cross-promotions.',
            'Sponsor local events and community initiatives.',
          ],
          kpis: ['Partnership Revenue', 'Referral Traffic', 'Brand Awareness'],
        },
      ],
    },
    'retention': {
      id: 'retention',
      title: 'Retention',
      description: 'Keep existing customers engaged and coming back',
      shortTerm: [
        {
          category: 'Customer Experience',
          title: 'Improve Service Quality',
          impact: 'High',
          effort: 'Medium',
          type: 'Short Term Focus',
          description: 'Enhance the customer experience to build loyalty and encourage repeat visits.',
          actions: [
            'Train staff on exceptional customer service standards.',
            'Implement a customer feedback system.',
            'Reduce average wait times during peak hours.',
          ],
          kpis: ['Customer Satisfaction Score', 'Average Wait Time', 'Return Rate'],
        },
        {
          category: 'Personalization',
          title: 'Launch Customer Recognition Program',
          impact: 'Medium',
          effort: 'Low',
          type: 'Short Term Focus',
          description: 'Make customers feel valued through personalized service and recognition.',
          actions: [
            'Train staff to remember regular customers\' names and orders.',
            'Create a simple punch card system for frequent visitors.',
            'Offer birthday discounts and special occasion recognition.',
          ],
          kpis: ['Customer Recognition Rate', 'Repeat Customer %', 'Average Visit Frequency'],
        },
      ],
      longTerm: [
        {
          category: 'Loyalty Program',
          title: 'Launch Comprehensive Loyalty Program',
          impact: 'High',
          effort: 'Medium',
          type: 'Long Term Focus',
          description: 'Design and implement a loyalty program to encourage repeat business.',
          actions: [
            'Choose a platform (e.g., app-based or punch card), define rewards, and promote to customers.',
            'Create tiered rewards based on purchase frequency.',
            'Integrate with mobile app for easy tracking.',
          ],
          kpis: ['Program Sign-ups', 'Repeat Purchase Rate', 'Average Order Value'],
        },
        {
          category: 'Community Building',
          title: 'Build Community Event Calendar',
          impact: 'Medium',
          effort: 'High',
          type: 'Long Term Focus',
          description: 'Plan and host regular events to create a sense of community and drive repeat visits.',
          actions: [
            'Partner with local artists, create a schedule, and promote events on social media.',
            'Host coffee cupping sessions and brewing workshops.',
            'Create a monthly book club or networking event.',
          ],
          kpis: ['Event Attendance', 'Customer Engagement', 'Community Growth'],
        },
      ],
    },
    'profit-optimization': {
      id: 'profit-optimization',
      title: 'Profit Optimization',
      description: 'Maximize profitability through cost reduction and revenue optimization',
      shortTerm: [
        {
          category: 'Cost Management',
          title: 'Optimize Inventory Management',
          impact: 'High',
          effort: 'Medium',
          type: 'Short Term Focus',
          description: 'Reduce waste and optimize inventory levels to improve margins.',
          actions: [
            'Implement daily inventory tracking system.',
            'Analyze sales patterns to optimize ordering.',
            'Reduce food waste through better portion control.',
          ],
          kpis: ['Inventory Turnover', 'Waste Percentage', 'Food Cost %'],
        },
        {
          category: 'Pricing Strategy',
          title: 'Optimize Menu Pricing',
          impact: 'Medium',
          effort: 'Low',
          type: 'Short Term Focus',
          description: 'Adjust pricing to maximize revenue while maintaining competitive positioning.',
          actions: [
            'Conduct competitive pricing analysis.',
            'Test price increases on high-margin items.',
            'Bundle products to increase average transaction size.',
          ],
          kpis: ['Average Transaction Value', 'Gross Margin', 'Price Elasticity'],
        },
      ],
      longTerm: [
        {
          category: 'Revenue Diversification',
          title: 'Develop Additional Revenue Streams',
          impact: 'High',
          effort: 'High',
          type: 'Long Term Focus',
          description: 'Create new revenue sources to reduce dependency on in-store sales.',
          actions: [
            'Launch catering services for local businesses.',
            'Develop retail coffee bean sales.',
            'Offer barista training workshops.',
          ],
          kpis: ['Revenue Diversification %', 'Catering Revenue', 'Retail Sales'],
        },
        {
          category: 'Operational Efficiency',
          title: 'Implement Technology Solutions',
          impact: 'Medium',
          effort: 'High',
          type: 'Long Term Focus',
          description: 'Use technology to reduce labor costs and improve operational efficiency.',
          actions: [
            'Implement mobile ordering and payment system.',
            'Use scheduling software to optimize labor costs.',
            'Automate inventory management with POS integration.',
          ],
          kpis: ['Labor Cost %', 'Order Processing Time', 'Operational Efficiency'],
        },
      ],
    },
  }

  const activeGoalData = predefinedGoals[activeGoal]

  const sampleGoals = [
    'Increase foot traffic',
    'Boost online orders',
    'Improve customer loyalty',
    'Enhance brand awareness',
  ]

  if (showCustomForm) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
          Create Custom Growth Goal
        </h2>
        <p className="text-base md:text-lg text-text-secondary mb-8 max-w-2xl">
          Define your own custom growth goal and get personalized recommendations.
        </p>

        <div className="w-full max-w-lg">
          <textarea
            className="w-full p-4 bg-surface border border-border rounded-lg text-text-primary focus:ring-primary focus:border-primary transition"
            rows="3"
            placeholder="E.g., Open a new location, launch a catering service, etc."
            value={customGoal}
            onChange={(e) => setCustomGoal(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 my-6">
          {sampleGoals.map((g) => (
            <button
              key={g}
              onClick={() => setCustomGoal(g)}
              className={`px-3 py-2 md:px-4 md:py-2 rounded-full text-sm font-medium transition ${
                customGoal === g
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface hover:bg-border text-text-secondary'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
            <button
            onClick={() => setShowCustomForm(false)}
            className="w-full sm:w-auto px-6 py-3 bg-surface text-text-primary rounded-lg font-bold transition hover:bg-border"
            >
              Cancel
            </button>
          <button
            disabled={true}
            className="w-full sm:w-auto px-6 py-3 bg-gray-400 text-gray-600 rounded-lg font-bold cursor-not-allowed transition"
          >
            Coming Soon
          </button>
        </div>
        
        <p className="text-sm text-text-secondary mt-4 px-4">
          Custom growth goals are a premium feature. Coming soon!
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Sidebar - Mobile: Top section, Desktop: Left sidebar */}
      <aside className="w-full lg:w-1/3 lg:max-w-sm border-b lg:border-b-0 lg:border-r border-border px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex flex-col">
        <div className="flex-shrink-0">
          <div className="flex justify-between items-center mb-4 lg:mb-6">
            <h2 className="text-lg lg:text-xl font-bold text-text-primary">Growth Goals</h2>
          </div>
          
          {/* Mobile: Horizontal scrolling goals, Desktop: Vertical list */}
          <div className="lg:space-y-2">
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-2">
              {Object.values(predefinedGoals).map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setActiveGoal(goal.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg transition ${
                    activeGoal === goal.id
                      ? 'bg-surface'
                      : 'hover:bg-surface/50'
                  }`}
                >
                  <p className="font-medium text-text-primary text-sm whitespace-nowrap">
                    {goal.title}
                  </p>
                </button>
              ))}
            </div>
            
            {/* Desktop: Vertical list */}
            <div className="hidden lg:block space-y-2">
              {Object.values(predefinedGoals).map((goal) => (
              <button
                  key={goal.id}
                  onClick={() => setActiveGoal(goal.id)}
                className={`w-full text-left p-4 rounded-lg transition ${
                    activeGoal === goal.id
                    ? 'bg-surface'
                    : 'hover:bg-surface/50'
                }`}
              >
                  <p className="font-medium text-text-primary">
                    {goal.title}
                </p>
              </button>
            ))}
            </div>
          </div>
        </div>
        
        <div className="mt-4 lg:mt-auto lg:pt-6">
          <button
            onClick={() => setShowCustomForm(true)}
            className="w-full relative px-4 py-3 lg:px-6 lg:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold transition hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="flex items-center justify-center gap-2">
              <span>✨ Custom Goal</span>
              <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">PRO</span>
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
        <div className="space-y-12 lg:space-y-16">
          <section>
            <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2">
              Short Term Focus
            </h3>
            <p className="text-sm lg:text-base text-text-secondary mb-4 lg:mb-6">
              Critical actions to build momentum and establish a strong foundation.
            </p>
            <div className="space-y-4">
              {activeGoalData.shortTerm.map((op, index) => (
                <ActionCard key={`short-${index}`} opportunity={op} />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg lg:text-xl font-bold text-text-primary mb-2">
              Long Term Focus
            </h3>
            <p className="text-sm lg:text-base text-text-secondary mb-4 lg:mb-6">
              Strategic initiatives to drive sustainable growth and market leadership.
            </p>
            <div className="space-y-4">
              {activeGoalData.longTerm.map((op, index) => (
                <ActionCard key={`long-${index}`} opportunity={op} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default GrowthTab
