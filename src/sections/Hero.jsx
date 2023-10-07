import { arrowRight } from "../assets/icons"
import Button from "../components/Button"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Para quem busca aventura</p>
        <h1>
          <span>Novos Modelos</span>
          <br />
          <span>Biker</span>
          Shop
        </h1>
        <p>Encontre as novidades para pedalar com segurança, velocidade, e com bom preço.</p>
        <Button 
          label="Show now"
          iconURL={arrowRight}
        />
      </div>
    </section>
  )
}

export default Hero