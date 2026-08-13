'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { MessageSquare, Sparkles, Smartphone, Heart, Mars } from 'lucide-react'
import { products, perfumes, perfumesFemininos, whatsappLink } from '@/lib/site'

type TabType = 'vitrine' | 'produtos' | 'masculino' | 'feminino'

export function UnifiedCatalog() {
  const [activeTab, setActiveTab] = useState<TabType>('vitrine')

  // Handle URL hash changes (e.g. #produtos, #masculino, #feminino, #vitrine)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (hash === 'produtos') setActiveTab('produtos')
      else if (hash === 'masculino') setActiveTab('masculino')
      else if (hash === 'feminino') setActiveTab('feminino')
      else if (hash === 'vitrine' || hash === 'lancamentos') setActiveTab('vitrine')
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const tabs = [
    { id: 'vitrine', label: 'Vitrine', icon: Sparkles },
    { id: 'produtos', label: 'Produtos', icon: Smartphone },
    { id: 'masculino', label: 'Masculino', icon: Mars },
    { id: 'feminino', label: 'Feminino', icon: Heart },
  ] as const

  return (
    <section id="vitrine" className="bg-surface-lowest py-16 md:py-24 scroll-mt-20">
      <div id="produtos" className="mx-auto max-w-[1280px] px-4 md:px-16 scroll-mt-20">
        
        {/* Header Section with Tab Navigation */}
        <div className="flex flex-col items-center justify-between gap-6 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Catálogo Exclusivo
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
            Nossos Produtos
          </h2>
          <p className="max-w-xl font-mono text-sm text-on-surface-variant">
            Explore nossa seleção completa de eletrônicos importados e perfumes de alta fixação.
          </p>

          {/* Tab Selector */}
          <div className="mt-4 flex w-full max-w-2xl flex-wrap justify-center gap-2 rounded-xl border border-outline-variant/40 bg-steel-gray/60 p-1.5 backdrop-blur-md">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  id={tab.id === 'masculino' ? 'masculino' : tab.id === 'feminino' ? 'feminino' : undefined}
                  onClick={() => {
                    setActiveTab(tab.id as TabType)
                    window.history.pushState(null, '', `#${tab.id}`)
                  }}
                  className={`flex flex-1 min-w-[110px] items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-mono text-xs font-semibold tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-background shadow-lg shadow-primary/10'
                      : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? 'text-background' : 'text-gold'}`} />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Catalog Items */}
        <div className="mt-14">
          {/* TAB 1: VITRINE (ALL) */}
          {activeTab === 'vitrine' && (
            <div className="space-y-16">
              {/* Tech Highlights */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-outline-variant/30" />
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">
                    Eletrônicos & Tech
                  </span>
                  <span className="h-px flex-1 bg-outline-variant/30" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {products.map((item) => (
                    <ProductCard key={item.slug} item={item} />
                  ))}
                </div>
              </div>

              {/* Perfumes Masculinos */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-outline-variant/30" />
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">
                    Perfumes Masculinos
                  </span>
                  <span className="h-px flex-1 bg-outline-variant/30" />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {perfumes.slice(0, 6).map((perfume) => (
                    <PerfumeCard key={perfume.slug} perfume={perfume} />
                  ))}
                </div>
              </div>

              {/* Perfumes Femininos */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-outline-variant/30" />
                  <span className="font-mono text-xs uppercase tracking-widest text-gold">
                    Perfumes Femininos
                  </span>
                  <span className="h-px flex-1 bg-outline-variant/30" />
                </div>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {perfumesFemininos.slice(0, 6).map((perfume) => (
                    <PerfumeCard key={perfume.slug} perfume={perfume} />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUTOS (ELETRÔNICOS) */}
          {activeTab === 'produtos' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((item) => (
                <ProductCard key={item.slug} item={item} />
              ))}
            </div>
          )}

          {/* TAB 3: MASCULINO (PERFUMES MASCULINOS) */}
          {activeTab === 'masculino' && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {perfumes.map((perfume) => (
                <PerfumeCard key={perfume.slug} perfume={perfume} />
              ))}
            </div>
          )}

          {/* TAB 4: FEMININO (PERFUMES FEMININOS) */}
          {activeTab === 'feminino' && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {perfumesFemininos.map((perfume) => (
                <PerfumeCard key={perfume.slug} perfume={perfume} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ item }: { item: (typeof products)[0] }) {
  return (
    <div className="premium-hover group flex flex-col justify-between overflow-hidden rounded-xl border border-outline-variant/30 bg-black p-5">
      <div>
        <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-lg bg-black">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-outline">
          {item.brand}
        </span>
        <h3 className="mt-1 font-display text-base font-semibold text-primary">
          {item.name}
        </h3>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
        <span className="font-mono text-base font-bold text-gold">
          {item.price || 'Sob Consulta'}
        </span>
        <a
          href={whatsappLink(`Olá! Tenho interesse no produto ${item.name} (${item.brand}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container text-primary transition-colors hover:bg-primary hover:text-background"
          aria-label={`Comprar ${item.name}`}
        >
          <MessageSquare className="h-4 w-4" />
        </a>
      </div>
    </div>
  )
}

function PerfumeCard({ perfume }: { perfume: (typeof perfumes)[0] }) {
  return (
    <div className="premium-hover group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 bg-black">
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
            src={perfume.image}
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
  )
}
