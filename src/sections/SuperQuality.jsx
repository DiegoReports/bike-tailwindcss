'use-client'

import { bike8 } from "../assets/images"
import Button from "../components/Button"
import { motion } from 'framer-motion'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <motion.h2 
          className="mt-10 font-palanquin text-4xl capitalize font-bold text-yellow-50 lg:max-w-lg"
          initial= {{ opacity: 0, x: -100 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
      >
          Trazemos para você, Bikes de
          <motion.span 
              className="text-coral-red"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}        
          > Super</motion.span>
          <motion.span 
              className="text-coral-red"
              initial={{ opacity: 0, scale:0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1 }}        
          > Qualidade</motion.span>
      </motion.h2>
        <p className="mt-4 lg:max-w-lg info-text">Bicicletas que combinam <strong>estilo</strong> e <strong>desempenho</strong>, proporcionando a você uma experiência de pedal única. Nossos produtos são projetados para os ciclistas mais exigentes, com atenção meticulosa aos detalhes, desde a <strong>estética</strong> elegante até o <strong>desempenho</strong> excepcional.</p>

        <p className="mt-6 lg:max-w-lg info-text">Descubra uma maneira nova e emocionante de explorar o mundo sobre duas rodas com nossas bicicletas de qualidade superior.</p>

        <motion.div 
          className="mt-11"
          initial= {{ opacity: 0, x: -200 }}
          whileInView= {{ opacity: 1, x: 0 }}
          exit= {{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
        >
        <Button label="Ver Detalhes"/>
        </motion.div >
      </div>

      <motion.div 
          className="flex-1 flex justify-center items-center"
          initial= {{ opacity: 0, y: -100 }}
          whileInView= {{ opacity: 1, y: 0 }}
          exit= {{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img 
          src={bike8}
          alt="Modelo Bike numero 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>

    </section>
  )
}

export default SuperQuality