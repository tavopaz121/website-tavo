import { IoKeySharp } from 'react-icons/io5';
import TextField from '../TextField/TextField';

export default function InputPassLogin() {
  return (
    <div className="input-password-login">
      <label className="block mb-2 text-xl font-medium text-gray-900">Contraseña</label>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800">
          <IoKeySharp />
        </div>
        <TextField
          name="password"
          placeholder="Tu contraseña"
          type="password"
          className="bg-slate-100 border border-gray-600 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-800"
          data-cy="password-field"
        >
        </TextField>
      </div>
    </div>
  );
}

/*
<TextField
          label="Contraseña"
          name="password"
          placeholder="Tu contraseña"
          type="password"
        >
        </TextField>

<input
          type="password"
          id="input-group-2"
          placeholder="Ingrese su contraseña"
          required
          class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-300"
        >
        </input>
*/