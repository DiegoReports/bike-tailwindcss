const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red transition ease-in-out delay-150 hover:bg-transparent hover:text-coral-red">
      {label}
        <img
          src={iconURL}
          alt="icone de seta esquerda"
          className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button