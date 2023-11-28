import { validateEmail } from "./validateEmail";
import { validateName } from "./validateName";
import { validateTel } from "./validateTel";
export function validateFields(data) {
  const missingFields = [];

  
  if (!validateName(data.name)) {
    missingFields.push("name");
  }
  if (!validateEmail(data.email)) {
    missingFields.push("email");
  }
 if (!validateTel(data.tel)) {
   missingFields.push("tel");
 }
  if (data.company === "") {
    missingFields.push("company");
  }
  if (data.message === "") {
    missingFields.push("message");
  } else if (data.message.length < 20) {
    missingFields.push("messageLength");
  }

  return missingFields;
}
