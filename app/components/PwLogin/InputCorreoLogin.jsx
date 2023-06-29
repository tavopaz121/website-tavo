import TextField from "../TextField/TextField";
import { HiMail } from 'react-icons/hi';

export default function InputCorreoLogin() {
  const stylesInput = {
    label: "block mb-2 text-xl font-medium text-gray-900 ",
    icon: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800 ",
    textField: "bg-slate-100 border border-gray-600 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-800 ",
  }

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

/*
<input
          type="email"
          id="input-group-1"
          placeholder="Su e-mail"
          value={eMail}
          onChange={onChange}
          required
          class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-300"
        >
        </input>
*/