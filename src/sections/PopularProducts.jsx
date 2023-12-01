'use-client'

import PopularProductCard from "../components/PopularProductCard"
import { equipments } from "../constants"
import { motion } from 'framer-motion'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <motion.div 
          className="flex flex-col justify-start gap-5"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl text-yellow-50 font-bold font-palanquin">Nossas Bikes 
        <span 
          className="text-coral-red"
        > Populares
        </span></h2>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat">Quer viver uma experiencia de aventura em sua mais alta qualidade? Escolha o modelo de Bike ideal e desbrave o seu percuso de forma rápida e segura.</p>

      </motion.div>

      <motion.div 
          className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
          initial={{ opacity: 0, scale:0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 , delay: 0.2}}
      >
        {equipments.map((equipment) => (
          <PopularProductCard
            key={equipment.name}
            {...equipment}
          />
        ))}
      </motion.div>
    </section>
  )
}

export default PopularProducts