import React, { useState, useEffect } from 'react'
import { revenueOpportunities } from '../data/constants'
import ActionCard from '../shared/ActionCard'

const GrowthTab = () => {
  const [generations, setGenerations] = useState([])
  const [activeGenerationId, setActiveGenerationId] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [goal, setGoal] = useState('')

  const remainingGenerations = 3 - generations.length
  const activeGeneration = generations.find((g) => g.id === activeGenerationId)

  useEffect(() => {
    if (!activeGenerationId && generations.length > 0) {
      setActiveGenerationId(generations[generations.length - 1].id)
    }
  }, [generations, activeGenerationId])

  const handleGenerate = () => {
    if (remainingGenerations <= 0 || !goal) return

    const newGeneration = {
      id: Date.now(),
      goal: goal,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      }),
    }

    const newGenerations = [...generations, newGeneration]
    setGenerations(newGenerations)
    setActiveGenerationId(newGeneration.id)
    setGoal('')
    setIsGenerating(false)
  }

  const thirtyDayFocus = revenueOpportunities.filter(
    (op) => op.type === '30-Day Focus'
  )
  const longTermBets = revenueOpportunities.filter(
    (op) => op.type === 'Long-Term Bet'
  )

  const sampleGoals = [
    'Increase foot traffic',
    'Boost online orders',
    'Improve customer loyalty',
    'Enhance brand awareness',
  ]

  const showForm = isGenerating || generations.length === 0

  if (showForm) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Let's define your growth goals
        </h2>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl">
          What is your primary goal for the next 90 days? This will help us
          tailor recommendations for you. You have {remainingGenerations}{' '}
          generations left.
        </p>

        <div className="w-full max-w-lg">
          <textarea
            className="w-full p-4 bg-surface border border-border rounded-lg text-text-primary focus:ring-primary focus:border-primary transition"
            rows="3"
            placeholder="E.g., Open a new location, launch a catering service, etc."
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
          ></textarea>
        </div>

        <div className="flex flex-wrap justify-center gap-4 my-6">
          {sampleGoals.map((g) => (
            <button
              key={g}
              onClick={() => setGoal(g)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                goal === g
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface hover:bg-border text-text-secondary'
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {generations.length > 0 && (
            <button
              onClick={() => setIsGenerating(false)}
              className="px-8 py-3 bg-surface text-text-primary rounded-lg font-bold transition"
            >
              Cancel
            </button>
          )}
          <button
            onClick={handleGenerate}
            disabled={!goal || remainingGenerations <= 0}
            className="px-8 py-3 bg-primary text-on-primary rounded-lg font-bold disabled:bg-gray-600 disabled:cursor-not-allowed transition"
          >
            Generate
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex" style={{ height: 'calc(100vh - 200px)' }}>
      <aside className="w-1/3 max-w-sm border-r border-border p-6 flex flex-col">
        <div className="flex-shrink-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-text-primary">History</h2>
            <span className="text-sm text-text-secondary">
              {3 - remainingGenerations}/3 used
            </span>
          </div>
          <div className="space-y-2">
            {generations.map((gen) => (
              <button
                key={gen.id}
                onClick={() => setActiveGenerationId(gen.id)}
                className={`w-full text-left p-4 rounded-lg transition ${
                  activeGenerationId === gen.id
                    ? 'bg-surface'
                    : 'hover:bg-surface/50'
                }`}
              >
                <p className="font-medium text-text-primary truncate">
                  {gen.goal}
                </p>
                <p className="text-sm text-text-secondary">{gen.date}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-auto pt-6">
          <button
            onClick={() => setIsGenerating(true)}
            disabled={remainingGenerations <= 0}
            className="w-full px-6 py-3 bg-primary text-on-primary rounded-lg font-bold disabled:bg-gray-600 disabled:cursor-not-allowed transition"
          >
            New Growth Plan
          </button>
        </div>
      </aside>

      <main className="w-2/3 p-8 overflow-y-auto">
        {activeGeneration && (
          <div className="mb-8">
            <p className="text-text-secondary mb-2">Growth goal</p>
            <h1 className="text-3xl font-bold text-text-primary">
              {activeGeneration.goal}
            </h1>
          </div>
        )}
        <div className="space-y-16">
          <section>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              30-Day Focus
            </h3>
            <p className="text-base text-text-secondary mb-6">
              Critical actions to build momentum and establish a strong
              foundation.
            </p>
            <div className="space-y-4">
              {thirtyDayFocus.map((op) => (
                <ActionCard key={op.category} opportunity={op} />
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Long-Term Bets
            </h3>
            <p className="text-base text-text-secondary mb-6">
              Strategic initiatives to drive sustainable growth and market
              leadership.
            </p>
            <div className="space-y-4">
              {longTermBets.map((op) => (
                <ActionCard key={op.category} opportunity={op} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default GrowthTab
