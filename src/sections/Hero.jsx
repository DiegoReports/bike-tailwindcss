import Button from "../components/Button"
import { useState } from "react"
import { arrowRight } from "../assets/icons"
import { statistics, bikes } from '../constants'
/* import { bigShoe1 } from "../assets/images" */
import { bigBike1 } from "../assets/images"
import BikeCard from "../components/BikeCard"

const Hero = () => {
  // alterar "bigShoe1" pela nova imagem "bigBike1"
  const [bigBikeImage, setbigBikeImage] = useState(bigBike1)
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Para quem busca aventura</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text[72px] max-sm:leading-[82px] font-bold text-primary">
          <span className="xl:bg-zinc-900 xl:whitespace-nowrap relative z-10 pr-10 text-primary">Novos Modelos</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Biker</span> Shop
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Encontre as novidades para pedalar com segurança, velocidade, e com bom preço.</p>
        <Button 
          label="Show now"
          iconURL={arrowRight}
        />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
            {statistics.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-palanquin font-bold text-primary">{stat.value}</p>
                <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
              </div>
            ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img
          src={bigBikeImage}
          alt="bike collection"
          width={510}
          height={400}
          className="object-contain relative z-10"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {bikes.map((bike) => (
            <div key={bike}>
              <BikeCard
                imgURL={bike} 
                changeBigBikeImage = {(bike) => setbigBikeImage (bike)}
                bigBikeImage={bigBikeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero