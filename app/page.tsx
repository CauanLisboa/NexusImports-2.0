import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { TrustBadges } from '@/components/trust-badges'
import { FeaturedProduct } from '@/components/featured-product'
import { ProductGrid } from '@/components/product-grid'
import { PerfumeCatalog } from '@/components/perfume-catalog'
import { SiteFooter } from '@/components/site-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background">
      <SiteHeader />
      <main className="flex-grow pt-20">
        <HeroSection />
        <TrustBadges />
        <FeaturedProduct />
        <ProductGrid />
        <PerfumeCatalog />
      </main>
      <SiteFooter />
    </div>
  )
}
