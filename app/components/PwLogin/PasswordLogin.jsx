import TextField from "../TextField/TextField";
import { IoKeySharp } from "react-icons/io5";
import { stylesInput } from "./stylesLogin";

export default function PasswordLogin() {
  return (
    <div className="password-login">
      <label htmlFor='password' className={`${stylesInput.label}`}>
        Contraseña
      </label>
      <div className="relative mb-6">
        <div 
        className={`${stylesInput.icon}`}
        data-testid="icon-key"
        >
          <IoKeySharp />
        </div>
        <TextField
          idInput="password"
          name="password"
          placeholder="Tu contraseña"
          type="password"
          required
          data-cy="password-field"
          data-testid="input-password"
          className={`${stylesInput.textField}`}
        >
        </TextField>
      </div>
    </div>
  );
}