import { render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Avatar from "./Avatar";
import userEvent from "@testing-library/user-event";

describe("When avatar component", () => {
  beforeEach(() => {});

  it("Then should render correctly", () => {
    const { container } = render(<Avatar />);

    expect(container).toBeInTheDocument();
  });

  it("Then if a photo exists, it should be shown", () => {
    const { container } = render(
      <Avatar photoUrl="https://example.com/avatar.png" />,
    );

    const photo = container.querySelector("img");
    expect(photo).toBeInTheDocument();
  });

  it("Then when a user name exist, the initials sould be shown", () => {
    const { getByText } = render(<Avatar userName="Jose Octavio" />);
    const initials = getByText("JO");

    expect(initials).toBeInTheDocument();
  });

  it("Then when custom onClick function is provided", async () => {
    const onClick = vi.fn();

    const user = userEvent.setup();

    const { findByTestId } = render(<Avatar onClick={onClick} />);

    const avatar = await findByTestId("avatar");

    await user.click(avatar);

    expect(onClick).toBeCalled();
  });
});
