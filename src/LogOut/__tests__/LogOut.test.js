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

/* Router navigation helper function */
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: RouteSwitch }),
  };
};

describe("Component renders and links work", () => {
  it("menu renders", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Home/i });
    expect(link).toHaveAttribute("href", "/ChooseProgram");
  });

  it("logout navigating", () => {
    renderWithRouter(<LogOut />, { route: "/" });
    expect(screen.getAllByText("Sign Up")[0]).toBeInTheDocument();
  });
  it("Choose program navigating", () => {
    renderWithRouter(<LogOut />, { route: "/ChooseProgram" });
    expect(screen.getAllByText("WORKOUT PROGRAMS")[0]).toBeInTheDocument();
  });
});
