export function validateName(name) {
 const nameRegex = /^\s*\S+(\s+\S+){2,}\s*$/;
  return nameRegex.test(name);
 
}