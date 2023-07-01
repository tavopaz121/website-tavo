import TextField from '../TextField/TextField';
import { IoKeySharp } from 'react-icons/io5';
import { stylesInput } from "./stylesLogin";

export default function passwordLogin() {
  return (
    <div className="input-password-login">
      <label htmlFor='password' className={`${stylesInput.label}`}>
        Contraseña
      </label>
      <div className="relative mb-6">
        <div className={`${stylesInput.icon}`}>
          <IoKeySharp />
        </div>
        <TextField
          idInput='password'
          name="password"
          placeholder="Tu contraseña"
          type="password"
          required
          data-cy="password-field"
          className={`${stylesInput.textField}`}
        >
        </TextField>
      </div>
    </div>
  );
}
