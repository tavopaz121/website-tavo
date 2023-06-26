import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect'
import FormLogin from './FormLogin';
import { render } from '@testing-library/react'

describe("FormLogin", ()=>{
  const encabezado = render(<FormLogin/>);
})