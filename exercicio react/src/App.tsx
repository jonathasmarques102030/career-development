import React from "react"
import  logo  from "./assets/logo.svg"
import "./App.css"
import poster from "./assets/poster-111.svg"
import logoFooter from "./assets/logo-footer.svg"
 
export default function App(){
  return(
    <>
      <header>
        <nav className="header-inicial">
          <a href="">
            <img src={logo} alt="" width="100px" />
          </a>
          <ul>
            <li>Quem somos</li>
            <li>O que fazemos</li>
            <li>Imóveis a venda</li>
          </ul>
          <br />
          <button>Fale conosco</button>
        </nav>
      </header>
      <main>
        <div className="Content">
        <div className="main-superior">
                <div className="div-inicio">
                <h1>Um novo jeito de construir</h1>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusantium neque id dolorum? Quas corrupti, eos quo molestias error pariatur dolorem. Aut distinctio maiores magni quam itaque aperiam voluptas necessitatibus!</h2>
                <div className="inicio">
                    <div className="second-division">
                </div>
                </div>
                </div>
                <div className="div-meio">
                <img id="imagem-principal" src={poster} alt=""/>
                </div>
            </div>
        </div>
      </main>
      <footer>
      <div className="inicio-footer">
    <a href="/"><img id="primeira" src={logoFooter} alt="" width="150px"/></a>
    </div>
      </footer>
      </>
  )
}