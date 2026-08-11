import { BadgeCheck, Gem, MessagesSquare } from 'lucide-react'

const badges = [
  {
    icon: BadgeCheck,
    title: '100% Originais',
    text: 'Garantia de procedência e qualidade',
  },
  {
    icon: Gem,
    title: 'Seleção Exclusiva',
    text: 'Produtos selecionados direto do Paraguai',
  },
  {
    icon: MessagesSquare,
    title: 'Atendimento Direto',
    text: 'Tire dúvidas e faça pedidos via WhatsApp',
  },
]

export function TrustBadges() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-lowest py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 text-center md:grid-cols-3 md:px-16">
        {badges.map((badge, i) => {
          const Icon = badge.icon
          return (
            <div
              key={badge.title}
              className="fade-in-up flex flex-col items-center gap-4"
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-outline-variant/50 bg-steel-gray">
                <Icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-primary">
                  {badge.title}
                </h3>
                <p className="mt-2 text-on-surface-variant">{badge.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
