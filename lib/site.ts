export const WHATSAPP_NUMBER = '5591991909232'
export const WHATSAPP_DISPLAY = '+55 (91) 99190-9232'
export const CONTACT_EMAIL = 'nexusimportspy@gmail.com'

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type Product = {
  slug: string
  brand: string
  name: string
  price?: string
  image: string
  alt: string
}

export type Perfume = {
  slug: string
  brand: string
  name: string
  volume: string
  price: string
  image: string
  alt: string
}

export const perfumes: Perfume[] = [
  {
    slug: 'lattafa-asad',
    brand: 'Lattafa',
    name: 'Lattafa Asad',
    volume: '100ml',
    price: 'R$ 230,00',
    image: '/perfumes/lattafa-asad.png',
    alt: 'Perfume Lattafa Asad masculino em fundo preto',
  },
  {
    slug: 'afnan-9pm',
    brand: 'Afnan',
    name: 'Afnan 9PM',
    volume: '100ml',
    price: 'R$ 250,00',
    image: '/perfumes/afnan-9pm.png',
    alt: 'Perfume Afnan 9PM masculino em fundo preto',
  },
  {
    slug: 'armaf-club-de-nuit',
    brand: 'Armaf',
    name: 'Club de Nuit Intense',
    volume: '105ml',
    price: 'R$ 290,00',
    image: '/perfumes/armaf-club-de-nuit.png',
    alt: 'Perfume Armaf Club de Nuit Intense Man em fundo preto',
  },
  {
    slug: '212-vip-men',
    brand: 'Carolina Herrera',
    name: '212 VIP Men',
    volume: '100ml',
    price: 'R$ 420,00',
    image: '/perfumes/212-vip-men.png',
    alt: 'Perfume 212 VIP Men da Carolina Herrera em fundo preto',
  },
  {
    slug: 'phantom',
    brand: 'Paco Rabanne',
    name: 'Phantom',
    volume: '100ml',
    price: 'R$ 520,00',
    image: '/perfumes/phantom.png',
    alt: 'Perfume Phantom da Paco Rabanne em fundo preto',
  },
  {
    slug: 'sauvage',
    brand: 'Dior',
    name: 'Sauvage',
    volume: '100ml',
    price: 'R$ 580,00',
    image: '/perfumes/sauvage.png',
    alt: 'Perfume Sauvage da Dior em fundo preto',
  },
  {
    slug: '212-vip-black',
    brand: 'Carolina Herrera',
    name: '212 VIP Black',
    volume: '100ml',
    price: 'R$ 480,00',
    image: '/perfumes/212-vip-black.png',
    alt: 'Perfume 212 VIP Black da Carolina Herrera em fundo preto',
  },
  {
    slug: 'phantom-branco',
    brand: 'Paco Rabanne',
    name: 'Phantom',
    volume: '100ml',
    price: 'R$ 460,00',
    image: '/perfumes/phantom-white.png',
    alt: 'Perfume Phantom edição branca da Paco Rabanne em fundo preto',
  },
  {
    slug: 'scandal',
    brand: 'Jean Paul Gaultier',
    name: 'Scandal',
    volume: '100ml',
    price: 'R$ 480,00',
    image: '/perfumes/scandal.png',
    alt: 'Perfume Scandal da Jean Paul Gaultier em fundo preto',
  },
  {
    slug: '212-men-nyc',
    brand: 'Carolina Herrera',
    name: '212 Men NYC',
    volume: '100ml',
    price: 'R$ 450,00',
    image: '/perfumes/212-men-nyc.png',
    alt: 'Perfume 212 Men NYC da Carolina Herrera em fundo preto',
  },
  {
    slug: '1-million',
    brand: 'Paco Rabanne',
    name: '1 Million',
    volume: '100ml',
    price: 'R$ 380,00',
    image: '/perfumes/1-million.png',
    alt: 'Perfume 1 Million da Paco Rabanne em fundo preto',
  },
  {
    slug: 'invictus',
    brand: 'Rabanne',
    name: 'Invictus',
    volume: '100ml',
    price: 'R$ 380,00',
    image: '/perfumes/invictus.png',
    alt: 'Perfume Invictus da Rabanne em fundo preto',
  },
  {
    slug: '212-men-heroes',
    brand: 'Carolina Herrera',
    name: '212 Men Heroes Forever Young',
    volume: '90ml',
    price: 'R$ 450,00',
    image: '/perfumes/212-heroes.png',
    alt: 'Perfume 212 Men Heroes Forever Young da Carolina Herrera em fundo preto',
  },
  {
    slug: 'pure-xs',
    brand: 'Paco Rabanne',
    name: 'Pure XS',
    volume: '100ml',
    price: 'R$ 380,00',
    image: '/perfumes/pure-xs.png',
    alt: 'Perfume Pure XS da Paco Rabanne em fundo preto',
  },
  {
    slug: 'scuderia-ferrari-black',
    brand: 'Ferrari',
    name: 'Scuderia Ferrari Black',
    volume: '100ml',
    price: 'R$ 220,00',
    image: '/perfumes/ferrari-black.png',
    alt: 'Perfume Scuderia Ferrari Black em fundo preto',
  },
]

