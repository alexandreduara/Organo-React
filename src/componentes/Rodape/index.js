import './Rodape.css'

const icones = [
    {
      href: "/",
      alt: "Facebook",
      src: "/imagens/fb.png"
      
  },
    {
      href: "/",
      alt: "Twitter",
      src: "/imagens/tw.png"
  },
    {
      href: "/",
      alt: "Instagram",
      src: "/imagens/ig.png"
  },

  ]


const Rodape = (props) => {
    return(
        <section className="rodape">
            <ul>
                {icones.map((icone) => (<li key={icone.alt}><a href={icone.href}><img  src={icone.src} alt={icone.alt} /></a></li>))}
            </ul>
            <img src="/imagens/logo.png" alt="" />
            <h6>Desenvolvido por Alura.</h6>
        </section>
    )
}

export default Rodape