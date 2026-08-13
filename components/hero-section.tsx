import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="fade-in-up relative mx-auto flex min-h-[90vh] w-full max-w-[1280px] items-center px-4 md:px-16">
      <div className="z-10 grid w-full grid-cols-1 items-center gap-6 md:grid-cols-2">
        <div className="max-w-2xl">
          <h1 className="text-gradient mb-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-balance md:text-7xl">
            Conectando você aos melhores produtos do Paraguai
          </h1>
          <p className="mb-10 max-w-lg text-lg leading-relaxed text-on-surface-variant">
            Seleção exclusiva de eletrônicos, perfumes e tecnologia de ponta com
            garantia de procedência e qualidade absoluta.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="#lancamentos"
              className="rounded bg-primary px-8 py-4 text-center font-mono text-sm uppercase tracking-wide text-background transition-colors hover:bg-mercury"
            >
              Explorar Catálogo
            </Link>
            <Link
              href="#destaque"
              className="rounded border border-outline-variant bg-surface-container/50 px-8 py-4 text-center font-mono text-sm uppercase tracking-wide text-primary transition-colors hover:border-primary"
            >
              Ver Destaques
            </Link>
          </div>
        </div>

        <div className="relative mt-12 h-[360px] w-full md:mt-0 md:h-[600px]">
          <div className="absolute inset-0 z-10 hidden bg-gradient-to-r from-background via-transparent to-transparent md:block" />
          <Image
            src="/products/hero-phone.png"
            alt="Smartphone premium em titânio em estúdio escuro"
            fill
            priority
            unoptimized
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-xl object-cover opacity-90 mix-blend-lighten"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute top-1/4 right-0 h-1/2 w-1/2 rounded-full bg-surface-bright opacity-10 blur-[150px]" />
    </section>
  )
}
