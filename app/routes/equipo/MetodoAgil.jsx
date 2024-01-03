import ColaboraAprende from "./components/ColaboraAprende";
import CreaAsap from "./components/CreaAsap";
import Retroalimenta from "./components/Retroalimenta";
import AdaptaMejora from "./components/AdaptaMejora";

import adaptaMejora from "../../assets/imgs//equipo/Unsplash-adapta.webp";
import colaboraAprende from "../../assets/imgs//equipo/Unsplash-colaborayaprende.webp";
import creaAsap from "../../assets/imgs/equipo/Unsplash-creaASAP.webp";
import retroalimenta from "../../assets/imgs/equipo/Unsplash-retroalimenta.webp";
export default function MetodoAgil(){
    return(
        <section className="max-w-7xl lg:mx-auto px-4">
          <ColaboraAprende image={{src: colaboraAprende, alt:"Colabora y aprende", with:500, height:350}}/>
          <CreaAsap image={{src: creaAsap, alt:"Crea ASAP", with:500, height:350}}/>
          <Retroalimenta image={{src: retroalimenta, alt:"Retroalimenta", with:500, height:350}}/>
          <AdaptaMejora  image={{src: adaptaMejora, alt:"Adapta y mejora", with:500, height:350}}/>
        </section>
    )
}