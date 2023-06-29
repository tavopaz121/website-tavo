export default function NormalLogin() {
  const stylesDescripcion = {
    main: `text-semibase font-semibold inline-block relative `,
    before: `before:content-[''] before:absolute before:top-3 before:-left-1/4 before:w-1/5 before:h-0.5 before:bg-slate-900 `,
    after: `after:content-[''] after:absolute after:top-3 after:-right-1/4 after:w-1/5 after:h-0.5 after:bg-slate-900 `,
  }

  return (
    <div className="text-center">
      <p
        className={`descripcion-cuenta ${stylesDescripcion.main}`}
      >
        O cuenta healty food
      </p>
    </div>
  );
}

//ultima modificaion: solo se compacto el codigo de taillwind 