export const perfumesFemininos: Perfume[] = [
  {
    slug: 'lattafa-fakhar-rose',
    brand: 'Lattafa',
    name: 'Lattafa Fakhar Rose',
    volume: '100ml',
    price: 'R$ 230,00',
    image: '/perfumes/lattafa-fakhar.png',
    alt: 'Perfume feminino Lattafa Fakhar Rose em fundo preto',
  },
  {
    slug: 'lattafa-atheeri',
    brand: 'Lattafa',
    name: 'Lattafa Atheeri',
    volume: '100ml',
    price: 'R$ 330,00',
    image: '/perfumes/lattafa-atheeri.png',
    alt: 'Perfume feminino Lattafa Atheeri em fundo preto',
  },
  {
    slug: 'al-wataniah-sabah',
    brand: 'Al Wataniah',
    name: 'Al Wataniah Sabah',
    volume: '100ml',
    price: 'R$ 200,00',
    image: '/perfumes/al-wataniah-sabah.png',
    alt: 'Perfume feminino Al Wataniah Sabah em fundo preto',
  },
  {
    slug: 'scandal-fem',
    brand: 'Jean Paul Gaultier',
    name: 'Scandal',
    volume: '80ml',
    price: 'R$ 480,00',
    image: '/perfumes/scandal-fem.png',
    alt: 'Perfume feminino Scandal da Jean Paul Gaultier em fundo preto',
  },
  {
    slug: 'olympea',
    brand: 'Paco Rabanne',
    name: 'Olympéa',
    volume: '80ml',
    price: 'R$ 480,00',
    image: '/perfumes/olympea.png',
    alt: 'Perfume feminino Olympéa da Paco Rabanne em fundo preto',
  },
  {
    slug: 'my-way',
    brand: 'Giorgio Armani',
    name: 'My Way',
    volume: '90ml',
    price: 'R$ 830,00',
    image: '/perfumes/my-way.png',
    alt: 'Perfume feminino My Way da Giorgio Armani em fundo preto',
  },
  {
    slug: 'classique',
    brand: 'Jean Paul Gaultier',
    name: 'Classique',
    volume: '100ml',
    price: 'R$ 470,00',
    image: '/perfumes/classique.png',
    alt: 'Perfume feminino Classique da Jean Paul Gaultier em fundo preto',
  },
  {
    slug: 'lady-million',
    brand: 'Paco Rabanne',
    name: 'Lady Million',
    volume: '80ml',
    price: 'R$ 490,00',
    image: '/perfumes/lady-million.png',
    alt: 'Perfume feminino Lady Million da Paco Rabanne em fundo preto',
  },
  {
    slug: 'miss-dior',
    brand: 'Dior',
    name: 'Miss Dior',
    volume: '100ml',
    price: 'R$ 690,00',
    image: '/perfumes/miss-dior.png',
    alt: 'Perfume feminino Miss Dior da Dior em fundo preto',
  },
  {
    slug: '212-vip-rose',
    brand: 'Carolina Herrera',
    name: '212 VIP Rosé',
    volume: '80ml',
    price: 'R$ 480,00',
    image: '/perfumes/212-vip-rose.png',
    alt: 'Perfume feminino 212 VIP Rosé da Carolina Herrera em fundo preto',
  },
  {
    slug: 'black-xs-fem',
    brand: 'Paco Rabanne',
    name: 'Black XS',
    volume: '80ml',
    price: 'R$ 480,00',
    image: '/perfumes/black-xs-fem.png',
    alt: 'Perfume feminino Black XS da Paco Rabanne em fundo preto',
  },
  {
    slug: 'light-blue',
    brand: 'Dolce & Gabbana',
    name: 'Light Blue',
    volume: '100ml',
    price: 'R$ 450,00',
    image: '/perfumes/light-blue.png',
    alt: 'Perfume feminino Light Blue da Dolce & Gabbana em fundo preto',
  },
  {
    slug: 'linterdit',
    brand: 'Givenchy',
    name: "L'Interdit",
    volume: '80ml',
    price: 'R$ 600,00',
    image: '/perfumes/linterdit.png',
    alt: "Perfume feminino L'Interdit da Givenchy em fundo preto",
  },
  {
    slug: 'la-vie-est-belle',
    brand: 'Lancôme',
    name: 'La Vie Est Belle',
    volume: '100ml',
    price: 'R$ 490,00',
    image: '/perfumes/la-vie-est-belle.png',
    alt: 'Perfume feminino La Vie Est Belle da Lancôme em fundo preto',
  },
  {
    slug: 'libre',
    brand: 'Yves Saint Laurent',
    name: 'Libre',
    volume: '90ml',
    price: 'R$ 670,00',
    image: '/perfumes/libre.png',
    alt: 'Perfume feminino Libre da Yves Saint Laurent em fundo preto',
  },
]

