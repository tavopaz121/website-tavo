import ColaboraAprende from "./components/ColaboraAprende";
import CreaAsap from "./components/CreaAsap";
import Retroalimenta from "./components/Retroalimenta";
import AdaptaMejora from "./components/AdaptaMejora";
export default function MetodoAgil(){
    return(
        <section className="max-w-7xl lg:mx-auto px-4">
          <ColaboraAprende/>
          <CreaAsap/>
          <Retroalimenta/>
          <AdaptaMejora/>
        </section>
    )
}