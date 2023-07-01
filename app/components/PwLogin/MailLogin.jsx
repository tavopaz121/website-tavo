import TextField from "../TextField/TextField";
import { HiMail } from "react-icons/hi";
import { stylesInput } from "./stylesLogin";

export default function mailLogin() {
  return (
    <div className="input-correo-login">
      <label htmlFor="email" className={`${stylesInput.label}`}>
        Correo
      </label>
      <div className="relative mb-6">
        <div className={`${stylesInput.icon}`}>
          <HiMail />
        </div>
        <TextField
          idInput="email"
          name="email"
          placeholder="tu@pensemosweb.com"
          type="email"
          required
          data-cy="email-field"
          className={`${stylesInput.textField}`}
        >
        </TextField>
      </div>
    </div>
  )
}
