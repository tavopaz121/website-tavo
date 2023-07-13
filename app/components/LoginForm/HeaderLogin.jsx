export default function HeaderLogin() {
  const headerStyles = `rounded-t-lg relative mb-6 bg-slate-300 -mx-12 -mt-5 px-8 pt-4 max-[640px]:-mx-6 max-[640px]:px-6`;
  return (
    <div
      className={headerStyles}
    >
      <h1
        className="text-center"
      >
        INICIAR SESIÓN
      </h1>
      <p data-testid="description" className="text-justify">
        Bienvenido al inicio de sesión de Healty Food, aplicación local para ayudar a promover una buena salud a través de los alimentos.
      </p>
    </div>
  );
}