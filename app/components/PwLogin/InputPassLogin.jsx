import { IoKeySharp } from 'react-icons/io5';

export default function InputPassLogin() {
  return (
    <div className="input-password-login">
      <label for="input-group-2" class="block mb-2 text-xl font-medium text-gray-900">Contraseña</label>
      <div class="relative mb-6">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-white">
          <IoKeySharp />
        </div>
        <input
          type="password"
          id="input-group-2"
          placeholder="Ingrese su contraseña"
          required
          class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 placeholder-gray-300">
        </input>
      </div>
    </div>
  );
}