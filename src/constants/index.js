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
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' }
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
    bigShoe: bigBike1
  },
  {
    thumbnail: thumbnailBike2,
    bigShoe: bigBike2
  },
  {
    thumbnail: thumbnailBike3,
    bigShoe: bigBike3
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

export const equipment = [
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
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.'
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.'
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.'
  }
]

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!'
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
]

export const footerLinks = [
  {
    title: 'Products',
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
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' }
    ]
  },
  {
    title: 'Get in touch',
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
