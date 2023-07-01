import { descriptionLoginStyles } from './stylesLogin';

export default function DescriptionLogin() {
  return (
    <div className="text-center">
      <p
        className={`description-account ${descriptionLoginStyles.main}`}
      >
        O cuenta healty food
      </p>
    </div>
  );
}