import { normalLoginStylesDescripcion } from './stylesLogin';

export default function NormalLogin() {
  return (
    <div className="text-center">
      <p
        className={`descripcion-cuenta ${normalLoginStylesDescripcion.main}`}
      >
        O cuenta healty food
      </p>
    </div>
  );
}
