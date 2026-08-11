import Image from 'next/image'
import { MessageSquare } from 'lucide-react'
import { perfumes, perfumesFemininos, whatsappLink } from '@/lib/site'

export function PerfumeCatalog() {
  return (
    <section
      id="perfumes"
      className="bg-surface-lowest py-20 space-y-24"
    >
      {/* SEÇÃO MASCULINO */}
      <div id="masculino" className="mx-auto max-w-[1280px] px-4 md:px-16 scroll-mt-28">
        {/* Título estilo catálogo */}
        <div className="mx-auto mb-14 max-w-xl rounded-lg border border-outline-variant/40 bg-steel-gray px-8 py-8 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-[0.3em] text-primary md:text-5xl">
            PERFUMES
          </h2>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="font-mono text-sm tracking-[0.4em] text-gold">
              MASCULINO
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perfumes.map((perfume) => (
            <div
              key={perfume.slug}
              className="premium-hover group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-black"
            >
              <div className="flex flex-1 items-stretch">
                <div className="flex flex-col justify-center p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                    {perfume.brand}
                  </span>
                  <h3 className="mt-1 font-display text-lg leading-tight text-primary">
                    {perfume.name}
                  </h3>
                  <span className="mt-2 font-mono text-xs text-on-surface-variant">
                    {perfume.volume}
                  </span>
                </div>
                <div className="relative ml-auto h-40 w-1/2 flex-shrink-0 bg-black">
                  <Image
                    src={perfume.image || '/placeholder.svg'}
                    alt={perfume.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant/20 bg-steel-gray px-5 py-3">
                <span className="font-mono text-lg font-semibold text-gold">
                  {perfume.price}
                </span>
                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse no perfume ${perfume.name} (${perfume.brand}) - ${perfume.price}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary transition-colors hover:bg-primary hover:text-background"
                  aria-label={`Comprar ${perfume.name} no WhatsApp`}
                >
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEÇÃO FEMININO */}
      <div id="feminino" className="mx-auto max-w-[1280px] px-4 md:px-16 scroll-mt-28">
        {/* Título estilo catálogo Feminino */}
        <div className="mx-auto mb-14 max-w-xl rounded-lg border border-outline-variant/40 bg-steel-gray px-8 py-8 text-center">
          <h2 className="font-display text-4xl font-semibold tracking-[0.3em] text-primary md:text-5xl">
            PERFUMES
          </h2>
          <div className="mt-3 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gold" />
            <span className="font-mono text-sm tracking-[0.4em] text-gold">
              FEMININO
            </span>
            <span className="h-px w-12 bg-gold" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {perfumesFemininos.map((perfume) => (
            <div
              key={perfume.slug}
              className="premium-hover group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-black"
            >
              <div className="flex flex-1 items-stretch">
                <div className="flex flex-col justify-center p-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
                    {perfume.brand}
                  </span>
                  <h3 className="mt-1 font-display text-lg leading-tight text-primary">
                    {perfume.name}
                  </h3>
                  <span className="mt-2 font-mono text-xs text-on-surface-variant">
                    {perfume.volume}
                  </span>
                </div>
                <div className="relative ml-auto h-40 w-1/2 flex-shrink-0 bg-black">
                  <Image
                    src={perfume.image || '/placeholder.svg'}
                    alt={perfume.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                    className="object-contain p-3 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-outline-variant/20 bg-steel-gray px-5 py-3">
                <span className="font-mono text-lg font-semibold text-gold">
                  {perfume.price}
                </span>
                <a
                  href={whatsappLink(
                    `Olá! Tenho interesse no perfume ${perfume.name} (${perfume.brand}) - ${perfume.price}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary transition-colors hover:bg-primary hover:text-background"
                  aria-label={`Comprar ${perfume.name} no WhatsApp`}
                >
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
