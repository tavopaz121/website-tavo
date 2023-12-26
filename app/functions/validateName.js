export function validateName(name) {
  const nameRegex = /^\s*\S+(\s+\S+){1,}\s*$/;
  return nameRegex.test(name);
}
