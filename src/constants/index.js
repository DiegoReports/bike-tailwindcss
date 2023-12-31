import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter
} from '../assets/icons'
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  bigBike1,
  bigBike2,
  bigBike3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  bike4,
  bike5,
  bike6,
  bike7,
  thumbnailBike1,
  thumbnailBike2,
  thumbnailBike3,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3
} from '../assets/images'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#products', label: 'Nossas Bikes' },
  { href: '#about-us', label: 'Sobre nós' },
  { href: '#specialOffer', label: 'Ofertas' },
  { href: '#testimonials', label: 'Depoimentos' },
  { href: '#contact-us', label: 'Contato' }
]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3
  }
]

export const bikes = [
  {
    thumbnail: thumbnailBike1,
    bigBike: bigBike1
  },
  {
    thumbnail: thumbnailBike2,
    bigBike: bigBike2
  },
  {
    thumbnail: thumbnailBike3,
    bigBike: bigBike3
  }
]

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' }
]

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: '$200.20'
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: '$210.20'
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-100',
    price: '$220.20'
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-001',
    price: '$230.20'
  }
]

export const equipments = [
  {
    imgURL: bike4,
    name: 'Silver Air Street-01',
    price: '$200.20'
  },
  {
    imgURL: bike5,
    name: 'Silver Air Street-10',
    price: '$210.20'
  },
  {
    imgURL: bike6,
    name: 'Silver Air Street-100',
    price: '$220.20'
  },
  {
    imgURL: bike7,
    name: 'Silver Air Street-001',
    price: '$230.20'
  }
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Entrega rápida',
    subtext:
      'Levamos sua bike o mais rápido possível, em qualquer lugar do Brasil que você estiver.'
  },
  {
    imgURL: shieldTick,
    label: 'Pagamento Seguro',
    subtext:
      'Tenha uma experiência segura e com sigilo de dados ao realizar seu pagamento conosco.'
  },
  {
    imgURL: support,
    label: 'Amamos te ajudar',
    subtext:
      'Nosso time de especialista é dedicado em tirar dúvidas e dar todo suporte que você precisar.'
  }
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Charles Alves',
    rating: 4.5,
    feedback:
      'A atenção aos detalhes e a qualidade do produto superaram minhas expectativas. Altamente recomendado!'
  },
  {
    imgURL: customer2,
    customerName: 'Layla Merx',
    rating: 4.5,
    feedback:
      'A bicicleta dos meus sonhos! Não só atendeu como superou minhas expectativas. Com certeza serei um cliente recorrente!'
  }
]

export const footerLinks = [
  {
    title: 'Produtos',
    links: [
      { name: 'Silver Mountain 1', link: '/' },
      { name: 'Silver Slim 1', link: '/' },
      { name: 'Silver Street 1', link: '/' },
      { name: 'Silver Race 2', link: '/' },
      { name: 'Biker Blacke Racer', link: '/' },
      { name: 'Biker Milestone', link: '/' }
    ]
  },
  {
    title: 'Suporte',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' }
    ]
  },
  {
    title: 'Entre em Contato',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' }
    ]
  }
]

export const socialMedia = [
  { src: facebook, alt: 'facebook logo' },
  { src: twitter, alt: 'twitter logo' },
  { src: instagram, alt: 'instagram logo' }
]
