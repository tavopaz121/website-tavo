import TextField from "~/routes/admin/TextField/TextField";
import { HiMail } from "react-icons/hi";

export default function MailLogin() {
  return (
    <>
      <TextField
        name="email"
        type="email"
        label="Correo"
        placeholder="tu@pensemosweb.com"
        icon={<HiMail data-testid="icon-mail" />}
        required
        data-cy="email-field"
        data-testid="input-mail"
      ></TextField>
    </>
  );
}
