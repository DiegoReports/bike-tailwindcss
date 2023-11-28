import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img 
              src={footerLogo} 
              alt="icone de logo BikerStore" 
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 leading-7 font-montserrat text-white-400 sm:max-w-sm">Encontre uma de nossas lojas físicas mais perto de você e venha nos fazer uma visita.</p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:bg-coral-red ">
                <img 
                  src={icon.src}
                  alt={icon.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section) => (
                <div key={section}>
                  <h4 className="text-white font-montserrat font-medium mb-6 text-2xl leading-normal">{section.title}</h4>
                  <ul>
                    {section.links.map((link) => (
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 duration-300">
                        <a>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer