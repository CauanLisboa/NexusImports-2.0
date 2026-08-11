import Image from 'next/image'
import { MessageSquare, ArrowRight } from 'lucide-react'
import { products, whatsappLink } from '@/lib/site'

export function ProductGrid() {
  return (
    <section
      id="lancamentos"
      className="mx-auto max-w-[1280px] px-4 py-20 md:px-16"
    >
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="font-display text-4xl font-semibold text-primary md:text-5xl">
            LANÇAMENTOS &amp; TECH
          </h2>
          <p className="mt-2 text-on-surface-variant">
            Tecnologia de ponta importada diretamente para você.
          </p>
        </div>
        <a
          href={whatsappLink('Olá! Gostaria de ver o catálogo completo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 font-mono text-sm uppercase tracking-wide text-primary transition-colors hover:text-signal-red md:flex"
        >
          Ver Catálogo Completo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.slug}
            className="metal-glow premium-hover group flex flex-col overflow-hidden rounded-xl bg-steel-gray"
          >
            <div className="relative h-64 border-b border-outline-variant/30 bg-surface-lowest p-6">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-grow flex-col p-6">
              <span className="mb-2 font-mono text-xs tracking-wider text-outline">
                {product.brand}
              </span>
              <h3 className="mb-2 line-clamp-2 font-display text-xl text-primary">
                {product.name}
              </h3>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="font-mono text-sm text-signal-red">
                  Consultar
                </span>
                <a
                  href={whatsappLink(
                    `Olá! Gostaria de consultar sobre o ${product.name}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container text-primary transition-colors hover:bg-primary hover:text-background"
                  aria-label={`Consultar ${product.name} no WhatsApp`}
                >
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center md:hidden">
        <a
          href={whatsappLink('Olá! Gostaria de ver o catálogo completo.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wide text-primary transition-colors hover:text-signal-red"
        >
          Ver Catálogo Completo
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
