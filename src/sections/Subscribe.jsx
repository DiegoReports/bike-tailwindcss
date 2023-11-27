import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-yellow-50 text-4xl leading-[68px] max-w-xl font-palanquin font-bold">Inscreva-se para <span className="text-coral-red">Novidades </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text" 
          placeholder="subscribe@bikerstore.com"
          className="input bg-transparent"
        />
        <div className="flex max-sm:justify-center items-center max-sm:w-full">
          <Button
            label="Inscreva-se"
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe