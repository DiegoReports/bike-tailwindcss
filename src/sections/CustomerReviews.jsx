import ReviewCard from "../components/ReviewCard"
import { reviews } from "../constants"
import { motion } from 'framer-motion'

const CustomerReviews = () => {
  return (
      <section className="max-container">
        <motion.h3 
            className="font-palanquin text-center text-4xl font-bold"
            initial= {{ opacity: 0, y: 100 }}
            whileInView= {{ opacity: 1, y: 0 }}
            exit= {{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }}      
        >
          Oque nossos
          <span className="text-coral-red"> Clientes </span>
          estão dizendo?
        </motion.h3>

        <motion.div
            initial= {{ opacity: 0, y: 100 }}
            whileInView= {{ opacity: 1, y: 0 }}
            exit= {{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: 0.2 }} 
        >
        <p className="info-text m-auto mt-4 max-w-lg text-center">Veja oque alguns de nossos clientes estão dizendo sobre nossos produtos e equipamentos da loja <strong>Biker Store</strong>.</p>
        </motion.div>
        <motion.div 
            className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
            initial= {{ opacity: 0, x: -100 }}
            whileInView= {{ opacity: 1, x: 0 }}
            exit= {{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
          {reviews.map((review) =>(
            <ReviewCard 
              key={review.customerName}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </motion.div>

    </section>
  )
}

export default CustomerReviews