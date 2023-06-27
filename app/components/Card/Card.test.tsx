import { describe, beforeEach, it, expect } from 'vitest';
import { render } from "@testing-library/react";
import type { RenderResult } from '@testing-library/react';
import Card from "./Card";
import verduras from './dummies/verduras-frutas-semillas.webp';

describe("When a Card is rendered", () => {
  let cardView: RenderResult;
  const props = {
    title: "Ensala con frutas",
    description:
      "Ensalada de lechuga italiana, cebolla morada, agucate, mango, piña, almendras, chia, semilla de calabaza y arandanos",
    images: [{
      id: "amodyio8sdansd89",
      src: verduras,
      alt: "Ensalada con frutas"
    }],
    price: 50,
  };
  
  beforeEach(() => {
    cardView = render(<Card {...props}></Card>);
  });

  it("Then the title should be shown", async () => {
    const title = await cardView.getByText(props.title);
    expect(title).toBeInTheDocument()
  });

  it("Then the description should be shown", async () => {
    const description = await cardView.getByText(props.description);
    expect(description).toBeInTheDocument()
  });

  it("Then then at least one image should be shown", async () => {
    const image = await cardView.getByRole('img');
    expect(image).toBeInTheDocument()
  });
});
