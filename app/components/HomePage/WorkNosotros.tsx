export default function Metodo() {
  return (
    <>
      <p
        className="motion-safe:animate-fadeIn text-gray-800 font-semibold mb-4"
        style={{
          animationDelay: "0.8s",
          animationFillMode: "both",
          animationDuration: ".8s",
        }}
      >
        La adaptabilidad es clave en el mundo digital. Nuestra metodología de
        desarrolló web ágil se simplifica en 4 fases esenciales:
      </p>
      <ul className="text-gray-800 text-lg mb-10 flex flex-col gap-5">
        <li
          className="motion-safe:animate-bounceInDown"
          style={{
            animationDelay: "0.3s",
            animationFillMode: "both",
            animationDuration: "1s",
          }}
        >
          <p className="font-semibold text-xl">💡 Colabora y aprende</p>
          <p>
            Trabajamos codo a codo contigo para comprender tus objetivos y
            necesidades
          </p>
        </li>
        <li
          className="motion-safe:animate-bounceInDown"
          style={{
            animationDelay: "0.6s",
            animationFillMode: "both",
            animationDuration: "1s",
          }}
        >
          <p className="font-semibold text-xl">🚀 Crea ASAP</p>
          <p>
            Entregamos resultados en iteraciones rápidas y manejables.
            Permitiéndote ver el progreso de manera constante
          </p>
        </li>
        <li
          className="motion-safe:animate-bounceInDown"
          style={{
            animationDelay: "0.9s",
            animationFillMode: "both",
            animationDuration: "1s",
          }}
        >
          <p className="font-semibold text-xl">🔄 Retroalimenta</p>
          <p>
            Ponemos a prueba lo que hemos construido y recopilamos tus
            comentarios permitiendonos identificar áreas de mejora y ajustar
            nuestro camino
          </p>
        </li>
        <li
          className="motion-safe:animate-bounceInDown"
          style={{
            animationDelay: "1.2s",
            animationFillMode: "both",
            animationDuration: "1s",
          }}
        >
          <p className="font-semibold text-xl">🌟 Adapta/mejora</p>
          <p>
            Adaptamos nuestro enfoque y mejoramos continuamente nuestros
            procesos
          </p>
        </li>
      </ul>
    </>
  );
}
