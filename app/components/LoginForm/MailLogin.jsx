import TextField from "../TextField/TextField";
import { HiMail } from "react-icons/hi";
import { stylesInput } from "./stylesLogin";

export default function MailLogin() {
  return (
    <div>
      <TextField
        name="email"
        placeholder="tu@pensemosweb.com"
        type="email"
        label="Correo"
        clsLabel={stylesInput.label}
        icon={<HiMail data-testid="icon-mail"  />}
        clsNInput={stylesInput.textField}
        required
        data-cy="email-field"
        data-testid="input-mail"
      >
      </TextField>
    </div>
  )
}