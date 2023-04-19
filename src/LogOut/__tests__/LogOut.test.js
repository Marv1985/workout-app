import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import LogOut from "../LogOut";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "../../RouteSwitch/RouteSwitch";

const Mocks = () => {
  return (
    <BrowserRouter>
      <LogOut />
    </BrowserRouter>
  );
};

describe("Component renders and links work", () => {
  it("menu renders", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Home/i });
    expect(link).toHaveAttribute("href", "/");
  });

  test("navigating", async () => {
    render(<LogOut />, { wrapper: RouteSwitch });
    const user = userEvent.setup();
    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
    await user.click(screen.getByText(/Logout/i));
    expect(screen.getAllByText(/Sign Up/i)[0]).toBeInTheDocument();
  });
});
