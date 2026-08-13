import Image from 'next/image'
import { ShoppingCart, Info } from 'lucide-react'
import { featuredProduct, whatsappLink } from '@/lib/site'

export function FeaturedProduct() {
  const p = featuredProduct

  return (
    <section
      id="destaque"
      className="mx-auto max-w-[1280px] px-4 py-24 md:px-16 md:py-32"
    >
      <div className="mb-12 md:mb-16">
        <span className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-signal-red">
          Destaque da Semana
        </span>
        <h2 className="font-display text-4xl font-semibold text-primary md:text-5xl">
          PERFORMANCE E ESTILO
        </h2>
      </div>

      <div className="metal-glow premium-hover group grid grid-cols-1 items-center gap-6 overflow-hidden rounded-xl bg-steel-gray lg:grid-cols-2">
        <div className="relative flex h-[360px] w-full items-center justify-center bg-surface-lowest p-8 md:h-[500px]">
          <Image
            src={p.image || '/placeholder.svg'}
            alt={p.alt}
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-6 left-6">
            <span className="rounded-sm bg-signal-red px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
              {p.badge}
            </span>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <h3 className="mb-4 font-display text-3xl font-semibold text-primary md:text-4xl">
            {p.name}
          </h3>
          <p className="mb-8 leading-relaxed text-on-surface-variant">
            {p.description}
          </p>

          <div className="mb-10 flex items-end gap-6 border-b border-outline-variant/30 pb-10">
            <div>
              <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-on-surface-variant">
                Preço Exclusivo
              </span>
              <span className="font-display text-4xl font-semibold leading-none text-primary md:text-5xl">
                {p.price}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="flex flex-1 items-center justify-center gap-2 rounded bg-primary px-8 py-4 font-mono text-sm uppercase tracking-wide text-background transition-colors hover:bg-mercury">
              Adicionar ao Carrinho
              <ShoppingCart className="h-4 w-4" />
            </button>
            <a
              href={whatsappLink(
                `Olá! Gostaria de consultar sobre o ${p.name}.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-outline-variant px-8 py-4 font-mono text-sm uppercase tracking-wide text-primary transition-colors hover:border-primary hover:bg-surface-container"
            >
              Consultar WhatsApp
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 font-mono text-xs text-outline">
            <Info className="h-4 w-4" />
            Disponibilidade deve ser consultada
          </p>
        </div>
      </div>
    </section>
  )
}
