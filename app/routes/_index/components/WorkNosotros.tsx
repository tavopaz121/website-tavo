export default function Metodo() {
  const durationBetween = 0.3;
  const durationAnimation = 1;
  let delay = 0.3;

  const listPhase = [
    {
      title: "💡Colabora y aprende.",
      description:
        "Trabajamos codo a codo contigo para comprender tus objetivos y necesidades.",
    },
    {
      title: "🚀Crea ASAP.",
      description:
        "Entregamos resultados en iteraciones rápidas y manejables. Permitiéndote ver el progreso de manera constante.",
    },
    {
      title: "🔄Retroalimenta.",
      description:
        "Ponemos a prueba lo que hemos construido y recopilamos tus comentarios permitiéndonos identificar áreas de mejora y ajustar nuestro camino.",
    },
    {
      title: "🌟Adapta/mejora.",
      description:
        "Adaptamos nuestro enfoque y mejoramos continuamente nuestros procesos",
    },
  ];

  return (
    <div>
      <p
        className="text-gray-800 font-semibold mb-4"
        style={{
          animationDelay: `${delay}s`,
          animationFillMode: "both",
          animationDuration: ".8s",
        }}
      >
        La adaptabilidad es clave en el mundo digital. Nuestra metodología de
        desarrolló ágil se simplifica en 4 fases esenciales:
      </p>
      <ul className="text-gray-800 text-lg mb-10 flex flex-col gap-5">
        {listPhase.map((tangLi) => (
          <LiTag
            key={tangLi.title}
            {...tangLi}
            delay={(delay += durationBetween)}
            duration={durationAnimation}
          />
        ))}
      </ul>
    </div>
  );
}

interface LiParam {
  title: string;
  description: string;
  delay: number;
  duration: number;
}

const LiTag = ({ title, description, delay, duration }: LiParam) => {
  return (
    <li
      className=""
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
        animationDuration: `${duration}s`,
      }}
    >
      <p className="font-heading text-xl">{title}</p>
      <p>{description}</p>
    </li>
  );
};
