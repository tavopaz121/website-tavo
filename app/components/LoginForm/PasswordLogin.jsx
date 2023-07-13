import TextField from "../TextField/TextField";
import { IoKeySharp } from "react-icons/io5";
import { stylesInput } from "./stylesLogin";

export default function PasswordLogin() {
  return (
    <div>
      <TextField
        name="password"
        type="password"
        label="Contraseña"
        clsLabel={stylesInput.label}
        icon={<IoKeySharp data-testid="icon-key" />}
        placeholder="Tu contraseña"
        clsNInput={`${stylesInput.textField}`}
        required
        data-cy="password-field"
        data-testid="input-password"
      >
      </TextField>
    </div>
  );
}