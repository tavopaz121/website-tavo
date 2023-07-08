import { screen } from '@testing-library/dom';
import { render, cleanup } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { expect, vi } from 'vitest';
import TextField from './TextField';
import { HiMail } from "react-icons/hi";

describe('When TextField is rendered', () => {
  afterEach(() => {
    cleanup();
  });

  it('Then a div TextField should existed', () => {
    render(
      <TextField
        name="email"
        type="email"
      />
    );

    const input: HTMLDivElement = screen.getByTestId('TextField');
    expect(input).toBeInTheDocument();
  });

  it('Then it should render correctly with label', () => {
    const view = render(
      <TextField
        name="email"
        type="email"
        label="Correo"
      />
    );

    const label = view.getByLabelText('Correo');
    expect(label).toBeInTheDocument();
  });

  it('Then it is not allow submit with an empty required field', async () => {
    const spy = vi.fn();
    const view = render(
      <form onSubmit={spy}>
        <TextField
          label="Nombre"
          name="nombre"
          type="text"
          required
        />
        <button type="submit">Send</button>
      </form>
    );

    const btn = view.getByRole('button');
    await userEvent.click(btn);

    expect(spy).not.toHaveBeenCalled();
  });

  it('Then type should called to onChange', async () => {
    const spy = vi.fn();
    const view = render(
      <TextField
        label="Nombre"
        name="nombre"
        type="text"
        required
        onChange={spy}
      />
    );

    const field = view.getByLabelText('Nombre');
    await userEvent.type(field, 'Jaime');

    expect(spy).toHaveBeenCalled();
  });

  it('Then a icon should be exited', () => {
    const view = render(
      <TextField
        label="Correo"
        name="mail"
        type="email"
        icon={<HiMail data-testid="icon-mail" />}
        required
      />
    );

    const icon = view.getByTestId('icon-mail');
    expect(icon).toBeInTheDocument();
  });

  it('Then, if an error exited, a error messague should be show', () => {
    const view = render(
      <TextField
        label="Correo"
        name="mail"
        type="email"
        error="Not fund mail"
        required
      />
    );

    const errorMessage = view.getByText('Not fund mail');
    expect(errorMessage).toBeInTheDocument();
  });
});