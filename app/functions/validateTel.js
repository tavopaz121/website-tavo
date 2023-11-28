export function validateTel(tel) {
  const telRegex = /^$|^\d{10}$/;

   return telRegex.test(tel);
}