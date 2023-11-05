import { bike8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold text-yellow-50 lg:max-w-lg">
          Trazemos para você, Bikes de
          <span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Qualidade</span>
      </h2>
        <p className="mt-4 lg:max-w-lg info-text">Bicicletas que combinam <strong>estilo</strong> e <strong>desempenho</strong>, proporcionando a você uma experiência de pedal única. Nossos produtos são projetados para os ciclistas mais exigentes, com atenção meticulosa aos detalhes, desde a <strong>estética</strong> elegante até o <strong>desempenho</strong> excepcional.</p>

        <p className="mt-6 lg:max-w-lg info-text">Descubra uma maneira nova e emocionante de explorar o mundo sobre duas rodas com nossas bicicletas de qualidade superior.</p>

        <div className="mt-11 ">
        <Button label="Ver Detalhes"/>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
          src={bike8}
          alt="Modelo Bike numero 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>

    </section>
  )
}

export default SuperQuality