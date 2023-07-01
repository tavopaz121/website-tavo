import { normalLoginStylesDescripcion } from './stylesLogin';

export default function DescriptionLogin() {
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