export const featuredProduct = {
  slug: 'lattafa-asad',
  brand: 'LATTAFA',
  name: 'Lattafa Asad EDP 100ml',
  badge: 'Top Seller',
  price: 'R$ 230,00',
  image: '/products/lattafa-asad.png',
  alt: 'Perfume de luxo Lattafa Asad em fundo preto com iluminação vermelha',
  description:
    'Lattafa Asad Eau de Parfum masculino, 100 ml. Abertura de pimenta preta e bergamota sobre um coração de tabaco e café, com base amadeirada de âmbar e baunilha. Presença marcante e alta fixação.',
}

export const products: Product[] = [
  {
    slug: 'redmi-watch-5-active',
    brand: 'XIAOMI',
    name: 'Redmi Watch 5 Active',
    price: 'R$ 350,00',
    image: '/products/smartwatch.png',
    alt: 'Smartwatch Xiaomi Redmi Watch 5 Active em fundo escuro',
  },
  {
    slug: 'iphone-17-pro-max',
    brand: 'APPLE',
    name: 'iPhone 17 Pro Max 256GB',
    image: '/products/iphone.png',
    alt: 'iPhone 17 Pro Max em titânio em estúdio escuro',
  },
  {
    slug: 'razer-viper-v4-pro',
    brand: 'RAZER',
    name: 'Viper V4 Pro Wireless',
    image: '/products/mouse.png',
    alt: 'Mouse gamer sem fio Razer Viper V4 Pro em setup escuro',
  },
  {
    slug: 'razer-ornata-v3-tkl',
    brand: 'RAZER',
    name: 'Ornata V3 TKL',
    image: '/products/keyboard.png',
    alt: 'Teclado gamer Razer Ornata V3 TKL com iluminação RGB sutil',
  },
]
