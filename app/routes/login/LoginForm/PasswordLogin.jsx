import TextField from "~/routes/admin/TextField/TextField";
import { IoKeySharp } from "react-icons/io5";

export default function PasswordLogin() {
  return (
    <>
      <TextField
        name="password"
        type="password"
        label="Contraseña"
        placeholder="Tu contraseña"
        icon={<IoKeySharp data-testid="icon-key" />}
        required
        data-cy="password-field"
        data-testid="input-password"
      ></TextField>
    </>
  );
}
