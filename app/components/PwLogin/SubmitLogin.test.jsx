import { describe, it, beforeEach, expect } from "vitest";
import { render } from "@testing-library/react";
import SubmitLogin from './SubmitLogin.jsx';

describe('When the SubmitLogin is rendered', () => {
    let component;

    beforeEach(() => {
        component = render(<SubmitLogin></SubmitLogin>)
    });

    it('Then a button "Ingresar" should be show', async () => {
        const buttonSing = await component.getByTestId('sing-in');
        expect(buttonSing).toBeInTheDocument();
    });
})