import { offer } from "../assets/images"
import Button from "../components/Button"
import { purchase } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold text-yellow-50 lg:max-w-lg">
          <span className="text-coral-red"> Condições</span>
          <span> Especiais</span>
      </h2>
        <p className="mt-4 lg:max-w-lg info-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur magnam sunt corporis provident quo amet deleniti voluptatum vel omnis quia officiis aliquid, maiores nisi quod nam error ipsa inventore consectetur!</p>

        <p className="mt-6 lg:max-w-lg info-text">Descubra uma maneira nova e emocionante de explorar o mundo sobre duas rodas com nossas bicicletas de qualidade superior.</p>

        <div className="mt-11 flex flex-wrap gap-4">
        <Button label="Compre aqui" iconURL={purchase}/>
        <Button label="Veja detalhes" backgroundColor="bg-transparent" borderColor="border-slate-gray" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer