import Link from 'next/link'
import { MessageSquare } from 'lucide-react'
import { NexusLogo } from '@/components/nexus-logo'
import {
  whatsappLink,
  WHATSAPP_DISPLAY,
  CONTACT_EMAIL,
} from '@/lib/site'

export function SiteFooter() {
  return (
    <footer
      id="contato"
      className="border-t border-gunmetal bg-surface-lowest py-12"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-4 md:grid-cols-4 md:px-16">
        <div className="col-span-1 md:col-span-2">
          <Link
            href="/"
            className="mb-6 flex items-center gap-2 font-display text-lg font-bold text-primary"
          >
            <NexusLogo className="h-6 w-6" size={24} />
            <span>NEXUS IMPORTS</span>
          </Link>
          <p className="mb-6 max-w-sm text-on-surface-variant">
            © 2024 NEXUS IMPORTS. EXCLUSIVIDADE EM CADA DETALHE.
            <br />
            <br />
            {CONTACT_EMAIL}
          </p>
          <a
            href={whatsappLink('Olá! Gostaria de mais informações.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary transition-colors hover:text-signal-red"
          >
            <MessageSquare className="h-5 w-5" />
            WhatsApp: {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div id="sobre">
          <h3 className="mb-6 font-mono text-sm uppercase text-primary">
            Legal
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#"
                className="font-mono text-xs text-on-surface-variant transition-colors hover:text-signal-red"
              >
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-mono text-xs text-on-surface-variant transition-colors hover:text-signal-red"
              >
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 font-mono text-sm uppercase text-primary">
            Suporte
          </h3>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#"
                className="font-mono text-xs text-on-surface-variant transition-colors hover:text-signal-red"
              >
                Envio &amp; Rastreio
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-mono text-xs text-on-surface-variant transition-colors hover:text-signal-red"
              >
                Garantia
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
