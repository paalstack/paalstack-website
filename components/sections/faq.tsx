'use client'
import { motion, useReducedMotion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most projects take 4–12 weeks depending on scope and complexity. We begin with a discovery phase to scope the work accurately, then provide a detailed timeline before any development begins.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'We work on project-based and retainer models. Project-based pricing is ideal for well-defined scopes, while retainers work best for ongoing product development or continuous improvement cycles.',
  },
  {
    question: 'Do you build AI agents?',
    answer:
      'Yes, AI agent development is a core service. We build agents that can search knowledge bases, automate workflows, interact with external APIs, and take multi-step actions on behalf of users.',
  },
  {
    question: 'Can you help launch a SaaS product?',
    answer:
      'Absolutely. We offer end-to-end SaaS development including authentication, user management, billing integrations, dashboards, and AI features — everything you need to launch and grow.',
  },
  {
    question: 'What happens after launch?',
    answer:
      'We offer ongoing support and maintenance packages to keep your product running smoothly, add new features, and adapt to changing business requirements after the initial launch.',
  },
  {
    question: 'Which technologies do you use?',
    answer:
      'Our primary stack is Next.js, TypeScript, Supabase, and Tailwind CSS for most products. For AI features we use OpenRouter to access leading language models. We select tools based on your specific needs.',
  },
  {
    question: 'How do we start?',
    answer:
      'Book a free consultation via the contact form below. We\'ll discuss your goals, assess the scope, and outline a plan. There\'s no commitment required — just a conversation.',
  },
]

export function FAQ() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="faq" className="py-24 lg:py-32 bg-card/40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-accent">Common Questions</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Answers Before You Ask</h2>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
