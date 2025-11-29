import { useState } from 'react'

const Chevron = ({ className = '' }) => (
  <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FAQAccordion = ({ items = [], defaultIndex = 0 }) => {
  const [openIndex, setOpenIndex] = useState(typeof defaultIndex === 'number' ? defaultIndex : -1)

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i)

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map((it, i) => {
        const isOpen = openIndex === i
        const panelId = `faq-panel-${i}`
        const btnId = `faq-btn-${i}`
        return (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              id={btnId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-4 flex items-center justify-between bg-white hover:bg-gray-50 focus:outline-none"
            >
              <span className="text-lg font-medium text-charcoal">{it.question}</span>
              <Chevron className={`w-5 h-5 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'} text-charcoal`} />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="px-4 overflow-hidden transition-[max-height] duration-300"
              style={{ maxHeight: isOpen ? '640px' : '0px' }}
            >
              <div className="py-4 text-charcoal/70">{it.answer}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default FAQAccordion
