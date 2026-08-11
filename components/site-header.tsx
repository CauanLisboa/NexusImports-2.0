'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, User, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Vitrine', href: '/', active: true },
  { label: 'Produtos', href: '#lancamentos', active: false },
  { label: 'Masculino', href: '#masculino', active: false },
  { label: 'Feminino', href: '#feminino', active: false },
  { label: 'Sobre', href: '#sobre', active: false },
  { label: 'Contato', href: '#contato', active: false },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 flex h-20 w-full items-center justify-between border-b border-outline-variant/30 bg-background/80 px-4 backdrop-blur-md md:px-16">
      <Link
        href="/"
        className="flex items-center gap-2 font-display text-xl font-bold tracking-tighter text-primary md:text-2xl"
      >
        <img src="/icon.png" alt="Nexus Imports Logo" className="h-8 w-8 rounded object-cover" />
        <span>NEXUS IMPORTS</span>
      </Link>

      <nav className="hidden gap-8 md:flex">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              item.active
                ? 'border-b-2 border-signal-red pb-1 font-mono text-sm tracking-wide text-primary'
                : 'font-mono text-sm tracking-wide text-on-surface-variant transition-colors duration-300 hover:text-primary'
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4 md:gap-6">
        <button
          className="text-primary transition-all duration-200 hover:opacity-80"
          aria-label="Sacola de compras"
        >
          <ShoppingBag className="h-5 w-5" />
        </button>
        <button
          className="text-primary transition-all duration-200 hover:opacity-80"
          aria-label="Conta"
        >
          <User className="h-5 w-5" />
        </button>
        <button
          className="text-primary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="absolute top-20 left-0 flex w-full flex-col gap-1 border-b border-outline-variant/30 bg-background/95 p-4 backdrop-blur-md md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-3 font-mono text-sm tracking-wide text-on-surface-variant transition-colors hover:bg-steel-gray hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
